import React from 'react'
import { Link } from 'react-router-dom'

export default function EventNavigation() {
  return (
    <>
      <Link>All Events</Link>
      <Link to='newevents'>New Events</Link>
    </>
  )
}
