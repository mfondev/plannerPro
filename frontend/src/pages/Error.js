import React from 'react'
import PageContent from '../components/PageContent'

export default function Error({ children }) {
  let title = 'Something went wrong'
  let message = 'Could not fetch page or resource'
  return (
    <>
      <PageContent title={title} message={message}>
        {children}
      </PageContent>
    </>
  )
}
