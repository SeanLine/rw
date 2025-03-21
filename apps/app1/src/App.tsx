import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [text, setText] = useState('123')

  const setTextFunc = useCallback((value: string) => {
    setText(value)
  }, [])

  useEffect(() => {
    // 创建WebSocket连接
    const socket = new WebSocket('ws://localhost:8080')

    // 监听连接建立事件
    socket.addEventListener('open', event => {
      console.log('WebSocket connection opened:', event)
    })

    // 监听消息接收事件
    socket.addEventListener('message', event => {
      console.log('WebSocket message received:', event)
      setTextFunc(event.data as string)
    })

    // 监听连接关闭事件
    socket.addEventListener('close', event => {
      console.log('WebSocket connection closed:', event)
    })

    // 监听发生错误事件
    socket.addEventListener('error', event => {
      console.error('WebSocket error:', event)
    })
  }, [])

  return <div>{text}</div>
}

export default App
