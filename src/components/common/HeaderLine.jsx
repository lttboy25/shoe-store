import { color } from '@cloudinary/url-gen/qualifiers/background'
import React from 'react'

export default function HeaderLine({title}) {
  return (
    <div style={{
        
    display: "flex",
    alignItems: "center",
    gap: "16px",
    width: "100%",
    
    }}>
    <div style={{
        flex: 1,
    height: "1px",
    backgroundColor: "#ccc",
    }}></div>
      <h2 style={{
          color:"black",
        fontWeight:"bold",
        fontSize:"35px"
      }}>{title}</h2>
      <div style={{
        flex: 1,
    height: "1px",
    backgroundColor: "#ccc",
    }}></div>
    </div>
  )
}
