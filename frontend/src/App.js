import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import RootLayout from './pages/Root.js'
import HomePage from './pages/Home.js'
import EventLayout from './pages/EventRoot.js'
import Events, { loader as eventLoader } from './pages/Events.js'
import NewEvents from './pages/NewEvents.js'
import Error from './pages/Error.js'
import EventDetail, {
  loader as eventDetailLoader,
} from './pages/EventDetail.js'
import EditEvent from './pages/EditEvent.js'
import NewsletterPage, {
  action as newsletterAction,y
} from './pages/NewsLetter.js'
import { action as manipulateAction } from './components/events/EventForm.js'
import Authentication, {
  action as authAction,
} from './pages/authentication/Authentication.js'
import { action as logoutAction } from './pages/authentication/logout.js'
import {checkAuthLoader, loader as tokenLoader} from './util/auth.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { index: true, element: <Events />, loader: eventLoader },
          {
            path: ':eventId',
            loader: eventDetailLoader,
            id: 'event-detail',
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              {
                path: 'edit',
                element: <EditEvent />,
                action: manipulateAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'newevents',
            element: <NewEvents />,
            action: manipulateAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      { path: 'auth', element: <Authentication />, action: authAction },
      { path: 'logout',  action: logoutAction },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
