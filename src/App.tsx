import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SecondPage from './pages/SecondPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  )
}
