import React from 'react'
import { NavLink, Form, useRouteLoaderData } from 'react-router-dom'
import NewsletterSignup from './NewsLetterSignup'

export default function MainNavigation() {
  const token = useRouteLoaderData('root')
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='events'>Events</NavLink>
      <NavLink to='newsletter'>NewsLetter</NavLink>
      {!token && <NavLink to='auth?mode=login'>Authentication</NavLink>}

      {token && (
        // <NavLink to='logout'>
          <Form action='/logout' method='post'>
            <button>Logout</button>
          </Form>
        // </NavLink>
      )}

      <NewsletterSignup />
    </>
  )
}
