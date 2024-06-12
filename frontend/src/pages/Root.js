import React from 'react'
import {Outlet} from 'react-router-dom'
import MainNavigation from '../components/events/MainNavigation'

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

// {"events":[{"title":"Photos","image":"https://.com","date":"2024-05-31","description":"asadadad","id":"956a03e0-5a17-4c07-8863-bcab7e6dc051"}],"users":[{"email":"atauba@gmail.com","password":"$2a$12$DpB2.GA0TKGqZG/xUjWdUeYdiZ0ln8aMj2Ektn8.Maq3R7Ik8Nb0W","id":"679ead07-4111-4a24-a56a-8801df28295c"},{"email":"ataubagideon@gmail.com","password":"$2a$12$fkNcy1jQqWnBpsSwsp/2DuV.BMBAcIU62aOdEqGwH0NYOjhN9O.BW","id":"e549bea8-a49e-40f3-9dbd-26658f8381fa"}]}