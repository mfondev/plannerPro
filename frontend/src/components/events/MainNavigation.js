import React from 'react'
import { NavLink, Form, useRouteLoaderData } from 'react-router-dom'
import NewsletterSignup from './NewsLetterSignup'
import logo from '../../../src/image/logo.svg'
import '../../styles/Nav.css'

export default function MainNavigation() {
  const token = useRouteLoaderData('root')
  return (
    <>
      <nav>
        <img src={logo} alt='logo' className='logo' />
        <div className='nav-links'>
          <NavLink to='/'>planner Pro</NavLink>
          <NavLink to='events'>Events</NavLink>
          <NavLink to='newsletter'>NewsLetter</NavLink>
          <div className='newsPage'>
            <NewsletterSignup />
          </div>
        </div>
        {!token && <NavLink to='auth?mode=login'>Log in</NavLink>}
        {token && (
          <Form action='/logout' method='post'>
            <button className='logout'>Logout</button>
          </Form>
        )}
      </nav>
    </>
  )
}
