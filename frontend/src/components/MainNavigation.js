import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavigation() {
  return (
    <>
      <NavLink to='/'>Home</NavLink>

      
      <NavLink to='events'>Events</NavLink>
    </>
  )
}
