const baseProducts = [
  {
    id: "p001",
    sku: "HM6804-102",
    name: "Nike Vomero 18 - White / Electric Green",
    slug: "nike-vomero-18-white-electric-green",
    brand: "Nike",
    categoryId: "cat_running",

    price: 2555000,
    originalPrice: 4250000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338095/Nike_Vomero_18_-_White_Electric_Green_qpsth6.png",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338105/Nike_Vomero_18_-_White_Electric_Green_otjkf2.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338100/Nike_Vomero_18_-_White_Electric_Green_ntjo7u.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338113/Nike_Vomero_18_-_White_Electric_Green_hfplhu.png"
    ],

    variants: [
      {
        color: "White / Electric Green / Volt / Black",
        colorCode: "#ccff00",
        sizes: [
          { size: "36", stock: 8 }
        ]
      }
    ],

    shortDescription: "Nike Vomero 18 phiên bản White/Electric Green nổi bật với đệm ZoomX cao cấp kết hợp ReactX foam cho trải nghiệm chạy êm ái tối đa.",

    description: "Nike Vomero 18 - White / Electric Green mang đến khả năng đệm tối đa cho chạy bộ hằng ngày.",

    specifications: {
      cushioning: "ZoomX + ReactX dual-density foam",
      heelToToeDrop: "10mm",
      outsole: "Rubber pods traction",
      upper: "Engineered mesh",
      weight: "263g (Women's UK 5.5)",
      style: "Running",
      gender: "Women",
      shownColor: "White / Electric Green / Volt / Black"
    },

    disclaimer: {
      image: "Màu sắc có thể chênh lệch do ánh sáng và thiết bị hiển thị.",
      legal: "Không sử dụng như thiết bị bảo hộ cá nhân (PPE)."
    },

    rating: 4.8,
    reviewCount: 36,
    sold: 185,
    views: 1420,

    badges: ["sale"],
    status: "active",

    seo: {
      title: "Nike Vomero 18 White Electric Green Chính Hãng Giá Tốt",
      description:
        "Giày chạy bộ Nike Vomero 18 White Electric Green với ZoomX và ReactX foam, đệm tối đa, êm ái cho chạy hằng ngày."
    },

    createdAt: "2026-02-17T11:30:00Z",
    updatedAt: "2026-02-17T11:30:00Z"
  },

  {
    id: "p002",
    sku: "NIKE-GF6-BLACK-001",
    name: "Nike Giannis Freak 6 EP - Black/Red",
    slug: "nike-giannis-freak-6-ep-black-red",
    brand: "Nike",
    categoryId: "cat_basketball",

    price: 1725000,
    originalPrice: 3830000,
    discountPercent: 55,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771336053/Nike_Giannis_Freak_6_EP_-_White_sxaz4w.png",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771336082/Nike_Giannis_Freak_6_EP_-_White_fdxzjc.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771336113/Nike_Giannis_Freak_6_EP_-_White_d24kna.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771336125/Nike_Giannis_Freak_6_EP_-_White_jgdrp1.png"
    ],

    variants: [
      {
        color: "Black/Red",
        colorCode: "#111111",
        sizes: [
          { size: "40", stock: 5 },
          { size: "40.5", stock: 7 },
          { size: "41", stock: 6 },
          { size: "42", stock: 4 },
          { size: "42.5", stock: 8 },
          { size: "43", stock: 3 },
          { size: "44", stock: 2 }
        ]
      }
    ],

    shortDescription: "Giày bóng rổ Nike Giannis Freak 6 EP phiên bản Black/Red, độ bám cao, hỗ trợ chuyển hướng nhanh.",
    description: "Nike Giannis Freak 6 EP - Black/Red được thiết kế dành cho những pha bứt tốc và chuyển hướng đột ngột.",

    specifications: {
      material: "Engineered Mesh",
      sole: "Rubber outsole",
      cushioning: "Air Zoom",
      style: "Basketball",
      gender: "Unisex",
      origin: "Vietnam"
    },

    disclaimer: {
      image: "Hình ảnh sản phẩm có thể chênh lệch màu sắc do ánh sáng.",
      legal: "Sản phẩm chính hãng Nike, bảo hành theo chính sách hãng."
    },

    rating: 4.8,
    reviewCount: 96,
    sold: 530,
    views: 3420,

    badges: ["sale", "hot"],
    status: "active",

    seo: {
      title: "Nike Giannis Freak 6 EP Black Red Chính Hãng",
      description:
        "Giày bóng rổ Nike Giannis Freak 6 EP Black/Red chính hãng, độ bám cao, hỗ trợ bứt tốc mạnh mẽ."
    },

    createdAt: "2026-02-10T09:00:00Z",
    updatedAt: "2026-02-15T11:30:00Z"
  },


  {
    id: "p003",
    sku: "HF1556-003",
    name: "Nike Pegasus 41 - Gunsmoke",
    slug: "nike-pegasus-41-gunsmoke",
    brand: "Nike",
    categoryId: "cat_running",

    price: 1915000,
    originalPrice: 3830000,
    discountPercent: 50,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771337130/Nike_Pegasus_41_-_Gunsmoke_ckhr12.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337125/Nike_Pegasus_41_-_Gunsmoke_gm3df4.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337139/Nike_Pegasus_41_-_Gunsmoke_cranqf.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337143/Nike_Pegasus_41_-_Gunsmoke_krblqc.jpg"
    ],

    variants: [
      {
        color: "Gunsmoke / Cool Grey / Pure Platinum / White",
        colorCode: "#6e6e6e",
        sizes: [
          { size: "44.5", stock: 6 },
          { size: "45", stock: 4 }
        ]
      }
    ],

    shortDescription: "Giày chạy bộ Nike Pegasus 41 - Gunsmoke với đệm Air Zoom kép, nhẹ và phản hồi nhanh.",

    description: "Nike Pegasus 41 mang lại cảm giác êm ái và phản hồi năng lượng vượt trội cho các buổi chạy hàng ngày.",

    specifications: {
      weight: "Approx. 297g (men's size 9)",
      heelToToeDrop: "10mm",
      cushioning: "Dual Air Zoom + ReactX foam",
      outsole: "Waffle rubber",
      style: "Running",
      gender: "Men",
      origin: "Indonesia / Vietnam"
    },

    disclaimer: {
      image: "Màu sắc thực tế có thể chênh lệch do ánh sáng và màn hình.",
      legal: "Không dùng như thiết bị bảo hộ cá nhân (PPE)."
    },

    rating: 4.7,
    reviewCount: 128,
    sold: 860,
    views: 5420,

    badges: ["sale"],
    status: "active",

    seo: {
      title: "Nike Pegasus 41 Gunsmoke Chính Hãng Giá Tốt",
      description:
        "Giày chạy bộ Nike Pegasus 41 Gunsmoke với đệm Air Zoom kép, ReactX foam, độ bám waffle vượt trội."
    },

    createdAt: "2026-02-17T08:30:00Z",
    updatedAt: "2026-02-17T08:30:00Z"
  },

  {
    id: "p004",
    sku: "HF2881-101",
    name: "Nike Sabrina 3 - Mint Foam",
    slug: "nike-sabrina-3-mint-foam",
    brand: "Nike",
    categoryId: "cat_basketball",

    price: 2300000,
    originalPrice: 3830000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771337362/Nike_Pegasus_41_-_Ole_Miss_axtkdf.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337370/Nike_Pegasus_41_-_Ole_Miss_mscntd.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337376/Nike_Pegasus_41_-_Ole_Miss_b1wck6.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337382/Nike_Pegasus_41_-_Ole_Miss_tqui8c.jpg"
    ],

    variants: [
      {
        color: "White / Mint Foam / Metallic Silver",
        colorCode: "#dff5f1",
        sizes: [
          { size: "40", stock: 6 },
          { size: "40.5", stock: 5 },
          { size: "41", stock: 7 },
          { size: "42", stock: 4 },
          { size: "42.5", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày bóng rổ Nike Sabrina 3 - Mint Foam, nhẹ, ôm chân và hỗ trợ chuyển hướng linh hoạt.",

    description: "Nike Sabrina 3 được thiết kế để theo kịp lối chơi tốc độ cao và khả năng kiểm soát bóng linh hoạt.",

    specifications: {
      cushioning: "Forefoot Air Zoom",
      midsole: "Dual-density foam",
      outsole: "Multidirectional traction pattern",
      upper: "Engineered mesh with cable support",
      style: "Basketball",
      gender: "Unisex",
      shownColor: "White / Mint Foam / Metallic Silver"
    },

    disclaimer: {
      image: "Màu sắc có thể chênh lệch do ánh sáng và màn hình.",
      legal: "Sản phẩm chính hãng Nike, bảo hành theo chính sách hãng."
    },

    rating: 4.6,
    reviewCount: 74,
    sold: 420,
    views: 3100,

    badges: ["sale"],
    status: "active",

    seo: {
      title: "Nike Sabrina 3 Mint Foam Chính Hãng Giá Tốt",
      description:
        "Giày bóng rổ Nike Sabrina 3 Mint Foam chính hãng, nhẹ, ôm chân và hỗ trợ đổi hướng linh hoạt."
    },

    createdAt: "2026-02-17T10:00:00Z",
    updatedAt: "2026-02-17T10:00:00Z"
  },

  {
    id: "p005",
    sku: "HF2881-101",
    name: "Nike Sabrina 3 - Mint Foam",
    slug: "nike-sabrina-3-mint-foam",
    brand: "Nike",
    categoryId: "cat_basketball",

    price: 2300000,
    originalPrice: 3830000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771337279/Nike_Sabrina_3_-_Mint_Foam_qisu6n.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337292/Nike_Sabrina_3_-_Mint_Foam_tej4o1.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337286/Nike_Sabrina_3_-_Mint_Foam_cysmhn.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337298/Nike_Sabrina_3_-_Mint_Foam_mmhe05.jpg"
    ],

    variants: [
      {
        color: "White / Mint Foam / Metallic Silver",
        colorCode: "#dff5f1",
        sizes: [
          { size: "40", stock: 6 },
          { size: "40.5", stock: 5 },
          { size: "41", stock: 7 },
          { size: "42", stock: 4 },
          { size: "42.5", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày bóng rổ Nike Sabrina 3 - Mint Foam, nhẹ, ôm chân và hỗ trợ chuyển hướng linh hoạt.",
    description: "Nike Sabrina 3 được thiết kế để theo kịp lối chơi tốc độ cao và khả năng kiểm soát bóng linh hoạt.",

    specifications: {
      cushioning: "Forefoot Air Zoom",
      midsole: "Dual-density foam",
      outsole: "Multidirectional traction pattern",
      upper: "Engineered mesh with cable support",
      style: "Basketball",
      gender: "Unisex",
      shownColor: "White / Mint Foam / Metallic Silver"
    },

    disclaimer: {
      image: "Màu sắc có thể chênh lệch do ánh sáng và màn hình.",
      legal: "Sản phẩm chính hãng Nike, bảo hành theo chính sách hãng."
    },

    rating: 4.6,
    reviewCount: 74,
    sold: 420,
    views: 3100,

    badges: ["sale"],
    status: "active",

    seo: {
      title: "Nike Sabrina 3 Mint Foam Chính Hãng Giá Tốt",
      description:
        "Giày bóng rổ Nike Sabrina 3 Mint Foam chính hãng, nhẹ, ôm chân và hỗ trợ đổi hướng linh hoạt."
    },

    createdAt: "2026-02-17T10:00:00Z",
    updatedAt: "2026-02-17T10:00:00Z"
  }

];

// nhân bản + xáo trộn để đủ 20 sản phẩm
const products = Array.from({ length: 20 }, (_, i) => ({
  ...baseProducts[i % 5],
  id: `${baseProducts[i % 5].id}-${i}`
}));

export default products;
