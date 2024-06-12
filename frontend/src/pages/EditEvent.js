import React from 'react'
import EventForm from '../components/events/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

export default function EditEvent() {
  const data = useRouteLoaderData('event-detail')
  // console.log(data);
  return (
    <>
      <EventForm event={data.event} method='patch' />
    </>
  )
}
