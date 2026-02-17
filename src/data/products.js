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
  },

  {
    id: "p006",
    sku: "JQ2832",
    name: "adidas Samba OG Junior - Cloud White / Ash Blue",
    slug: "adidas-samba-og-junior-cloud-white-ash-blue",
    brand: "Adidas",
    categoryId: "cat_sneaker",

    price: 1360000,
    originalPrice: 1700000,
    discountPercent: 20,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338752/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_brcghy.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338757/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_ncjowq.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338763/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_aahvw9.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338771/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_l1q5yb.jpg"
    ],

    variants: [
      {
        color: "Cloud White / Ash Blue / Gum",
        colorCode: "#ffffff",
        sizes: [
          { size: "36", stock: 10 }
        ]
      }
    ],

    shortDescription: "Phiên bản adidas Samba OG Junior phối trắng xanh Ash Blue cổ điển với đế gum đặc trưng.",

    description: "Đôi giày Samba chính thức cho phong cách mỗi ngày.",

    specifications: {
      fit: "Regular fit",
      upper: "Leather upper",
      insole: "Ortholite",
      outsole: "Gum rubber",
      gender: "Junior",
      shownColor: "Cloud White / Ash Blue / Gum"
    },

    status: "active",
    createdAt: "2026-02-17T11:00:00Z",
    updatedAt: "2026-02-17T11:00:00Z"
  },

  {
    id: "p007",
    sku: "IG4507",
    name: "adidas Japan - Red",
    slug: "adidas-japan-red",
    brand: "Adidas",
    categoryId: "cat_sneaker",

    price: 1740000,
    originalPrice: 2900000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338780/adidas_Japan_-_Red_kfv0yu.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338786/adidas_Japan_-_Red_twal3e.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338793/adidas_Japan_-_Red_lkmlxf.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338800/adidas_Japan_-_Red_ipzoc4.jpg"
    ],

    variants: [
      {
        color: "Better Scarlet / Off White / Orange Tint",
        colorCode: "#b11226",
        sizes: [
          { size: "38.5", stock: 5 },
          { size: "41", stock: 6 }
        ]
      }
    ],

    shortDescription: "Phiên bản tái bản adidas Japan 1964 phối đỏ nổi bật, đậm chất vintage.",

    description: "Đôi giày reissue kỷ niệm sự kiện thể thao toàn cầu 1964 tại Nhật Bản.",

    specifications: {
      fit: "Regular fit",
      upper: "Leather",
      outsole: "Rubber outsole",
      style: "Lifestyle",
      gender: "Unisex"
    },

    status: "active",
    createdAt: "2026-02-17T11:00:00Z",
    updatedAt: "2026-02-17T11:00:00Z"
  },

  {
    id: "p008",
    sku: "JS5052",
    name: "Bad Bunny x adidas Gazelle Indoor - Cabo Rojo",
    slug: "bad-bunny-adidas-gazelle-indoor-cabo-rojo",
    brand: "Adidas",
    categoryId: "cat_sneaker",

    price: 1980000,
    originalPrice: 3600000,
    discountPercent: 45,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338806/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_mejacx.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338812/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_umlgdx.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338818/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_vwewmo.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338823/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_mbkqra.jpg"
    ],

    variants: [
      {
        color: "Wonder Clay / Wonder Quartz / Ash Pink",
        colorCode: "#f2a6a0",
        sizes: [
          { size: "36.5", stock: 4 }
        ]
      }
    ],

    shortDescription: "Phiên bản collab Bad Bunny với adidas Gazelle Indoor phối hồng Cabo Rojo độc đáo.",

    description: "Giày indoor phong cách thời trang với chất liệu da cao cấp.",

    specifications: {
      fit: "Regular fit",
      upper: "Leather & textile",
      outsole: "Rubber",
      style: "Indoor / Lifestyle",
      gender: "Unisex"
    },

    status: "active",
    createdAt: "2026-02-17T11:00:00Z",
    updatedAt: "2026-02-17T11:00:00Z"
  },

  {
    id: "p009",
    sku: "JR1776",
    name: "adidas Japan Wales Bonner - Light Purple",
    slug: "adidas-japan-wales-bonner-light-purple",
    brand: "Adidas",
    categoryId: "cat_sneaker",

    price: 2600000,
    originalPrice: 2600000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338830/adidas_Japan_Wales_Bonner_-_Light_Purple_hk3cao.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338837/adidas_Japan_Wales_Bonner_-_Light_Purple_zeild9.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338845/adidas_Japan_Wales_Bonner_-_Light_Purple_yd0f5i.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338852/adidas_Japan_Wales_Bonner_-_Light_Purple_g71wji.jpg"
    ],

    variants: [
      {
        color: "Light Purple / Brown",
        colorCode: "#b6a4e6",
        sizes: [
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Collab adidas Japan x Wales Bonner phối tím nhạt sang trọng.",

    description: "Thiết kế kết hợp giữa phong cách cổ điển và hiện đại.",

    specifications: {
      fit: "Regular fit",
      upper: "Leather upper",
      outsole: "Rubber outsole",
      construction: "Cold cement",
      gender: "Unisex"
    },

    status: "active",
    createdAt: "2026-02-17T11:00:00Z",
    updatedAt: "2026-02-17T11:00:00Z"
  },

  {
    id: "p010",
    sku: "HQ9354",
    name: "adidas Blanc - Brown",
    slug: "adidas-blanc-brown",
    brand: "Adidas",
    categoryId: "cat_sneaker",

    price: 1500000,
    originalPrice: 1500000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338858/adidas_Blanc_-_Brown_nut3fj.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338864/adidas_Blanc_-_Brown_j8jt3v.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338871/adidas_Blanc_-_Brown_q8aoxm.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338878/adidas_Blanc_-_Brown_iubn0m.jpg"
    ],

    variants: [
      {
        color: "Brown / Cream",
        colorCode: "#4b2e1f",
        sizes: [
          { size: "36", stock: 8 }
        ]
      }
    ],

    shortDescription: "adidas Blanc phối nâu cổ điển, thiết kế tối giản dễ phối đồ.",

    description: "Thiết kế da trơn màu nâu sang trọng với 3 sọc cream nổi bật.",

    specifications: {
      upper: "Leather",
      outsole: "Rubber",
      style: "Lifestyle",
      gender: "Unisex"
    },

    status: "active",
    createdAt: "2026-02-17T11:00:00Z",
    updatedAt: "2026-02-17T11:00:00Z"
  },

  {
    id: "p011",
    sku: "HSM012001CAM",
    name: "Giày Thể Thao Biti’s Hunter EZ Lift Nam Màu Cam",
    slug: "bitis-hunter-ez-lift-nam-mau-cam",
    brand: "Biti’s Hunter",
    categoryId: "cat_sneaker",

    price: 1295000,
    originalPrice: 1295000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339712/Cam_suqmki.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339718/Cam_l3i5bg.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339724/Cam_gjlebx.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339731/Cam_btrbmu.jpg"
    ],

    variants: [
      {
        color: "White / Orange",
        colorCode: "#ff6a00",
        sizes: [
          { size: "39", stock: 4 },
          { size: "40", stock: 3 },
          { size: "41", stock: 3 },
          { size: "42", stock: 2 },
          { size: "43", stock: 1 },
          { size: "44", stock: 1 }
        ]
      }
    ],

    shortDescription: "Hunter EZ Lift nam phối trắng cam năng động.",

    description: "Thiết kế thể thao hiện đại với đế nâng êm ái, upper lưới thoáng khí giúp di chuyển linh hoạt suốt ngày dài.",

    specifications: {
      upper: "Mesh Fabric",
      outsole: "EVA + Rubber",
      style: "Running / Lifestyle",
      gender: "Men"
    },

    status: "active",
    createdAt: "2026-02-17T12:00:00Z",
    updatedAt: "2026-02-17T12:00:00Z"
  },

  {
    id: "p012",
    sku: "HSM015500DEN",
    name: "Giày Thể Thao Biti’s Hunter Evo Nam Màu Đen",
    slug: "bitis-hunter-evo-nam-mau-den",
    brand: "Biti’s Hunter",
    categoryId: "cat_sneaker",

    price: 825000,
    originalPrice: 825000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339740/en_ynwu30.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339745/en_lkygqm.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339752/en_of36nu.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339757/en_zy4l57.jpg"
    ],

    variants: [
      {
        color: "Black / White",
        colorCode: "#111111",
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 5 },
          { size: "42", stock: 5 },
          { size: "43", stock: 4 },
          { size: "44", stock: 3 },
          { size: "45", stock: 3 }
        ]
      }
    ],

    shortDescription: "Hunter Evo nam màu đen cá tính, form cổ điển.",

    description: "Thiết kế đơn giản, dễ phối đồ với chất liệu da tổng hợp và đế cao su bền bỉ.",

    specifications: {
      upper: "Synthetic Leather",
      outsole: "Rubber",
      style: "Lifestyle",
      gender: "Men"
    },

    status: "active",
    createdAt: "2026-02-17T12:05:00Z",
    updatedAt: "2026-02-17T12:05:00Z"
  },

  {
    id: "p013",
    sku: "HSM015500KEM",
    name: "Giày Thể Thao Biti’s Hunter Evo Nam Màu Kem",
    slug: "bitis-hunter-evo-nam-mau-kem",
    brand: "Biti’s Hunter",
    categoryId: "cat_sneaker",

    price: 825000,
    originalPrice: 825000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339763/Kem_i5qmgs.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339768/Kem_lf05bf.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339774/Kem_ucn2cj.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339779/Kem_e9makz.jpg"
    ],

    variants: [
      {
        color: "Cream / Brown",
        colorCode: "#e8d8c3",
        sizes: [
          { size: "40", stock: 2 },
          { size: "41", stock: 2 },
          { size: "42", stock: 2 },
          { size: "43", stock: 1 },
          { size: "44", stock: 1 },
          { size: "45", stock: 1 }
        ]
      }
    ],

    shortDescription: "Hunter Evo nam màu kem phong cách retro.",

    description: "Phối màu kem nâu nhẹ nhàng, phù hợp phong cách streetwear và casual.",

    specifications: {
      upper: "Synthetic Leather",
      outsole: "Rubber",
      style: "Lifestyle",
      gender: "Men"
    },

    status: "active",
    createdAt: "2026-02-17T12:10:00Z",
    updatedAt: "2026-02-17T12:10:00Z"
  },

  {
    id: "p014",
    sku: "HSM011900XNH",
    name: "Giày Thể Thao Biti’s Hunter Street 2.0 Nam Màu Xanh Nhớt",
    slug: "bitis-hunter-street-2-0-nam-xanh-nhot",
    brand: "Biti’s Hunter",
    categoryId: "cat_sneaker",

    price: 715000,
    originalPrice: 715000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339786/Xanh_Nht_f2dzzv.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339793/Xanh_Nht_wttjmj.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339800/Xanh_Nht_zmbwqw.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339811/Xanh_Nht_jbh2sd.jpg"
    ],

    variants: [
      {
        color: "White / Blue",
        colorCode: "#1e4fa3",
        sizes: [
          { size: "39", stock: 1 },
          { size: "40", stock: 0 },
          { size: "41", stock: 0 },
          { size: "42", stock: 0 },
          { size: "43", stock: 0 },
          { size: "44", stock: 0 }
        ]
      }
    ],

    shortDescription: "Hunter Street 2.0 phối xanh nổi bật.",

    description: "Phong cách đường phố trẻ trung với form thấp cổ, đế cao su chống trượt.",

    specifications: {
      upper: "Canvas + Synthetic",
      outsole: "Rubber",
      style: "Streetwear",
      gender: "Men"
    },

    status: "active",
    createdAt: "2026-02-17T12:15:00Z",
    updatedAt: "2026-02-17T12:15:00Z"
  },

  {
    id: "p015",
    sku: "HSW010700HOG",
    name: "Giày Thể Thao Biti’s Hunter Litebound Nữ Màu Hồng",
    slug: "bitis-hunter-litebound-nu-mau-hong",
    brand: "Biti’s Hunter",
    categoryId: "cat_sneaker",

    price: 1175000,
    originalPrice: 1175000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339816/Hng_zryhxb.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339824/Hng_azmbid.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339829/Hng_rdfbp2.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339835/Hng_zdiuv2.jpg"
    ],

    variants: [
      {
        color: "Beige / Pink",
        colorCode: "#f2c6c2",
        sizes: [
          { size: "36", stock: 12 },
          { size: "37", stock: 11 },
          { size: "38", stock: 10 },
          { size: "39", stock: 11 }
        ]
      }
    ],

    shortDescription: "Hunter Litebound nữ màu hồng nhẹ nhàng, êm ái.",

    description: "Thiết kế dành cho nữ với đế Litebound đàn hồi tốt, upper thoáng khí giúp thoải mái khi vận động.",

    specifications: {
      upper: "Knit Fabric",
      outsole: "Litebound EVA",
      style: "Running / Lifestyle",
      gender: "Women"
    },

    status: "active",
    createdAt: "2026-02-17T12:20:00Z",
    updatedAt: "2026-02-17T12:20:00Z"
  }

];

// nhân bản + xáo trộn để đủ 20 sản phẩm
const products = Array.from({ length: 20 }, (_, i) => ({
  ...baseProducts[i % 5],
  id: `${baseProducts[i % 5].id}-${i}`
}));

export default products;
