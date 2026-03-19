import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeHero from '../../components/section/home/HomeHero'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid.jsx'
import products from '../../data/products.js'
import CategoryBannerSection from '../../components/section/home/CategoryBannerSection.jsx'

export default function Home() {
  return (
    <>
        <MainLayout props={
            <div>
                <HomeHero />
                <div>
                    <span><hr /></span><span>GIÁ ƯU ĐÃI</span><span><hr /></span>
                </div>
                <ProductGrid list={products} quantity={8}/>
                <div>
                    <span><hr /></span><span>SẢN PHẨM BÁN CHẠY</span><span><hr /></span>
                </div>
                <ProductGrid list={products} quantity={8}/>
                <div>
                    <span>DANH MỤC MUA HÀNG</span>
                </div>
                <CategoryBannerSection />
            </div>
        }/>
    </>
  )
}