import React from 'react'
import {
  Form,
  useSearchParams,
  Link,
  useActionData,
  useNavigation,
} from 'react-router-dom'
import authImage from '../../../src/image/authImg.png'
import '../../styles/AuthForm.css'
import { TextField, InputAdornment } from '@mui/material'
import { MailOutlineRoundedIcon } from '@mui/icons-material/MailOutlineRounded'
import EmailIcon from '@mui/icons-material/Email'

export default function AuthForm() {
  const data = useActionData()
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <>
      <div className='flex'>
        <img src={authImage} alt='auth image' className='authImg' />
        <Form method='post' className='form'>
          <h1>{isLogin ? 'Log in' : 'Create New User'}</h1>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
          <p>
            <label htmlFor='email'>Email address</label>
            <div className='input-container'>
              <input
                id='email'
                type='email'
                name='email'
                required
                placeholder='Enter email'
              />
            </div>
          </p>

          <p>
            <label htmlFor='password'>Set password</label>
            <div className='password-container'>
              <input
                id='password'
                type='password'
                name='password'
                required
                placeholder='Enter password'
              />
            </div>
          </p>
          <button disabled={isSubmitting} className='proceed'>
            {isSubmitting ? 'submitting...' : 'Proceed'}
          </button>
          <p className='center'>
            By signing up, you agree to our{' '}
            <span className='highlight'>Terms of service</span>
          </p>
          <div className='center'>
            <p>
              {!isLogin ? 'Already have an account?' : 'Dont have an account?'}
            </p>
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
              <p className='highlight'>
                {isLogin ? 'Create new user' : 'Login'}
              </p>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}
