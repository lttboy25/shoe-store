//Thẻ sản phẩm có thể sử dụng ở nhiều trang khác nhau home, cửa hàng, sản phẩm liên quan...
import React from 'react'
import Promotion from '../common/Promotion';
function ProductCard(props) {
    const {product} = props;
  return (
    <div style={{width:"325px", height: "410px", border: "1px solid #DDDDDD", paddingLeft: "12px", paddingRight:"11px", paddingBottom:"23px", paddingTop:"13px"}}>
        <div >
            <img src={product.thumbnail} alt={product.slug} style={{width:"300px", height:"260px"}}/>
            
        </div>
        <div>
            <h5 style={{marginTop:"22px", fontSize:"18px", textAlign:"left"}}>
                {product.name}
            </h5>
        </div>
        <div style={{marginTop:"22px", fontSize:"18px", textAlign:"left"}}>
            <span style={{ textDecoration: "line-through", fontWeight:"bold"}}>
                {product.originalPrice} đ
            </span>
            <span style={{marginLeft:"16px", color:"red", fontWeight:"bold"}}>
                {product.price} đ
            </span>
            <span style={{marginLeft:"1.9rem"}}>
                <Promotion title={product.discountPercent}/>
            </span>
        </div>
    </div>
  )
}



export default ProductCard
