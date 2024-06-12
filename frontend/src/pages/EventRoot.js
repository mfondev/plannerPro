import React from 'react'
import EventNavigation from '../components/events/EventNavigation'
import { Outlet } from 'react-router-dom'

export default function EventLayout() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  )
}
