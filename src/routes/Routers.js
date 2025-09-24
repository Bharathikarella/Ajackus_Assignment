import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routs } from './Routs'
import { Home } from '../pages/Home'
import { AddDataForm } from '../pages/AddDataForm'
import { FallBackPage } from '../pages/FallBackPage'
import { EditUser } from '../pages/EditUser'

export const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path={Routs.HOME} element={<Home/>}/>
            <Route path={Routs.ADDFORM} element={<AddDataForm/>}/>
            <Route path={Routs.EDITFORM} element={<EditUser/>}/>
            <Route path="*" element={<FallBackPage/>} />
        </Routes>
    </div>
  )
}