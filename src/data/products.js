const baseProducts = [
  {
    name: "Giày Thể Thao Biti's Hunter Core Đen",
    slug: "giay-the-thao-bitis-hunter-core-den",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nam"], //productTag

    price: "890,000",
    originalPrice: "1,090,000",
    discountPercent: 18,

    thumbnail: "https://res.cloudinary.com/shoe-store-ptgdud/image/upload/v1770641740/bitis-ez-lift-xanh-duong_opycff.jpg",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],

    variants: [
      {
        color: "Đen",
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

    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,

    status: "active",

    createdAt: "2026-01-01T08:00:00Z",
    updatedAt: "2026-01-05T10:00:00Z"
  },

  
];


export default products;
