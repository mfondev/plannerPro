import React from 'react'

export default function PageContent({title,children}) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
