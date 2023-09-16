import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom"
import InputForm from "./InputForm"
import ReviewForm from "./ReviewForm"
import InputForm2 from "./InputForm2"

const Router = createBrowserRouter([
 {
  path: "/",
  element: <InputForm />
 },
 {
  path: "/ReviewForm",
  element: <ReviewForm />
 },
 {
  path: "/InputForm",
  element: <InputForm2 />
 }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
)
