import React from 'react'
import { useLoaderData, json, defer, Await } from 'react-router-dom'
import EventList from '../components/events/EventList'
import { Suspense } from 'react'

export default function Events() {
  const { events } = useLoaderData()
  // console.log(data);
  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events')
  const data = await response.json()
  const resData = data.events
  // console.log(resData)

  if (!response.ok) {
    throw json(
      { message: 'failed to fetch events' },
      {
        status: 500,
      }
    )
  }
  return resData
}

export async function loader() {
  return defer({
    events: loadEvents(),
  })
}
