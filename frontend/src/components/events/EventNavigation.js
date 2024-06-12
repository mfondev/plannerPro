import React from 'react'
import { Link,useRouteLoaderData } from 'react-router-dom'
import '../../styles/EventNav.css'

export default function EventNavigation() {
  const token = useRouteLoaderData('root')
  
  return (
    <>
      <div className='links'>
        <Link className='linkBtn'>All Events</Link>
        {token && (
          <Link to='newevents' className='linkBtn'>
            New Events
          </Link>
        )}
      </div>
    </>
  )
}
