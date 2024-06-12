import React from 'react'
import { Link } from 'react-router-dom'

export default function EventList({events}) {
  return (
    <>
      {events.length === 0 ? (
        <p>No events available yet</p>
      ) : (
        <div>
          {events.map((event) => (
            <li key={event.id}>
              <Link to={event.id}>
                <img src={event.image} alt={event.title} />
                <h1>{event.title}</h1>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </Link>
            </li>
          ))}
        </div>
      )} 
    </>
  )
}
