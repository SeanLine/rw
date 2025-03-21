import React from 'react'
import { Button } from 'antd'
import axios from 'axios'

import Request2 from './Request2'

const FlexEllipsis = React.lazy(
  () => import('package_b/src/FlexEllipsis') as Promise<{ default: React.FC }>
)

const Request = () => {
  const [isVisible, setVisible] = React.useState(false)
  const requestFunc = () => {
    // axios
    //   .post('http://localhost:8080/', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone',
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })

    axios
      .get('http://localhost:8080/', {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        debugger
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })

    axios.interceptors.request.use(config => {
      debugger
      return config
    })

    axios({
      adapter: 'fetch',
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    })
  }

  return (
    <>
      <Button onClick={requestFunc}>Request</Button>
      <Request2 />
      <div style={{ padding: '1rem' }}>
        <button onClick={() => setVisible(value => !value)}>Toggle Content</button>
      </div>
      <div style={{ padding: '1rem' }}>
        {isVisible && (
          <React.Suspense fallback={<h1>Loading....</h1>}>
            <FlexEllipsis />
          </React.Suspense>
        )}
      </div>
    </>
  )
}

export default Request
