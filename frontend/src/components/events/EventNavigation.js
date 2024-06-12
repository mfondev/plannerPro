import React from 'react'
import { Link,useRouteLoaderData } from 'react-router-dom'

export default function EventNavigation() {
  const token = useRouteLoaderData('root')
  
  return (
    <>
      <Link>All Events</Link>
      {token && <Link to='newevents'>New Events</Link>}
    </>
  )
}
