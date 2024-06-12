import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/EventList.css'

export default function EventList({events}) {
  return (
    <>
      <div className='events'>
        {events.length === 0 ? (
          <p>No events available yet</p>
        ) : (
          <div className='list'>
            {events.map((event) => (
              <li key={event.id} className='item'>
                <Link to={event.id}>
                  <img src={event.image} alt={event.title} />
                  <div className='content'>
                    <h1>{event.title}</h1>
                    <p>{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
