import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root.js'
import HomePage from './pages/Home.js'
import EventLayout from './pages/EventRoot.js'
import Events from './pages/Events.js'
import NewEvents from './pages/NewEvents.js'
import Error from './pages/Error.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { index: true, element: <Events /> },
          { path: 'newevents', element: <NewEvents /> },
        ],
      },
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
