import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import LoginForm from '../../components/section/auth/LoginForm'

export default function Login() {
  return (
    <MainLayout props={
        <LoginForm/>
    }/>
  )
}
