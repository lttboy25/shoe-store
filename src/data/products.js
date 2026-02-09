const baseProducts = [
  {
    id: "p001",
    sku: "BITIS-001",
    name: "Giày Thể Thao Biti's Hunter Core Đen",
    slug: "giay-the-thao-bitis-hunter-core-den",
    brand: "Biti's",
    categoryId: "cat_sneaker_nam",

    price: "890,000",
    originalPrice: "1,090,000",
    discountPercent: 18,

    thumbnail: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],

    variants: [
      {
        color: "Đen",
        colorCode: "#000000",
        sizes: [
          { size: "40", stock: 6 },
          { size: "41", stock: 8 },
          { size: "42", stock: 5 },
          { size: "43", stock: 3 }
        ]
      }
    ],

    shortDescription: "Giày sneaker nam phong cách thể thao, dễ phối đồ.",
    description: "Biti's Hunter Core mang phong cách năng động, đế êm nhẹ, phù hợp đi học và đi chơi.",

    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },

    disclaimer: {
      image: "Hình ảnh chỉ mang tính minh họa.",
      legal: "Cam kết sản phẩm chính hãng."
    },

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,

    badges: ["sale"],
    status: "active",

    seo: {
      title: "Giày Biti's Hunter Core Nam",
      description: "Giày sneaker Biti's chính hãng, giá tốt."
    },

    createdAt: "2026-01-01T08:00:00Z",
    updatedAt: "2026-01-05T10:00:00Z"
  },

  {
    id: "p002",
    sku: "NIKE-002",
    name: "Nike Air Zoom Pegasus 39",
    slug: "nike-air-zoom-pegasus-39",
    brand: "Nike",
    categoryId: "cat_sneaker_nam",

    price: "2,650,000",
    originalPrice: "3,200,000",
    discountPercent: 17,

    thumbnail: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      "https://images.unsplash.com/photo-1589187155478-87a6b7c7d4d5",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    ],

    variants: [
      {
        color: "Trắng",
        colorCode: "#FFFFFF",
        sizes: [
          { size: "39", stock: 4 },
          { size: "40", stock: 6 },
          { size: "41", stock: 5 }
        ]
      }
    ],

    shortDescription: "Giày chạy bộ Nike nhẹ, êm, bền.",
    description: "Nike Pegasus 39 hỗ trợ tối đa cho chạy bộ và luyện tập.",

    specifications: {
      material: "Mesh",
      sole: "React Foam",
      fit: "Regular fit",
      style: "Running",
      gender: "Nam"
    },

    disclaimer: {
      image: "Màu sắc có thể khác thực tế.",
      legal: "Hàng chính hãng Nike."
    },

    rating: 4.7,
    reviewCount: 58,
    sold: 340,
    views: 2600,

    badges: ["hot"],
    status: "active",

    seo: {
      title: "Nike Air Zoom Pegasus 39",
      description: "Giày chạy bộ Nike chính hãng."
    },

    createdAt: "2026-01-02T08:00:00Z",
    updatedAt: "2026-01-06T10:00:00Z"
  },

  {
    id: "p003",
    sku: "ADIDAS-003",
    name: "Adidas Ultraboost Light",
    slug: "adidas-ultraboost-light",
    brand: "Adidas",
    categoryId: "cat_sneaker_nam",

    price: "3,990,000",
    originalPrice: "4,500,000",
    discountPercent: 11,

    thumbnail: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      "https://images.unsplash.com/photo-1606813902917-0b6f6f1e3b68"
    ],

    variants: [
      {
        color: "Xám",
        colorCode: "#999999",
        sizes: [
          { size: "40", stock: 3 },
          { size: "41", stock: 4 },
          { size: "42", stock: 2 }
        ]
      }
    ],

    shortDescription: "Giày chạy bộ cao cấp Adidas.",
    description: "Ultraboost Light mang lại độ đàn hồi và êm ái vượt trội.",

    specifications: {
      material: "Primeknit",
      sole: "Boost",
      fit: "Regular fit",
      style: "Running",
      gender: "Nam"
    },

    disclaimer: {
      image: "Hình ảnh mang tính minh họa.",
      legal: "Sản phẩm chính hãng Adidas."
    },

    rating: 4.8,
    reviewCount: 76,
    sold: 180,
    views: 2300,

    badges: ["premium"],
    status: "active",

    seo: {
      title: "Adidas Ultraboost Light",
      description: "Giày chạy bộ cao cấp Adidas."
    },

    createdAt: "2026-01-03T08:00:00Z",
    updatedAt: "2026-01-07T10:00:00Z"
  },

  {
    id: "p004",
    sku: "PUMA-004",
    name: "Puma Smash V2",
    slug: "puma-smash-v2",
    brand: "Puma",
    categoryId: "cat_sneaker_nam",

    price: "1,350,000",
    originalPrice: "1,650,000",
    discountPercent: 18,

    thumbnail: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
    images: [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1528701800489-20be3c3ea9c9"
    ],

    variants: [
      {
        color: "Trắng",
        colorCode: "#FFFFFF",
        sizes: [
          { size: "39", stock: 7 },
          { size: "40", stock: 6 }
        ]
      }
    ],

    shortDescription: "Giày sneaker Puma phong cách tối giản.",
    description: "Puma Smash V2 phù hợp đi học, đi làm.",

    specifications: {
      material: "Da tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Casual",
      gender: "Nam"
    },

    disclaimer: {
      image: "Ảnh chỉ mang tính minh họa.",
      legal: "Hàng chính hãng Puma."
    },

    rating: 4.4,
    reviewCount: 29,
    sold: 140,
    views: 1100,

    badges: [],
    status: "active",

    seo: {
      title: "Puma Smash V2",
      description: "Giày Puma chính hãng."
    },

    createdAt: "2026-01-04T08:00:00Z",
    updatedAt: "2026-01-08T10:00:00Z"
  },

  {
    id: "p005",
    sku: "CONVERSE-005",
    name: "Converse Chuck Taylor Classic",
    slug: "converse-chuck-taylor-classic",
    brand: "Converse",
    categoryId: "cat_sneaker_nam",

    price: "1,250,000",
    originalPrice: "1,450,000",
    discountPercent: 14,

    thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1539185441755-769473a23570"
    ],

    variants: [
      {
        color: "Đen",
        colorCode: "#000000",
        sizes: [
          { size: "39", stock: 5 },
          { size: "40", stock: 7 }
        ]
      }
    ],

    shortDescription: "Giày Converse cổ điển.",
    description: "Chuck Taylor biểu tượng thời trang vượt thời gian.",

    specifications: {
      material: "Canvas",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Classic",
      gender: "Unisex"
    },

    disclaimer: {
      image: "Hình ảnh mang tính minh họa.",
      legal: "Sản phẩm chính hãng Converse."
    },

    rating: 4.6,
    reviewCount: 65,
    sold: 500,
    views: 4200,

    badges: ["best-seller"],
    status: "active",

    seo: {
      title: "Converse Chuck Taylor",
      description: "Giày Converse cổ điển chính hãng."
    },

    createdAt: "2026-01-05T08:00:00Z",
    updatedAt: "2026-01-09T10:00:00Z"
  }
];

// nhân bản + xáo trộn để đủ 20 sản phẩm
const products = Array.from({ length: 20 }, (_, i) => ({
  ...baseProducts[i % 5],
  id: `${baseProducts[i % 5].id}-${i}`
}));

export default products;
