import MainLayout from '../../components/layout/MainLayout'
import RegisterForm from '../../components/section/auth/RegisterForm'

export default function Register() {
  return (
    <MainLayout props={
        <RegisterForm />
    }/>
  )
}
