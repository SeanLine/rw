import React from 'react'
import { createRoot } from 'react-dom/client'
import Request from './Request'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(<Request />)
