import React from 'react'
import PageContent from '../components/events/PageContent'
import { useRouteError } from 'react-router-dom'

export default function Error({ children }) {
  const error = useRouteError()
  let title = 'An error occurred!'
  let message = 'Something went wrong!'
  
  if (error.status === 500) {
    message = error.data.message
  }
    if (error.status === 404) {
      title = 'Not found!'
      message = 'Could not find resource or page.'
    }
  return (
    <>
      <PageContent title={title} >
        {children}
      </PageContent>
    </>
  )
}
