import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import accessRequest from "./api/accessRequest"
import requestArtist from './api/requestArtist'
import SideBar from './components/sidebar'
import Home from './components/content/Home'
import Search from './components/content/Search'

import './style.css'

function App() {

  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  }, (err) => Promise.reject(err)
  )

  axios.interceptors.response.use((resp) => Promise.resolve(resp), (err) => Promise.reject(err))

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      accessRequest()
    }
  }, [])

  requestArtist()

  return (
    <React.Fragment>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />} />
      </Routes>
    </React.Fragment>
  ) 
}

export default App
