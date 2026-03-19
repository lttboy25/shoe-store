import React from 'react'
import ProductCard from './ProductCard';

export default function ProductGrid({productList = []}) {
    if (!productList.length) return null; //khong co san pham...
  return (
    <div className='row g-4' style={{marginLeft:"46px"}}>
        {productList.map((product) => (
            <div key={product.id} className='col-6 col-md-4 col-lg-3' style={{paddingRight:"15px"}}>
                <ProductCard product={product}/>
            </div>
        )

        )}
    </div>
  )
}
