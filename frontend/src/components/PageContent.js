import React from 'react'

export default function PageContent({title,message}) {
  return (
    <div>
    <h1>{title}</h1>
    <p>{message}</p>
    </div>
  )
}
