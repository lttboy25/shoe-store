const products = [
  {
      id: "prod_001",
      name: "Giày Thể Thao Biti's Hunter EZ Lift Nam - Xanh Dương",
      slug: "bitis-hunter-ez-lift-nam-xanh-duong",
      brand: "Biti's",
      categoryId: ["cat_sneaker_nam"], //productTag

      price: 1295000,
      originalPrice: 1500000,
      discountPercent: 18,

      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027739/Bitis1_thumnail_vznmfq.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027738/Bitis1_6_xmoaeb.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027737/Bitis1_5_nw3ngr.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027737/Bitis1_4_sswab5.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027737/Bitis1_2_xjzzkb.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027737/Bitis1_3_ki8ex1.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027736/Bitis1_1_n4rujl.jpg"
    ],

      variants: [
      {
        color: ["Xanh Dương"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày sneaker nam phong cách thể thao, dễ phối đồ.",
    description: "Công nghệ quai dệt Jacquard tiên tiến kết hợp hệ thống đế Phylon phối Cao su siêu nhẹ giúp hỗ trợ tập luyện chuyên nghiệp và bảo vệ khớp chân.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },
  {
    id: "prod_002",

    name: "Giày Chạy Bộ Puma Deviate Nitro 4 Nam",
    slug: "giay-chay-bo-puma-deviate-nitro-4-nam",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 4200000,
    originalPrice: 4200000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_ayixxo.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_3_greuxh.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_ayixxo.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_1_wdjwrj.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_5_s2iebn.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_4_bqcjrb.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_2_p4qbvo.jpg"
    ],

    variants: [
      {
        color: ["Trắng", "Xám", "Xanh", "Hồng"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 },
          { size: "43", stock: 6 },
          { size: "44", stock: 8 },
          { size: "45", stock: 5 },
          { size: "46", stock: 3 }
        ]
      },
      
    ],

    shortDescription: "Giày chạy bộ hiệu suất cao, nhẹ và hoàn trả năng lượng tốt.",

    description: "Deviate 4 không chỉ nhanh – mà là quá nhanh. Nhẹ hơn 15g so với phiên bản trước, đôi giày hiệu suất cao này được tạo ra cho những runner không chấp nhận chậm lại. Trang bị công nghệ bọt đệm NITROFOAM™ cải tiến giúp hoàn trả năng lượng tốt hơn, thân giày bằng vải lưới kỹ thuật thoáng khí và tấm PWRPLATE bằng carbon tổng hợp, Deviate 4 mang đến lợi thế cần thiết để bạn bứt phá trong các buổi chạy giữ nhịp hoặc chinh phục ngày thi đấu. Chạy xa hơn. Chạy nhanh hơn.",

    specifications: {
      material: "Vải lưới kỹ thuật (engineered mesh)",
      sole: "Cao su + NITROFOAM™",
      fit: "Regular fit",
      style: "Running",
      gender: "Nam"
    },

    rating: 4.6,
    reviewCount: 58,
    sold: 320,
    views: 2400,
},
{
    id: "prod_003",

    name: "Giày Thể Thao Puma H-Street OG Unisex",
    slug: "giay-the-thao-puma-h-street-og-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 2300000,
    originalPrice: 2300000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889144/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_ubpmrx.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889144/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_ubpmrx.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889145/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_1_mwfiwf.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889146/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_2_kuxpqb.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889133/Swatch_for_Safe_Lake-PUMA_Silver_qaxmo1.png",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889132/Swatch_for_PUMA_Red-PUMA_Silver_jraysk.png",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889132/Swatch_for_Poison_Pink-PUMA_Silver_ljnem1.png",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889132/Swatch_for_Fizzy_Green-PUMA_Silver_tkrpf7.png"
    ],

    variants: [
      {
        color: ["Đen", "Xanh lá", "Đỏ", "Hồng", "Xanh dương"],
        sizes: [
          { size: "35", stock: 6 },
          { size: "36", stock: 8 },
          { size: "37", stock: 5 },
          { size: "38", stock: 3 },
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 },
          { size: "43", stock: 6 },
          { size: "44", stock: 8 },
          { size: "45", stock: 5 },
          { size: "46", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày sneaker unisex phong cách retro, nhẹ và dễ phối đồ.",

    description: "Puma H-Street OG là phiên bản tái hiện từ dòng giày chạy bộ cổ điển những năm 2000, mang đậm tinh thần thể thao kết hợp thời trang đường phố. Thiết kế low-profile cùng upper siêu nhẹ giúp di chuyển linh hoạt, trong khi form dáng gọn gàng tạo nên phong cách retro hiện đại, phù hợp cho cả nam và nữ.",

    specifications: {
      material: "Vải dệt + da tổng hợp",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.4,
    reviewCount: 36,
    sold: 180,
    views: 1500,
},
{
    id: "prod_004",

    name: "Giày Thể Thao Puma x Guizio H-Street Unisex",
    slug: "puma-x-guizio-h-street-sneakers-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 3000000,
    originalPrice: 3000000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890314/PUMA_x_GUIZIO_H-Street_Sneakers_Unisex_Warm_White__mxxeqf.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890313/PUMA_x_GUIZIO_H-Street_Sneakers_Unisex_Warm_White__1_paube8.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890313/PUMA_x_GUIZIO_H-Street_Sneakers_Unisex_Warm_White__2_ekltin.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890311/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_pkmz7p.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890310/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_1_ofqgxi.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890309/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_2_e7feah.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890309/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_4_ic6etn.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890309/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_5_x84gvh.avif"
    ],

    variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "36", stock: 8 },
          { size: "37", stock: 5 },
          { size: "38", stock: 3 },
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày sneaker collab thời trang, thiết kế retro hiện đại và nổi bật.",

    description: "Puma x Guizio H-Street là phiên bản hợp tác mang đậm dấu ấn thời trang, kết hợp tinh thần thể thao cổ điển với phong cách contemporary. Thiết kế low-profile đặc trưng, form dáng gọn nhẹ cùng phối màu tinh tế giúp đôi giày dễ dàng trở thành điểm nhấn trong outfit hàng ngày. Phù hợp cho cả nam và nữ yêu thích phong cách streetwear cao cấp.",

    specifications: {
      material: "Vải dệt cao cấp + da tổng hợp",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 24,
    sold: 95,
    views: 1100,
},
{
    id: "prod_005",

    name: "Giày Thể Thao Puma H-Street Premium Unisex",
    slug: "giay-the-thao-puma-h-street-premium-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 2500000,
    originalPrice: 3000000,
    discountPercent: 17,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891014/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_4_x2rjcp.avif",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891018/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_5_gtzcxh.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891016/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_o0cyk6.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891015/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_3_n7zuxl.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891015/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_2_ma05bt.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891014/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_1_hvsh7u.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891014/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_4_x2rjcp.avif"
    ],

    variants: [
      {
        color: ["Nâu đỏ"],
        sizes: [
          { size: "36", stock: 8 },
          { size: "37", stock: 5 },
          { size: "38", stock: 3 },
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 },
          { size: "43", stock: 6 },
          { size: "44", stock: 8 }
        ]
      }
    ],

    shortDescription: "Giày sneaker unisex phiên bản premium, thiết kế retro và chất liệu cao cấp.",

    description: "Puma H-Street Premium là phiên bản nâng cấp của dòng H-Street cổ điển, lấy cảm hứng từ giày chạy bộ thập niên 2000. Thiết kế low-profile đặc trưng kết hợp cùng chất liệu cao cấp mang lại cảm giác nhẹ, thoải mái và thời trang. Phù hợp cho phong cách streetwear hiện đại, dễ phối đồ trong nhiều hoàn cảnh.",

    specifications: {
      material: "Vải dệt cao cấp + da tổng hợp",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 31,
    sold: 140,
    views: 1300,
},
{
    id: "prod_006",

    name: "Giày Thể Thao Puma Talon Biology Unisex",
    slug: "giay-the-thao-puma-talon-biology-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 3700000,
    originalPrice: 3700000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891364/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_6_nfe9ew.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891364/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_3_jfurog.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891365/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_ixqu8f.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891366/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_5_bozerw.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891367/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_4_k9iasp.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891368/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_2_uo2ivc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891370/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_1_ln4wv1.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 },
          { size: "43", stock: 6 },
          { size: "44", stock: 8 },
          { size: "45", stock: 5 },
          { size: "46", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày sneaker unisex phong cách Y2K, thiết kế táo bạo và hiện đại.",

    description: "Puma Talon Biology là mẫu giày mang đậm tinh thần Y2K với thiết kế hướng đến tương lai. Phần upper liền khối kết hợp cùng các lớp overlay độc đáo tạo nên vẻ ngoài mạnh mẽ và khác biệt. Lấy cảm hứng từ dòng giày thể thao đầu những năm 2000, sản phẩm mang lại sự cân bằng giữa hiệu năng và phong cách streetwear hiện đại.",

    specifications: {
      material: "Vải tổng hợp + TPU",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.3,
    reviewCount: 22,
    sold: 85,
    views: 980,
},
{
    id: "prod_007",

    name: "Giày Bóng Rổ Puma MB.05 Mist Unisex",
    slug: "giay-bong-ro-puma-mb-05-mist-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 3150000,
    originalPrice: 3500000,
    discountPercent: 10,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891701/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_epbwh2.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891703/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_2_ss45yk.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891702/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_1_jhcyeb.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891699/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_3_uwl10v.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891697/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_4_z33jys.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891696/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_5_wbnc5g.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891696/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_6_v9myrf.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891698/Gi%C3%A0y-B%C3%B3ng-R%E1%BB%95-MB_dxxtfa.avif"
    ],

    variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 },
          { size: "43", stock: 6 },
          { size: "44", stock: 8 },
          { size: "45", stock: 5 },
          { size: "46", stock: 3 },
          { size: "47", stock: 6 }
        ]
      }
    ],

    shortDescription: "Giày bóng rổ hiệu suất cao, thiết kế signature của LaMelo Ball.",

    description: "Puma MB.05 Mist là mẫu giày signature của LaMelo Ball, được thiết kế cho lối chơi tốc độ và linh hoạt trên sân. Form giày ôm chân kết hợp cùng bộ đệm êm và độ bám cao giúp tối ưu hiệu suất thi đấu. Thiết kế nổi bật với chi tiết “One of One”, họa tiết đặc trưng và phối màu trắng tinh tế, thể hiện phong cách riêng biệt của Melo.",

    specifications: {
      material: "Vải dệt kỹ thuật + TPU",
      sole: "Cao su hiệu năng cao",
      fit: "Regular fit",
      style: "Basketball",
      gender: "Unisex"
    },

    rating: 4.7,
    reviewCount: 64,
    sold: 280,
    views: 2600,
},
{
    id: "prod_008",

    name: "Giày Thể Thao Puma x Aston Martin F1 RS-Surge Unisex",
    slug: "giay-the-thao-puma-x-aston-martin-aramco-f1-team-rs-surge-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],

    price: 2800000,
    originalPrice: 3300000,
    discountPercent: 17,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892161/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_ehoj1a.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892156/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_2_eofspv.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892157/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_nsrlah.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892159/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_1_aiyvlc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892160/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_2_isbdx9.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892156/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_1_cqxze9.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892161/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_ehoj1a.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892163/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_3_rbcrd5.avif"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 5 },
          { size: "42", stock: 3 },
          { size: "43", stock: 6 },
          { size: "44", stock: 8 },
          { size: "45", stock: 5 },
          { size: "46", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày sneaker collab F1, thiết kế thể thao hiện đại và đậm chất tốc độ.",

    description: "Puma x Aston Martin F1 RS-Surge là mẫu giày lấy cảm hứng từ đường đua, kết hợp giữa hiệu năng thể thao và phong cách lifestyle hiện đại. Thiết kế mạnh mẽ, form dáng năng động cùng các chi tiết đặc trưng từ đội đua Aston Martin mang lại vẻ ngoài nổi bật. Phù hợp cho những ai yêu thích tốc độ và phong cách thể thao cao cấp.",

    specifications: {
      material: "Vải dệt + da tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Collab",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 28,
    sold: 120,
    views: 1400,
},
{
    id: "prod_009",

    name: "Giày Thể Thao Puma Speedcat Venus Nữ",
    slug: "giay-the-thao-speedcat-venus-nu",
    brand: "Puma",
    categoryId: ["cat_sneaker_nu"],

    price: 3200000,
    originalPrice: 3500000,
    discountPercent: 9,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892507/Giy_Th_Thao_Speedcat_Venus_N_Chocolate_Brown_large_2_wymhtg.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892508/Giy_Th_Thao_Speedcat_Venus_N_Chocolate_Brown_large_wqf2lv.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892505/Giy_Th_Thao_Speedcat_Venus_N_Chocolate_Brown_large_1_mq9tgx.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892504/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_2_lgo88x.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892502/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_tmffuv.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892501/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_1_hwudup.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892499/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_4_kcccaq.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892499/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_3_wdvbgh.avif"
    ],

    variants: [
      {
        color: ["Đỏ"],
        sizes: [
          { size: "35", stock: 6 },
          { size: "36", stock: 8 },
          { size: "37", stock: 5 },
          { size: "38", stock: 3 },
          { size: "39", stock: 6 }
        ]
      }
    ],

    shortDescription: "Giày sneaker nữ phong cách motorsport, thiết kế low-profile cổ điển.",

    description: "Puma Speedcat Venus là phiên bản nữ của dòng Speedcat mang cảm hứng từ đường đua. Thiết kế low-profile ôm chân cùng form dáng gọn nhẹ giúp di chuyển linh hoạt và dễ phối đồ. Các chi tiết đặc trưng từ giày đua kết hợp cùng phong cách hiện đại tạo nên một đôi sneaker vừa thể thao vừa thời trang.",

    specifications: {
      material: "Da lộn + vải dệt",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Nữ"
    },

    rating: 4.5,
    reviewCount: 41,
    sold: 190,
    views: 1750,
},
{
    id: "prod_010",

    name: "Giày Chạy Bộ Puma MagMax Nitro 2 Nữ",
    slug: "giay-chay-bo-puma-magmax-nitro-2-nu",
    brand: "Puma",
    categoryId: ["cat_sneaker_nu"],

    price: 4800000,
    originalPrice: 5800000,
    discountPercent: 17,

    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892827/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_1_kkvt5v.avif",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892836/Giy_chy_b_MagMax_NITRO_2_cho_n_Warm_White-PUMA_Bla_bpmtkc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892835/Giy_chy_b_MagMax_NITRO_2_cho_n_Warm_White-PUMA_Bla_2_ttg6jc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892831/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_s2fyo0.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892830/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_2_asb62r.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892827/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_1_kkvt5v.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892833/Giy_chy_b_MagMax_NITRO_2_cho_n_Warm_White-PUMA_Bla_1_tqgpxn.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892827/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_3_wqwjkr.avif"
    ],

    variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "35", stock: 6 },
          { size: "36", stock: 8 },
          { size: "37", stock: 5 },
          { size: "38", stock: 3 },
          { size: "39", stock: 6 },
          { size: "40", stock: 8 }
        ]
      }
    ],

    shortDescription: "Giày chạy bộ nữ đệm tối đa, nhẹ và hoàn trả năng lượng cao.",

    description: "Puma MagMax Nitro 2 là dòng giày chạy bộ max-cushion được thiết kế cho sự êm ái và hiệu suất tối đa. Công nghệ NITROFOAM™ mang lại độ nảy và hoàn trả năng lượng vượt trội, giúp mỗi bước chạy trở nên nhẹ nhàng hơn. Upper vải lưới thoáng khí kết hợp cùng thiết kế ôm chân tạo sự thoải mái trong suốt quá trình vận động.",

    specifications: {
      material: "Vải lưới kỹ thuật (engineered mesh)",
      sole: "Cao su + NITROFOAM™",
      fit: "Regular fit",
      style: "Running",
      gender: "Nữ"
    },

    rating: 4.5,
    reviewCount: 41,
    sold: 190,
    views: 1750,
},

{
      id: "prod_011",
      name: "Giày Thể Thao Biti's Hunter Litebound Nam - Đen",
      slug: "bitis-hunter-litebound-nam-den",
      brand: "Biti's",
      categoryId: ["cat_sneaker_nam"], //productTag

      price: 1275000,
      originalPrice: 1500000,
      discountPercent: 15,

      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027824/Bitis2_thumnail_qu783x.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027829/Bitis2_4_c2y4qf.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027828/Bitis2_3_kzm51l.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027827/Bitis2_2_mr5smk.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027826/Bitis2_1_5_hzlcuu.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027825/Bitis2_1_nol2on.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027823/Bitis2_6_lcgqxu.jpg"
      ],

      variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Biti's Hunter Litebound - Nhẹ nhàng và ổn định vượt trội.",
    description: "Đế Phylon/Cao su cao cấp mang lại cảm giác êm chân, kết hợp cùng quai dệt Jacquard thông thoáng cho phong cách Lifestyle năng động.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },
  {
      id: "prod_012",
      name: "Giày Thể Thao Biti's Helio Teen Nam - Xám",
      slug: "bitis-helio-teen-nam-xam",
      brand: "Biti's",
      categoryId: ["cat_sneaker_nam"], //productTag

      price: 625000,
      originalPrice: 750000,
      discountPercent: 17,

      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027871/Bitis3_thumnail_ddklbz.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027874/Bitis3_3_lxtb5l.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027873/Bitis3_2_k1hxey.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027872/Bitis3_1_qwd4ym.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027870/Bitis3_6_snjdwq.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027868/Bitis3_5_veh1vx.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027867/Bitis3_4_j4mzka.jpg"
      ],

      variants: [
      {
        color: ["Xám phối Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Biti's Helio Teen - Năng động học đường.",
    description: "Công nghệ đế IP siêu nhẹ và quai Si PU bền bỉ. Thiết kế trẻ trung với họa tiết chữ #NIGHTFALL tạo điểm nhấn độc đáo cho lứa tuổi thiếu niên.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_013",
      name: "Giày Thể Thao Biti's Hunter Running Nam - Xanh Lá Cây",
      slug: "bitis-hunter-running-nam-xanh-la-cay",
      brand: "Biti's",
      categoryId: ["cat_sneaker_nam"], //productTag

      price: 1295000,
      originalPrice: 1600000,
      discountPercent: 19,

      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027884/Bitis4_thumnail_b5wmdj.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027888/Bitis4_3_h2hwnx.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027886/Bitis4_2_aovema.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027885/Bitis4_1_pq1j6h.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027883/Bitis4_6_el5ilx.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027881/Bitis4_5_oomwbj.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027880/Bitis4_4_vto5da.jpg"
      ],

      variants: [
      {
        color: ["Xanh Lá Cây", "Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Biti's Hunter Running - Vững chắc và hoàn trả năng lượng.",
    description: "Lý tưởng cho chạy bộ dưới 40km với đế Phylon/Cao su tối ưu đàn hồi và quai dệt Jacquard nhẹ thoáng khí.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.0,
    reviewCount: 90,
    sold: 190,
    views: 1000,
  },

  {
      id: "prod_014",
      name: "Giày Thể Thao Biti's Hunter Lunar Dash Nam - Đỏ",
      slug: "bitis-hunter-lunar-dash-nam-do",
      brand: "Biti's",
      categoryId: ["cat_fashion"],
      price: 995000,
      originalPrice: 1200000,
      discountPercent: 17,
      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027912/Bitis5_thumnail_kdhr8r.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027915/Bitis5_2_isg1hn.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027914/Bitis5_1_sdmfhn.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027912/Bitis5_6_eli1lb.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027910/Bitis5_5_a5yrv2.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027909/Bitis5_4_e35mkn.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027907/Bitis5_3_sjyogp.jpg"
      ],

      variants: [
      {
        color: ["Đỏ"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Biti's Hunter Lunar Dash - Tuyên ngôn phong cách độc đáo.",
    description: "Mẫu Statement Sneaker cao cấp kết hợp họa tiết Cow Print độc quyền và biểu tượng Ngựa Tiên Phong sang trọng.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_015",
      name: "Giày Thể Thao Biti's Hunter Litedash Nam - Đen",
      slug: "bitis-hunter-litedash-nam-den",
      brand: "Biti's",
      categoryId: ["cat_chunky"],
      price: 1069000,
      originalPrice: 1300000,
      discountPercent: 18,
      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027923/Bitis6_thumnail_pkrfkm.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027925/Bitis6_1_dm7e3c.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027924/Bitis6_2_qni26x.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027921/Bitis6_5_u4ed4q.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027920/Bitis6_4_v7nyed.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027919/Bitis6_3_tspjuy.jpg"
      ],

      variants: [
      {
        color: ["Đen", "Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Hunter Litedash - Phong cách Chunky cực ngầu.",
    description: "Thiết kế Retro Street Style hầm hố với đế Chunky siêu nhẹ và biểu tượng tia chớp đen cá tính.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_016",
      name: "Giày Thể Thao Biti's Helio Teen Nam - Trắng",
      slug: "bitis-helio-teen-nam-trang",
      brand: "Biti's",
      categoryId: ["cat_school"],
      price: 595000,
      originalPrice: 700000,
      discountPercent: 15,
      thumbnail: "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027933/Bitis7_thumnail_naftpd.jpg",
      images: [
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027934/Bitis7_1_ob5pde.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027932/Bitis7__xyycwj.jpg",
        "https://res.cloudinary.com/dmgv6z0v0/image/upload/v1774027930/Bitis7_3_gr5dek.jpg"
      ],

      variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Biti's Helio Teen Trắng - Basic và dễ phối đồ.",
    description: "Chất liệu da tổng hợp cao cấp dễ vệ sinh, đế cao su đúc nguyên khối đảm bảo độ bám và lớp lót êm ái.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_017",
      name: "Balenciaga Runner - White Black",
      slug: "balenciaga-runner-white-black",
      brand: "Balenciaga",
      categoryId: ["cat_sneaker"],

      price: 18500000,
      originalPrice: 22000000,
      discountPercent: 16,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner3_lnicej.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner4_iivfp2.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner1_pixxvo.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner2_y3yrep.jpg",
      ],

      variants: [
      {
        color: ["Trắng", "Đen"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Balenciaga Runner phong cách chunky cao cấp.",
    description: "Thiết kế hầm hố, đậm chất thời trang high-end.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_018",
      name: "Balenciaga Track 2 - Grey",
      slug: "balenciaga-track-2-grey",
      brand: "Balenciaga",
      categoryId: ["cat_sneaker"],

      price: 21000000,
      originalPrice: 25000000,
      discountPercent: 16,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track1_rkcmzo.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track2_snjgho.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track4_glsd5x.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track3_vx7qyh.jpg",
      ],

      variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Track 2 với thiết kế nhiều lớp độc đáo.",
    description: "Một trong những dòng sneaker nổi bật của Balenciaga.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_019",
      name: "Balenciaga Triple S - Black",
      slug: "balenciaga-triple-s-black",
      brand: "Balenciaga",
      categoryId: ["cat_sneaker"],

      price: 19500000,
      originalPrice: 24000000,
      discountPercent: 18,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe2_opqsxf.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926103/trippe1_gm27xj.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe3_hh2ocn.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe4_y1bp2o.jpg",
      ],
      variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Triple S iconic chunky sneaker.",
    description: "Thiết kế đế dày đặc trưng của Balenciaga.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_020",
      name: "Balenciaga Speed Trainer - Black",
      slug: "balenciaga-speed-trainer-black",
      brand: "Balenciaga",
      categoryId: "cat_sneaker",

      price: 17500000,
      originalPrice: 21000000,
      discountPercent: 17,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed1_jp0ozv.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed2_xftdgr.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed3_cltam8.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926230/speed4_kodzlk.jpg",
      ],

      variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Speed Trainer dạng sock-fit.",
    description: "Thiết kế ôm chân như tất, cực kỳ thoải mái.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_021",
      name: "Balenciaga Defender - Beige",
      slug: "balenciaga-defender-beige",
      brand: "Balenciaga",
      categoryId: ["cat_sneaker"],

      price: 22000000,
      originalPrice: 26000000,
      discountPercent: 15,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def1_x3mnuq.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def3_cxoqnj.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def2_va4cwe.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def4_pii3ci.jpg",
      ],

      variants: [
      {
        color: ["Trắng kem"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Balenciaga Defender hầm hố.",
    description: "Đế lớn, phong cách streetwear mạnh mẽ.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_022",
      name: "Balenciaga 3XL - White",
      slug: "balenciaga-3xl-white",
      brand: "Balenciaga",
      categoryId: "cat_sneaker",

      price: 23000000,
      originalPrice: 27000000,
      discountPercent: 15,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl3_sbqzwp.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl2_nqiifj.jpg0",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926423/xl4_vjsh6d.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl1_f2djxt.jpg",
      ],

      variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "3XL form siêu to.",
    description: "Thiết kế oversize cực trend.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_023",
      name: "Balenciaga Cargo Sneaker - Grey",
      slug: "balenciaga-cargo-grey",
      brand: "Balenciaga",
      categoryId: "cat_sneaker",

      price: 20000000,
      originalPrice: 24000000,
      discountPercent: 16,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo1_fblqiq.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo2_vraqxb.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo3_yhlqe6.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926522/cargo4_hkzggp.jpg",
      ],


      variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Cargo sneaker độc đáo.",
    description: "Thiết kế futuristic.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_024",
      name: "Balenciaga Paris Sneaker - White",
      slug: "balenciaga-paris-white",
      brand: "Balenciaga",
      categoryId: "cat_sneaker",

      price: 15000000,
      originalPrice: 18000000,
      discountPercent: 16,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926627/paris1_qsnd9q.webp",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926627/paris2_zcomtw.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926628/paris3_pgnv7n.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926648/paris4_y5p823.jpg",
      ],


      variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Paris sneaker phong cách cổ điển.",
    description: "Thiết kế đơn giản nhưng sang.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_025",
      name: "Balenciaga Track LED - Black",
      slug: "balenciaga-track-led-black",
      brand: "Balenciaga",
      categoryId: "cat_sneaker",

      price: 26000000,
      originalPrice: 30000000,
      discountPercent: 13,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led2_tbmobp.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led1_cxplsa.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led3_k1jnxe.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926739/led4_a1fjp2.jpg",
      ],

      variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Track LED phát sáng.",
    description: "Phiên bản cao cấp có LED.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_026",
      name: "Balenciaga Phantom - Blue",
      slug: "balenciaga-phantom-blue",
      brand: "Balenciaga",
      categoryId: "cat_sneaker",

      price: 19000000,
      originalPrice: 23000000,
      discountPercent: 17,

      thumbnail:
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926823/ptom1_i9l3kc.jpg",
      images: [
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926825/ptom4_q7nqqv.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926824/ptom2_n0ctuz.jpg",
        "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926825/ptom3_xic22e.jpg",
      ],

      variants: [
      {
        color: ["Xanh dương"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Phantom thiết kế hiện đại.",
    description: "Đậm chất thời trang cao cấp.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
      id: "prod_027",
      name: "Giày Thể Thao Biti's Hunter Litebound Nữ",
      slug: "giay-the-thao-bitis-hunter-litebound-nu",
      brand: "Biti's",
      categoryId: ["cat_sneaker_nu"],

      price: "1,175,000",
      originalPrice: "1,175,000",
      discountPercent: 0,

      thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339816/Hng_zryhxb.jpg",
      images: [
        "https://res.cloudinary.com/dezeregal/image/upload/v1771339824/Hng_azmbid.jpg",
        "https://res.cloudinary.com/dezeregal/image/upload/v1771339829/Hng_rdfbp2.jpg",
        "https://res.cloudinary.com/dezeregal/image/upload/v1771339835/Hng_zdiuv2.jpg"
      ],


      variants: [
      {
        color: ["Hồng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày nữ nhẹ, êm và thoải mái.",
    description: "Thiết kế dành riêng cho nữ với đế Litebound đàn hồi và upper thoáng khí.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nữ"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
    id: "prod_028",
    name: "Giày Thể Thao Balenciaga Runner Unisex",
    slug: "giay-the-thao-balenciaga-runner-white-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 18500000,
    originalPrice: 22000000,
    discountPercent: 16,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner3_lnicej.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner4_iivfp2.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner1_pixxvo.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner2_y3yrep.jpg"
    ],

    variants: [
      {
        color: ["Đen", "Trắng"],
        sizes: [{ size: "42", stock: 5 }]
      }
    ],

    shortDescription: "Giày chunky cao cấp mang phong cách luxury streetwear.",
    description: "Balenciaga Runner sở hữu thiết kế hầm hố đặc trưng, kết hợp nhiều lớp vật liệu.",

    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.7,
    reviewCount: 32,
    sold: 120,
    views: 1400,
  },

   {
    id: "prod_029",
    name: "Giày Thể Thao Balenciaga Track 2 Unisex",
    slug: "giay-the-thao-balenciaga-track-2-grey",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 21000000,
    originalPrice: 25000000,
    discountPercent: 16,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track1_rkcmzo.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track2_snjgho.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track4_glsd5x.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track3_vx7qyh.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [{ size: "41", stock: 6 }]
      }
    ],

    shortDescription: "Giày luxury nhiều lớp với thiết kế phức tạp.",
    description: "Balenciaga Track 2 nổi bật với cấu trúc multi-layer.",

    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 28,
    sold: 100,
    views: 1200,
  },

  {
    id: "prod_030",
    name: "Giày Thể Thao Balenciaga Triple S Unisex",
    slug: "giay-the-thao-balenciaga-triple-s-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 1950000,
    originalPrice: 2400000,
    discountPercent: 18,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe2_opqsxf.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926103/trippe1_gm27xj.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe3_hh2ocn.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe4_y1bp2o.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [{ size: "43", stock: 4 }]
      }
    ],

    shortDescription: "Triple S iconic với đế dày đặc trưng.",
    description: "Balenciaga Triple S là biểu tượng chunky sneaker.",

    specifications: {
      material: "Leather + mesh",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.8,
    reviewCount: 45,
    sold: 150,
    views: 1700,
  },

  {
    id: "prod_031",
    name: "Giày Thể Thao Balenciaga Speed Trainer Unisex",
    slug: "giay-the-thao-balenciaga-speed-trainer-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 17500000,
    originalPrice: 21000000,
    discountPercent: 17,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed1_jp0ozv.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed2_xftdgr.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed3_cltam8.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926230/speed4_kodzlk.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [{ size: "42", stock: 5 }]
      }
    ],

    shortDescription: "Giày sock-fit ôm chân, nhẹ và linh hoạt.",
    description: "Balenciaga Speed Trainer mang thiết kế dạng tất giúp ôm sát chân, tạo cảm giác thoải mái và hiện đại.",

    specifications: {
      material: "Knit",
      sole: "Rubber",
      fit: "Slim fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 30,
    sold: 110,
    views: 1300,
},

{
    id: "prod_032",
    name: "Giày Thể Thao Balenciaga Defender Unisex",
    slug: "giay-the-thao-balenciaga-defender-beige",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 22000000,
    originalPrice: 26000000,
    discountPercent: 15,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def1_x3mnuq.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def3_cxoqnj.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def2_va4cwe.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def4_pii3ci.jpg"
    ],

    variants: [
      {
        color: ["Trắng kem"],
        sizes: [{ size: "42", stock: 3 }]
      }
    ],

    shortDescription: "Chunky sneaker mạnh mẽ với đế oversized.",
    description: "Balenciaga Defender nổi bật với thiết kế hầm hố, phù hợp phong cách streetwear cao cấp.",

    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.7,
    reviewCount: 20,
    sold: 80,
    views: 900,
},


{
    id: "prod_033",
    name: "Giày Thể Thao Balenciaga 3XL Unisex",
    slug: "giay-the-thao-balenciaga-3xl-white",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 23000000,
    originalPrice: 27000000,
    discountPercent: 15,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl3_sbqzwp.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl2_nqiifj.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926423/xl4_vjsh6d.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl1_f2djxt.jpg"
    ],

    variants: [
      {
        color: ["Trắng"],
        sizes: [{ size: "41", stock: 4 }]
      }
    ],

    shortDescription: "Sneaker oversized với form cực lớn.",
    description: "Balenciaga 3XL mang phong cách thời trang cao cấp với thiết kế phóng đại độc đáo.",

    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Oversize fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 18,
    sold: 70,
    views: 800,
},

{
    id: "prod_034",
    name: "Giày Thể Thao Balenciaga Cargo Unisex",
    slug: "giay-the-thao-balenciaga-cargo-grey",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 20000000,
    originalPrice: 24000000,
    discountPercent: 16,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo1_fblqiq.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo2_vraqxb.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo3_yhlqe6.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926522/cargo4_hkzggp.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [{ size: "43", stock: 3 }]
      }
    ],

    shortDescription: "Thiết kế futuristic độc đáo.",
    description: "Balenciaga Cargo mang phong cách hiện đại với form dáng khác biệt.",

    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 16,
    sold: 60,
    views: 700,
},

{
    id: "prod_035",
    name: "Giày Thể Thao Balenciaga Paris Unisex",
    slug: "giay-the-thao-balenciaga-paris-white",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 15000000,
    originalPrice: 18000000,
    discountPercent: 16,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926627/paris1_qsnd9q.webp",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926627/paris2_zcomtw.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926628/paris3_pgnv7n.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926648/paris4_y5p823.jpg"
    ],

    variants: [
      {
        color: ["Trắng"],
        sizes: [{ size: "40", stock: 6 }]
      }
    ],

    shortDescription: "Sneaker tối giản nhưng sang trọng.",
    description: "Balenciaga Paris mang phong cách cổ điển kết hợp chất liệu cao cấp.",

    specifications: {
      material: "Canvas",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.4,
    reviewCount: 22,
    sold: 100,
    views: 900,
},

{
    id: "prod_036",
    name: "Giày Thể Thao Balenciaga Track LED Unisex",
    slug: "giay-the-thao-balenciaga-track-led-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 26000000,
    originalPrice: 30000000,
    discountPercent: 13,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led2_tbmobp.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led1_cxplsa.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led3_k1jnxe.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926739/led4_a1fjp2.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [{ size: "42", stock: 2 }]
      }
    ],

    shortDescription: "Phiên bản sneaker tích hợp LED độc đáo.",
    description: "Balenciaga Track LED mang phong cách công nghệ cao với thiết kế phát sáng.",

    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.8,
    reviewCount: 12,
    sold: 40,
    views: 600,
},

{
    id: "prod_037",
    name: "Giày Thể Thao Balenciaga Phantom Unisex",
    slug: "giay-the-thao-balenciaga-phantom-blue",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],

    price: 19000000,
    originalPrice: 23000000,
    discountPercent: 17,

    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926823/ptom1_i9l3kc.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926825/ptom4_q7nqqv.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926824/ptom2_n0ctuz.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926825/ptom3_xic22e.jpg"
    ],

    variants: [
      {
        color: ["Xanh dương"],
        sizes: [{ size: "41", stock: 5 }]
      }
    ],

    shortDescription: "Sneaker luxury hiện đại và nổi bật.",
    description: "Balenciaga Phantom mang thiết kế cao cấp phù hợp phong cách thời trang hiện đại.",

    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 14,
    sold: 55,
    views: 700,
},

{
      id: "prod_038",
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
        color: ["Trắng", "Xanh lá"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Nike Vomero 18 phiên bản White/Electric Green nổi bật với đệm ZoomX cao cấp kết hợp ReactX foam cho trải nghiệm chạy êm ái tối đa.",

    description: "Nike Vomero 18 - White / Electric Green mang đến khả năng đệm tối đa cho chạy bộ hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nữ"
    },

    rating: 4.8,
    reviewCount: 36,
    sold: 185,
    views: 1420,
  },

  {
      id: "prod_039",
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
        color: ["Đen", "Đỏ"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày bóng rổ Nike Giannis Freak 6 EP phiên bản Black/Red, độ bám cao, hỗ trợ chuyển hướng nhanh.",
    description: "Nike Giannis Freak 6 EP - Black/Red được thiết kế dành cho những pha bứt tốc và chuyển hướng đột ngột.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.8,
    reviewCount: 96,
    sold: 530,
    views: 3420,
  },

  {
      id: "prod_040",
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
        color: ["Xám", "Trắng"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày chạy bộ Nike Pegasus 41 - Gunsmoke với đệm Air Zoom kép, nhẹ và phản hồi nhanh.",

    description: "Nike Pegasus 41 mang lại cảm giác êm ái và phản hồi năng lượng vượt trội cho các buổi chạy hàng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.7,
    reviewCount: 128,
    sold: 860,
    views: 5420,
  },

  {
      id: "prod_041",
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
        color: ["Trắng", "Bạc", "Xanh"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày bóng rổ Nike Sabrina 3 - Mint Foam, nhẹ, ôm chân và hỗ trợ chuyển hướng linh hoạt.",

    description: "Nike Sabrina 3 được thiết kế để theo kịp lối chơi tốc độ cao và khả năng kiểm soát bóng linh hoạt.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 74,
    sold: 420,
    views: 3100,
  },

  {
      id: "prod_042",
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
        color: ["Trắng", "Xanh dương"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Phiên bản adidas Samba OG Junior phối trắng xanh Ash Blue cổ điển với đế gum đặc trưng.",
    description: "Đôi giày Samba chính thức cho phong cách mỗi ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },
  
  {
    id: "prod_042",
    name: "adidas Japan - Red",
    slug: "adidas-japan-red",
    brand: "Adidas",
    categoryId: ["cat_sneaker"],

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
        color: ["Đỏ tươi"],
        sizes: [
          { size: "38.5", stock: 5 },
          { size: "41", stock: 6 }
        ]
      }
    ],

    shortDescription: "Phiên bản tái bản adidas Japan 1964 phối đỏ nổi bật, đậm chất vintage.",

    description: "Đôi giày reissue kỷ niệm sự kiện thể thao toàn cầu 1964 tại Nhật Bản.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_043",
    name: "Bad Bunny x adidas Gazelle Indoor - Cabo Rojo",
    slug: "bad-bunny-adidas-gazelle-indoor-cabo-rojo",
    brand: "Adidas",
    categoryId: ["cat_sneaker"],

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
        color: ["Hồng nhạo"],
        sizes: [
          { size: "36.5", stock: 4 }
        ]
      }
    ],

    shortDescription: "Phiên bản collab Bad Bunny với adidas Gazelle Indoor phối hồng Cabo Rojo độc đáo.",

    description: "Giày indoor phong cách thời trang với chất liệu da cao cấp.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Indoor / Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_044",
    name: "adidas Japan Wales Bonner - Light Purple",
    slug: "adidas-japan-wales-bonner-light-purple",
    brand: "Adidas",
    categoryId: ["cat_sneaker"],

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
        color: ["Tím nhạt"],
        sizes: [
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Collab adidas Japan x Wales Bonner phối tím nhạt sang trọng.",

    description: "Thiết kế kết hợp giữa phong cách cổ điển và hiện đại.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_045",
    name: "adidas Blanc - Brown",
    slug: "adidas-blanc-brown",
    brand: "Adidas",
    categoryId: ["cat_sneaker"],

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
        color: ["Nâu"],
        sizes: [
          { size: "36", stock: 8 }
        ]
      }
    ],

    shortDescription: "adidas Blanc phối nâu cổ điển, thiết kế tối giản dễ phối đồ.",

    description: "Thiết kế da trơn màu nâu sang trọng với 3 sọc cream nổi bật.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_046",
    name: "Giày Thể Thao Biti's Hunter EZ Lift Nam Màu Cam",
    slug: "bitis-hunter-ez-lift-nam-mau-cam",
    brand: "Biti's Hunter",
    categoryId: ["cat_sneaker"],

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
        color: ["Cam"],
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
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_047",
    name: "Giày Thể Thao Biti's Hunter Evo Nam Màu Đen",
    slug: "bitis-hunter-evo-nam-mau-den",
    brand: "Biti's Hunter",
    categoryId: ["cat_sneaker"],

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
        color: ["Đen"],
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
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_048",
    name: "Giày Thể Thao Biti's Hunter Evo Nam Màu Kem",
    slug: "bitis-hunter-evo-nam-mau-kem",
    brand: "Biti's Hunter",
    categoryId: ["cat_sneaker"],

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
        color: ["Kem"],
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
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_049",
    name: "Giày Thể Thao Biti's Hunter Street 2.0 Nam Màu Xanh Nhớt",
    slug: "bitis-hunter-street-2-0-nam-xanh-nhot",
    brand: "Biti's Hunter",
    categoryId: ["cat_sneaker"],

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
        color: ["Xanh dương"],
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
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_050",
    name: "Giày Thể Thao Biti's Hunter Litebound Nữ Màu Hồng",
    slug: "bitis-hunter-litebound-nu-mau-hong",
    brand: "Biti's Hunter",
    categoryId: ["cat_sneaker"],

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
        color: ["Hồng"],
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
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nữ"
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850
  },

  {
    id: "prod_051",
    name: "GIÀY MARIS8I9- BROWN (200)",
    slug: "GIAY MARIS8I9- BROWN (200)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2799300,
    originalPrice: 3999000,
    discountPercent: 30,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773917429/z_1_21f75230-e908-469d-b513-953178d7bcc1_rzl0k0.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773917429/MARIS8I9_2_gia0ni.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773917429/MARIS8I9_1_qlzyol.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773917429/1_32167c63-d990-465b-ba2b-23d3a3122c18_z1yfii.jpg"
    ],

    variants: [
      {
        color: ["Nâu"],
        sizes: [
          { size: "36", stock: 8 },
          { size: "37", stock: 12 },
          { size: "38", stock: 15 },
          { size: "39", stock: 10 },
          { size: "40", stock: 6 }
        ]
      }
    ],

    shortDescription: "MARIS8I9 là mẫu giày running cân bằng giữa hiệu năng thể thao và phong cách hằng ngày, thiết kế gọn gàng, nhẹ và linh hoạt.",

    description: "MARIS8I9 là mẫu giày running được thiết kế với sự cân bằng giữa hiệu năng thể thao và phong cách sử dụng hằng ngày. Form dáng gọn gàng mang lại cảm giác nhẹ nhàng và linh hoạt, phù hợp cho cả khi vận động lẫn di chuyển trong cuộc sống thường nhật. Thiết kế mang tinh thần thể thao nhưng không quá kỹ thuật, dễ kết hợp với trang phục casual hoặc sporty-casual. Đây là lựa chọn phù hợp cho những ai muốn một đôi giày chạy bộ nhưng vẫn đủ đơn giản và thời trang để mang hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Running",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 18,
    sold: 72,
    views: 640
  },

  {
    id: "prod_052",
    name: "GIÀY U9009HG - GREY(020)",
    slug: "GIAY U9009HG - GREY(020)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 3199200,
    originalPrice: 3999000,
    discountPercent: 20,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/z_92a367ec-74a6-459c-ba33-c6f538f9ae8d_jgiohz.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/1_d0de8d46-d8c1-4163-a37d-35f6515ebd49_ngx4n6.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/U9009HG_1_brocza.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/U9009HG_rnlx4b.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "40.5", stock: 10 },
          { size: "41", stock: 9 },
          { size: "42", stock: 7 },
          { size: "42.5", stock: 5 },
          { size: "43", stock: 4 }
        ]
      }
    ],

    shortDescription: "U900 là mẫu giày casual walking lấy cảm hứng từ running, mang lại cảm giác êm ái, ổn định và thoải mái cho việc di chuyển hằng ngày.",

    description: "U900 là mẫu giày casual walking lấy cảm hứng từ thiết kế running, mang lại sự thoải mái và ổn định cho việc đi lại hằng ngày. Cấu trúc đế cân bằng giúp bước chân êm ái, phù hợp cho việc di chuyển trong thời gian dài. Phần upper sử dụng synthetic kết hợp mesh giúp giày nhẹ và thoáng khí. Thiết kế mang đậm DNA đặc trưng của New Balance, dễ phối đồ và phù hợp cho cả đi bộ lẫn sử dụng hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Casual / Walking",
      gender: "Unisex"
    },

    rating: 4.4,
    reviewCount: 42,
    sold: 168,
    views: 980
  },

  {
    id: "prod_053",
    name: "GIÀY U5307VI - GREY (020)",
    slug: "GIAY U5307VI - GREY (020)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2287200,
    originalPrice: 2859000,
    discountPercent: 20,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919098/z_60f0d309-34b8-4bfa-8e0a-f6f6387e8f36_bwko8d.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919098/U5307VI_1_f0moc7.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919097/1_8a1903c7-c19d-4371-8a16-d96f98a62c14_n9kvh1.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919097/U5307VI_bzf1pm.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 10 },
          { size: "42", stock: 12 },
          { size: "42.5", stock: 9 },
          { size: "43", stock: 7 },
          { size: "44", stock: 5 },
          { size: "44.5", stock: 4 }
        ]
      }
    ],

    shortDescription: "New Balance 530 là mẫu giày lifestyle mang tinh thần running thập niên 2000, thiết kế retro dễ phối đồ và phù hợp sử dụng hằng ngày.",

    description: "530 là mẫu giày lifestyle mang tinh thần running thập niên 2000, nay được yêu thích như một item thời trang theo xu hướng hiện tại. Form dáng có độ volume vừa phải, dễ phối cùng quần ống rộng, denim hay phong cách street casual. Phiên bản màu sắc Grey/Silver giúp hoàn thiện outfit một cách tự nhiên, tạo điểm nhấn tinh tế cho phong cách hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle / Running-inspired",
      gender: "Unisex"
    },

    rating: 4.6,
    reviewCount: 74,
    sold: 320,
    views: 2100
  },

  {
    id: "prod_054",
    name: "GIÀY U9005G9 - BLACK (000)",
    slug: "GIAY U9005G9 - BLACK (000)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2300000,
    originalPrice: 3830000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919475/z_86ef0a04-077d-4103-9056-7b70687c0c9d_itfcft.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919475/U9005G9_1_q33jcv.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919476/U9005G9_eq1cv5.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919475/1_ab0333f2-de21-4ef5-a100-92afe9b27a7c_npjng4.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "39", stock: 5 },
          { size: "40", stock: 7 },
          { size: "40.5", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 6 },
          { size: "42.5", stock: 4 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "U900 là mẫu giày casual walking lấy cảm hứng từ running, thiết kế gọn gàng, êm ái và phù hợp cho việc di chuyển hằng ngày.",

    description: "U900 là mẫu giày casual walking lấy cảm hứng từ thiết kế running, mang lại sự thoải mái và ổn định cho việc đi lại hằng ngày. Cấu trúc đế cân bằng giúp bước chân êm ái, phù hợp cho việc di chuyển trong thời gian dài. Phần upper sử dụng synthetic kết hợp mesh, đảm bảo độ nhẹ và thoáng khí. Thiết kế mang đậm DNA đặc trưng của New Balance, dễ phối đồ và phù hợp cho cả đi bộ lẫn sử dụng hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Casual / Walking",
      gender: "Unisex"
    },

    rating: 4.3,
    reviewCount: 36,
    sold: 140,
    views: 920
  },

  {
    id: "prod_055",
    name: "GIÀY U740NW2 - WHITE (100)",
    slug: "GIAY U740NW2 - WHITE (100)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2300000,
    originalPrice: 3830000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919839/z_72df9b43-6526-4799-bf65-228ea00d2939_lhoa2n.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919839/u740nw2_3_ziltvb.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919838/u740nw2_k6zzhs.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919838/1_b7a7102f-60e3-4a74-b319-5196dccd05c8_czdgge.jpg"
    ],

    variants: [
      {
        color: ["Trắng"],
        sizes: [
          { size: "40", stock: 7 },
          { size: "40.5", stock: 6 },
          { size: "41", stock: 9 },
          { size: "42", stock: 8 },
          { size: "42.5", stock: 6 },
          { size: "43", stock: 5 }
        ]
      }
    ],

    shortDescription: "New Balance 740v2 là mẫu giày running/fitness mang phong cách 2000s, sử dụng đệm ABZORB êm ái và ổn định cho di chuyển hằng ngày.",

    description: "Ra mắt lần đầu vào những năm 2000, 740 là mẫu giày chạy bộ/fitness từng tạo nên dấu ấn nhờ độ tin cậy cao và cảm giác mang vượt trội. Phiên bản 740v2 sử dụng bộ đế tương tự dòng 530 với công nghệ đệm ABZORB, mang lại sự êm ái và ổn định trong từng bước chân. Phần upper kết hợp synthetic và mesh tạo nên thiết kế kỹ thuật với nhiều lớp chi tiết, vừa thoáng khí vừa bền bỉ. Tông màu White/Silver mang đậm chất authentic, dễ phối đồ và phù hợp cho cả phong cách thể thao lẫn casual hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Running / Fitness",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 1500
  },

  {
    id: "prod_056",
    name: "GIÀY U509ABG - BLACK/SLATE GREY/PLUM",
    slug: "GIAY U509ABG - BLACK/SLATE GREY/PLUM",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 1360000,
    originalPrice: 1700000,
    discountPercent: 20,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773923468/z_8f8a12c9-eda5-4063-9d41-fe920696cbcc_qxak0c.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773923469/509_83750dbf-c717-4fb4-a99d-22b5f46359cd_hj7xv2.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773923467/1_d22360b0-945f-4d5f-b03b-15ccfe1adb68_lgzyzu.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773923467/509_8c6fd16e-49b1-4e0d-9aac-d2cab1fa8b79_nni1uh.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 9 },
          { size: "40.5", stock: 8 },
          { size: "41", stock: 10 },
          { size: "42", stock: 7 },
          { size: "42.5", stock: 5 },
          { size: "43", stock: 4 }
        ]
      }
    ],

    shortDescription: "New Balance 509 là mẫu giày lấy cảm hứng từ running 2000s, kết hợp đệm ABZORB êm ái cùng thiết kế hiện đại phù hợp sử dụng hằng ngày.",

    description: "New Balance U509ABG thuộc dòng 509, lấy cảm hứng từ thiết kế chạy bộ những năm 2000 và được hoàn thiện với tông màu metallic nổi bật. Phần upper kết hợp lưới thoáng khí và chất liệu tổng hợp bền chắc, mang lại sự nhẹ nhàng và hỗ trợ tốt khi di chuyển. Đế giữa sử dụng công nghệ đệm ABZORB giúp hấp thụ lực hiệu quả, tạo cảm giác êm ái khi tiếp đất. Tông màu đen chủ đạo kết hợp hiệu ứng tím – xanh chuyển sắc tạo điểm nhấn độc đáo, phù hợp cho cả phong cách thường ngày lẫn các hoạt động vận động nhẹ.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Running-inspired / Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 1500
  },

  {
    id: "prod_057",
    name: "GIÀY M1906REH - HARBOR GREY (039)",
    slug: "GIAY M1906REH - HARBOR GREY (039)",
    brand: "new_balance",
    categoryId: ["cat_sneaker"],

    price: 1740000,
    originalPrice: 2900000,
    discountPercent: 40,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924004/z_ce027b6f-3fb9-4ad1-b171-d2fa582c7511_vyxzcm.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924005/M1906REH_3_hkktgm.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924003/1_1_e27bc244-ebfd-40f7-9512-c369c8f36a99_z24g8e.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924004/M1906REH_2_y7eerh.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "40", stock: 6 },
          { size: "40.5", stock: 8 },
          { size: "41", stock: 10 },
          { size: "42", stock: 9 },
          { size: "42.5", stock: 7 },
          { size: "43", stock: 5 },
          { size: "44", stock: 4 }
        ]
      }
    ],

    shortDescription: "New Balance 1906R là mẫu giày lifestyle cao cấp lấy cảm hứng từ running 2000s, trang bị công nghệ N-ERGY và ABZORB cho độ êm và ổn định vượt trội.",

    description: "New Balance M1906REH là phiên bản được tái cấu trúc hiện đại từ mẫu giày mang tính biểu tượng của những năm 2000 – 1906. Được trang bị công nghệ đệm N-ERGY và ABZORB toàn phần, đôi giày mang lại độ đàn hồi và ổn định vượt trội, kết hợp cùng cấu trúc N-Lock giúp ôm chân chắc chắn và thoải mái. Phần upper phối hợp giữa lưới màu xám và da tổng hợp ánh bạc, tạo nên tông màu metallic thời thượng nhưng vẫn giữ được nét tinh tế và cân bằng. Thiết kế hiện đại nhưng mang tính timeless, phù hợp cho cả nam và nữ, là lựa chọn hoàn hảo kết hợp giữa phong cách và hiệu năng trong dòng giày lifestyle của New Balance.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Running-inspired / Lifestyle",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_058",
    name: "GIÀY ML2002RA - CASTLEROCK (105)",
    slug: "GIAY ML2002RA - CASTLEROCK (105)",
    brand: "new_balance",
    categoryId: ["cat_sneaker"],

    price: 2000000,
    originalPrice: 3999000,
    discountPercent: 49,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924347/Z_488f0c30-355b-4241-95dd-4d6611373d1e_fjesjq.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924347/1_3_cf6316cb-32c1-4133-ae9b-7ea3e9bc9918_sbsrp2.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924346/1_1_afec256b-3622-46ee-81aa-5dada59e9ef1_cs6wjp.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924346/1_2_f276b884-865a-4919-84f2-92b078597a27_jwdfcm.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "39", stock: 5 },
          { size: "40", stock: 8 },
          { size: "40.5", stock: 7 },
          { size: "41", stock: 9 },
          { size: "42", stock: 8 },
          { size: "42.5", stock: 6 },
          { size: "43", stock: 4 }
        ]
      }
    ],

    shortDescription: "New Balance 2002R là mẫu sneaker lifestyle cao cấp lấy cảm hứng từ running 2000s, kết hợp đệm êm ái và thiết kế dễ phối đồ hằng ngày.",

    description: "New Balance ML2002RA là đôi sneaker lifestyle lấy cảm hứng từ thiết kế giày chạy bộ đầu thập niên 2000, kết hợp dáng vẻ cổ điển với sự thoải mái hiện đại. Đệm ABZORB đàn hồi cùng Stability Web mang lại độ êm ái và ổn định, phù hợp cho việc di chuyển nhiều trong ngày. Upper kết hợp lưới thoáng khí và da lộn bền bỉ, tạo nên thiết kế tinh giản nhưng giàu chiều sâu, dễ phối từ phong cách casual đến sporty. Đây là lựa chọn unisex linh hoạt cho nhiều hoàn cảnh sử dụng.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle / Running-inspired",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_059",
    name: "GIÀY MR530KC - LIGHT ALUMINUM (042)",
    slug: "GIAY MR530KC - LIGHT ALUMINUM (042)",
    brand: "new_balance",
    categoryId: ["cat_sneaker"],

    price: 2859000,
    originalPrice: 2859000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924668/z_aad81d8f-3780-457d-90a7-ded088179d84_irezyn.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924656/1_4_3d8f7608-c0b7-4a59-9b0c-0adeb2b3bfeb_s8upph.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924655/1_1_dd6149a1-787a-40a7-9cac-c19d99777c7e_sumwlg.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773924655/1_3_8bbceaea-a082-47c1-b7cf-dd6a8ad29306_exjlho.jpg"
    ],

    variants: [
      {
        color: ["Bạc"],
        sizes: [
          { size: "39", stock: 5 },
          { size: "40", stock: 8 },
          { size: "40.5", stock: 7 },
          { size: "41", stock: 9 },
          { size: "42", stock: 8 },
          { size: "42.5", stock: 6 },
          { size: "43", stock: 4 }
        ]
      }
    ],

    shortDescription: "New Balance 530 là mẫu sneaker lifestyle mang phong cách retro 90s, thiết kế nhẹ, thoáng khí và dễ phối đồ hằng ngày.",

    description: "New Balance MR530KC là đôi sneaker phong cách sống lấy cảm hứng từ thiết kế giày chạy bộ thập niên 90, mang đến vẻ ngoài retro cùng cảm giác thoải mái vượt trội. Đế giữa có độ đàn hồi cao giúp nâng đỡ từng bước đi, phù hợp cho việc sử dụng trong thời gian dài. Phần upper bằng lưới thoáng khí kết hợp với lớp phủ tổng hợp bền bỉ, tạo nên sự cân bằng giữa hiệu năng và phong cách. Thiết kế đơn giản nhưng hiện đại, dễ dàng phối hợp với nhiều outfit từ casual đến sporty, là lựa chọn lý tưởng cho cuộc sống năng động hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle / Running-inspired",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_060",
    name: "GIÀY M2002RSF(D) - NAVY(SF)",
    slug: "GIAY M2002RSF(D) - NAVY(SF)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2000000,
    originalPrice: 2000000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925087/z_fd3b9c7e-5a65-44a5-ac46-32d90f5beca1_lwuhfh.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925084/2002RSF_3_rdc9p2.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925082/2002RSF_1_mkiddk.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925081/1_1_1699b4ec-3b00-4699-bc89-18ef0cbf00af_nhdtun.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925082/2002RSF_2_zes5ke.jpg"
    ],

    variants: [
      {
        color: ["Xanh hải quân"],
        sizes: [
          { size: "39", stock: 5 },
          { size: "40", stock: 7 },
          { size: "40.5", stock: 6 },
          { size: "41", stock: 9 },
          { size: "42", stock: 8 },
          { size: "42.5", stock: 6 },
          { size: "43", stock: 4 },
          { size: "44", stock: 3 }
        ]
      }
    ],

    shortDescription: "New Balance 2002R là mẫu sneaker lifestyle cao cấp lấy cảm hứng từ running, kết hợp thiết kế retro và công nghệ đệm êm ái cho sử dụng hằng ngày.",

    description: "Phong cách tiên tiến của 2002R được lấy cảm hứng từ những đôi giày chạy chuyên nghiệp, mang đến thiết kế kỹ thuật tinh tế và kiểu dáng hiện đại. Lấy nền tảng từ MR2002 – mẫu giày chạy cao cấp ra mắt năm 2010, 2002R kế thừa và nâng cấp với các chi tiết tối ưu hơn cho trải nghiệm hằng ngày. Phần upper bằng lưới kết hợp với lớp phủ da lộn tạo nên chiều sâu và độ bền cho thiết kế. Đế giữa ABZORB cùng các miếng đệm ABZORB SBS ở gót giúp tăng khả năng hấp thụ lực, mang lại cảm giác êm ái và ổn định trong từng bước chân.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle / Running-inspired",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_061",
    name: "GIÀY MR530CK(D) - GRAY(CK)",
    slug: "GIAY MR530CK(D) - GRAY(CK)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2287200,
    originalPrice: 2287200,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925518/z_91dfc54b-b9a4-45c5-899b-6ee612af7cb8_vpu7hm.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925514/MR530CK_3_mftpof.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925427/1_1_7144a717-c1cf-461f-9eee-9133f3f2c269_tnzpc1.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925512/MR530CK_1_sfvndw.jpg"
    ],

    variants: [
      {
        color: ["Xám"],
        sizes: [
          { size: "39", stock: 6 },
          { size: "40", stock: 8 },
          { size: "41", stock: 7 },
          { size: "42", stock: 6 },
          { size: "43", stock: 4 },
          { size: "44", stock: 3 }
        ]
      }
    ],

    shortDescription: "New Balance 530 là mẫu sneaker lifestyle mang phong cách running 2000s, thiết kế nhẹ, thoáng khí và dễ phối đồ hằng ngày.",

    description: "New Balance MR530CK(D) là mẫu giày lấy cảm hứng từ phong cách chạy bộ thập niên 2000, được cải tiến để phù hợp với xu hướng thời trang hiện đại. Thiết kế thể thao nhưng tinh tế giúp dễ dàng kết hợp với nhiều phong cách hàng ngày. Thân giày sử dụng chất liệu lưới thoáng khí kết hợp da tổng hợp, mang lại cảm giác nhẹ và thoải mái khi mang. Đệm giữa sử dụng công nghệ ABZORB giúp hấp thụ lực hiệu quả và giảm mỏi chân khi di chuyển trong thời gian dài. Form D-width mang lại cảm giác ôm chân vừa vặn, phù hợp cho nhiều đối tượng sử dụng.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle / Running-inspired",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_062",
    name: "GIÀY U2002RBE(D) - BEIGE(BE)",
    slug: "GIAY U2002RBE(D) - BEIGE(BE)",
    brand: "new_balance",
    categoryId: ["cat_sneaker"],

    price: 3199200,
    originalPrice: 3199200,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925788/U2002RBE_xlt2pw.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925794/U2002RBE_4_henaie.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925743/1_1_cdebb538-7af9-4045-8c09-30836accfd57_wslbzd.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773925789/U2002RBE_1_mglrha.jpg"
    ],

    variants: [
      {
        color: ["Be"],
        sizes: [
          { size: "39", stock: 5 },
          { size: "40", stock: 7 },
          { size: "41", stock: 8 },
          { size: "42", stock: 7 },
          { size: "43", stock: 6 },
          { size: "44", stock: 4 },
          { size: "45", stock: 3 }
        ]
      }
    ],

    shortDescription: "New Balance 2002R là mẫu sneaker lifestyle cao cấp với thiết kế retro running, mang lại sự êm ái và ổn định cho sử dụng hằng ngày.",

    description: "New Balance U2002RBE(D) là mẫu giày lifestyle được tái thiết kế từ dòng MR2002 ra mắt năm 2010, kết hợp phong cách cổ điển với vật liệu và màu sắc hiện đại. Phần upper sử dụng da lộn cao cấp kết hợp lưới thoáng khí, mang lại cảm giác thoải mái và bền bỉ. Đế giữa trang bị công nghệ ABZORB kết hợp N-ERGY giúp hấp thụ lực hiệu quả và tăng độ đàn hồi, mang lại cảm giác êm ái suốt cả ngày dài. Thiết kế D-width đảm bảo độ vừa vặn tự nhiên, phù hợp cho nhiều hoạt động từ đi lại hằng ngày đến di chuyển trong thời gian dài. Tông màu beige trung tính dễ phối đồ, phù hợp với nhiều phong cách từ casual đến streetwear.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle / Running-inspired",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_063",
    name: "GIÀY UA800TL1(2E) - BEIGE(TL1)",
    slug: "GIAY UA800TL1(2E) - BEIGE(TL1)",
    brand: "new_balance",
    categoryId: ["cat_sneaker"],

    price: 2299000,
    originalPrice: 2299000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926077/z_445d611e-a1b6-4955-9068-0f11c22f0900_dpymnk.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926074/UA800LT1_3_ob0mo9.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926028/1_1_b9bc1fac-1526-4e22-9c6c-beaeefbc0e94_dylqtk.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926070/UA800LT1_1_vi4t5g.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926075/UA800LT1_4_hopoee.jpg"
    ],

    variants: [
      {
        color: ["Be"],
        sizes: [
          { size: "40", stock: 3 },
          { size: "41", stock: 4 },
          { size: "42", stock: 4 },
          { size: "43", stock: 3 },
          { size: "44", stock: 2 },
          { size: "45", stock: 2 }
        ]
      }
    ],

    shortDescription: "New Balance 800 là mẫu giày training đa năng với form rộng 2E, mang lại sự thoải mái và ổn định cho vận động và đi lại hằng ngày.",

    description: "New Balance UA800TL1(2E) là đôi giày tập luyện đa năng kết hợp giữa sự thoải mái và khả năng hỗ trợ vượt trội. Thiết kế bề ngang rộng 2E phù hợp với những người có bàn chân to, mang lại cảm giác vừa vặn và dễ chịu ngay cả khi sử dụng trong thời gian dài. Đế giữa có khả năng hấp thụ lực tốt giúp giảm áp lực lên bàn chân trong các chuyển động lặp lại như đi bộ hoặc tập luyện nhẹ. Đế ngoài có độ bám cao, đảm bảo sự ổn định trên nhiều bề mặt. Không chỉ phục vụ cho mục đích thể thao, thiết kế hiện đại còn dễ dàng kết hợp trong cuộc sống hằng ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Training / Walking",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_064",
    name: "GIÀY M411LK3(2E) - BLACK(LK3)",
    slug: "GIAY M411LK3(2E) - BLACK(LK3)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 1499000,
    originalPrice: 1499000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926344/1_1_36b2d574-9bdf-4920-b73a-040098a361f4_owgayi.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926410/M411LK3_4_ohdrnp.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926402/M411LK3_1_y8sx29.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926406/M411LK3_2_u9gqlj.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "39", stock: 3 },
          { size: "40", stock: 5 },
          { size: "41", stock: 6 },
          { size: "42", stock: 5 },
          { size: "43", stock: 4 },
          { size: "44", stock: 3 }
        ]
      }
    ],

    shortDescription: "New Balance 411 là mẫu giày chạy bộ cơ bản với thiết kế nhẹ, thoáng khí và form rộng 2E, phù hợp cho đi bộ và tập luyện hằng ngày.",

    description: "New Balance M411LK3(2E) là mẫu giày chạy bộ cơ bản được thiết kế cho sự thoải mái và tính linh hoạt trong sử dụng hằng ngày. Upper kết hợp giữa lưới và da tổng hợp giúp tăng độ thoáng khí và giảm trọng lượng, mang lại cảm giác nhẹ nhàng khi di chuyển. Đế giữa trang bị công nghệ ABZORB hỗ trợ hấp thụ lực hiệu quả, giúp giảm áp lực lên bàn chân khi chạy hoặc đi bộ trong thời gian dài. Thiết kế form rộng 2E mang lại sự vừa vặn thoải mái cho người có bàn chân bè, phù hợp cho cả tập luyện nhẹ và sử dụng thường ngày.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Running / Walking",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  },

  {
    id: "prod_065",
    name: "GIÀY UA900CB2(2E) - BLACK(CB2)",
    slug: "GIAY UA900CB2(2E) - BLACK(CB2)",
    brand: "new_balance",
    categoryId: ["cat_running"],

    price: 2459000,
    originalPrice: 2459000,
    discountPercent: 0,

    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926714/UA900CB2_2_iqzdao.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926715/UA900CB2_5_zgfeju.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926712/UA900CB2_1_vc4ibw.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773926713/UA900CB2_3_pgjvjq.jpg"
    ],

    variants: [
      {
        color: ["Đen"],
        sizes: [
          { size: "36", stock: 8 },
          { size: "37", stock: 9 },
          { size: "38", stock: 10 },
          { size: "39", stock: 9 },
          { size: "40", stock: 7 }
        ]
      }
    ],

    shortDescription: "New Balance 900 là mẫu giày chạy bộ nhẹ với đệm DynaSoft êm ái, form rộng 2E phù hợp cho đi bộ và vận động hằng ngày.",

    description: "New Balance UA900CB2(2E) sở hữu thiết kế thể thao hiện đại với phần upper bằng lưới kết hợp chất liệu tổng hợp, mang lại độ thoáng khí và độ bền cao. Đế giữa sử dụng công nghệ DynaSoft giúp tạo cảm giác êm ái, nhẹ và linh hoạt trong từng bước chân, phù hợp cho việc đi lại hoặc vận động nhẹ hằng ngày. Form rộng 2E mang lại sự thoải mái cho người có bàn chân bè, hỗ trợ tốt trong quá trình di chuyển lâu dài. Phối màu đen trung tính kết hợp chi tiết tinh tế giúp dễ dàng phối đồ theo phong cách casual hoặc thể thao.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Running / Walking",
      gender: "Unisex"
    },

    rating: 4.5,
    reviewCount: 58,
    sold: 210,
    views: 2400
  }


  
];

export const specLabels = {
  material: "Chất liệu:",
  sole: "Đế:",
  fit: "Form giày:",
  style: "Phong cách:",
  gender: "Giới tính:",
};

export default products;
