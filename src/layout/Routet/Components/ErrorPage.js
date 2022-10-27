import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      
      <div className='container'>
        <h1 >Ops! An Error Ocurred!</h1>
        <div>
        <p>{error.statusText || error.message}</p>
        <p>{error.status}</p>
      </div>
      </div>
      
    </>
  )
}

export default ErrorPage