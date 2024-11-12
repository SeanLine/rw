import React from 'react'
import { Button } from 'antd'
import axios from 'axios'

const Request = () => {
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
      .get('http://localhost:8080/')
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
  }

  return (
    <>
      <Button onClick={requestFunc}>Request2</Button>
    </>
  )
}

export default Request
