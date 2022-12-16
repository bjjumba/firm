import React from 'react'
import Cards from './Cards'
import { Hero } from './Hero'
import {Routes,Route,Navigate} from 'react-router-dom'
import Book from './Book'

const MainFrame = () => {
  return (
    <>
     <Routes>
         <Route path="/" element={<Hero/>}/>
         <Route path="/lawyer" element={<Cards/>}/>
         <Route path="/book" element={<Book/>}/>
         
          {/* <Route
              path="*"
              element={<Navigate to="/not" replace />}
          /> */}
    </Routes>
    </>
  )
}

export default MainFrame