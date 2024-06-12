import React from 'react'
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from 'react-router-dom'
import '../../styles/EventForm.css'
import { getAuthToken } from '../../util/auth'

export default function EventForm({ event, method }) {
  const navigate = useNavigate()
  const navigation = useNavigation()
  const data = useActionData()
  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..')
  }
  return (
    <>
      <Form className='form-container' method={method}>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div className='form-group'>
          <label htmlFor='firstName' className='form-label'>
            Title
          </label>
          <input
            type='text'
            name='title'
            className='form-input'
            defaultValue={event ? event.title : ''}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='image' className='form-label'>
            Image
          </label>
          <input
            // type='image'
            id='image'
            className='form-input'
            name='image'
            defaultValue={event ? event.image : ''}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>
            Date
          </label>
          <input
            type='date'
            id='date'
            className='form-input'
            name='date'
            defaultValue={event ? event.date : ''}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message' className='form-label'>
            Description
          </label>
          <textarea
            id='message'
            name='description'
            className='textarea-input'
            defaultValue={event ? event.description : ''}
          ></textarea>
        </div>
        <button className='submit-button' onClick={cancelHandler}>
          cancel
        </button>
        <button className='submit-button'>
          {isSubmitting ? 'submitting...' : 'save'}
        </button>
      </Form>
    </>
  )
}

export async function action({ request, params }) {
  const method = request.method
  const data = await request.formData()
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  let url = 'http://localhost:8080/events'
  const token = getAuthToken()

  if (method === 'PATCH') {
    const id = params.eventId
    url = 'http://localhost:8080/events/' + id
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(eventData),
  })

  if (response.status === 422) {
    return response
  }

  if (!response.ok) {
    throw json({ message: 'failed to submit events' }, { status: 422 })
  }
  return redirect('/events')
}
