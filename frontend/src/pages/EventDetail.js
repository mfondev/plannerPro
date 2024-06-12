import React from 'react'
import EventItem from '../components/events/EventItem'
import { useRouteLoaderData, json, redirect } from 'react-router-dom'
import { getAuthToken } from '../util/auth'

export default function EventDetail() {
  const data = useRouteLoaderData('event-detail')
  // const action =
  return <EventItem events={data.event} />
}

export async function loader({ params }) {
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id)
  const data = await response.json()

  if (!response.ok) {
    throw json({ message: 'could not fetch event lists' }, { status: 500 })
  } else {
    return data
  }
}

export async function action({ request, params }) {
  const token = getAuthToken()

  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  })

  if (!response.ok) {
    throw json({ message: 'could not delete event' }, { status: 500 })
  }
  return redirect('/events')
}
