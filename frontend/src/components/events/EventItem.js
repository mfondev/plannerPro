import React from 'react'
import {
  Link,
  useSubmit,
  useNavigation,
  useRouteLoaderData,
} from 'react-router-dom'

export default function EventItem({ events }) {
  const token = useRouteLoaderData('root')
  const navigation = useNavigation()
  const isDeleting = (navigation.state = 'submitting')
  const submit = useSubmit()
  function deleteHandler() {
    const confirm = window.confirm('Are you sure you want to proceed?')
    if (confirm) {
      submit(null, { method: 'delete' })
    }
  }
  return (
    <>
      <h1>{events.title}</h1>
      <img src={events.image} alt={events.title} />
      <p>{events.description}</p>
      {token && (
        <div>
          <Link to='edit'>Edit</Link>
          <button onClick={deleteHandler}>
            {!isDeleting ? 'Deleting' : 'Delete'}
          </button>
        </div>
      )}
    </>
  )
}
