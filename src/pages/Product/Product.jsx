import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HeaderLine from '../../components/common/HeaderLine'

export default function Product() {
  return (
    <>
        <MainLayout props={
            <div>
                <HeaderLine title={"Cửa hàng"}/>
            </div>
        }/>
    </>
  )
}
