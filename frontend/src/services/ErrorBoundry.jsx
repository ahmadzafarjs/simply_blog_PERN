import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorBoundry() {
    const error = useRouteError()
  return (
    <div>
      {error ? <h1>Error: {error.message}</h1> : null}
    </div>
  )
}

export default ErrorBoundry
