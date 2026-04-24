# 🛒 Shoe Store - Frontend Application

Ứng dụng web bán giày trực tuyến được xây dựng với **React 19** + **Vite** + **Bootstrap 5**, sử dụng **React Router v7** để quản lý định tuyến và **Context API** để quản lý state toàn cục.

---

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Tính năng](#tính-năng)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
- [Kiến trúc ứng dụng](#kiến-trúc-ứng-dụng)
- [Hướng dẫn phát triển](#hướng-dẫn-phát-triển)

---

## 🎯 Giới thiệu

**Shoe Store** là một ứng dụng thương mại điện tử chuyên bán giày thể thao, giày casuall và giày thời trang. Ứng dụng cung cấp trải nghiệm mua sắm trực tuyến hoàn chỉnh với các tính năng:

- Duyệt sản phẩm theo danh mục
- Xem chi tiết sản phẩm với hình ảnh, mô tả và đánh giá
- Giỏ hàng động (lưu vào localStorage)
- Quản lý yêu thích (Favorites)
- Hệ thống đánh giá và bình luận sản phẩm
- Thanh toán và quản lý đơn hàng
- Xác thực người dùng (Đăng ký/Đăng nhập)
- Quản lý hồ sơ cá nhân
- Hỗ trợ khách hàng (FAQ, Chính sách bảo hành, Chính sách trả lại)

---

## ✨ Tính năng chính

### 🏠 Trang chủ

- Banner quảng cáo
- Danh sách sản phẩm nổi bật
- Phân loại sản phẩm theo giới tính (Nam/Nữ)
- Bộ lọc và tìm kiếm sản phẩm

### 👟 Chi tiết sản phẩm

- Xem hình ảnh sản phẩm (slider ảnh)
- Chọn size và màu sắc
- Điều chỉnh số lượng
- Thêm vào giỏ hàng hoặc mua ngay
- Xem chi tiết specs (chất liệu, đế, form giày, phong cách, giới tính)
- Xem đánh giá và lượt bán
- **Thêm đánh giá mới** (Modal form)
- Xem sản phẩm liên quan

### 🛍️ Giỏ hàng

- Xem danh sách sản phẩm trong giỏ
- Điều chỉnh số lượng từng sản phẩm
- Xóa sản phẩm khỏi giỏ
- Tính toán tổng tiền tự động
- Lưu giỏ hàng vào localStorage

### ❤️ Danh sách yêu thích

- Thêm/xóa sản phẩm yêu thích
- Xem danh sách sản phẩm đã lưu
- Chuyển từ yêu thích sang giỏ hàng

### 💳 Thanh toán

- Chọn phương thức thanh toán
- Nhập thông tin giao hàng
- Xác nhận đơn hàng
- Modal thành công

### 👤 Quản lý tài khoản

- Đăng ký tài khoản mới
- Đăng nhập/Đăng xuất
- Xem/Chỉnh sửa thông tin cá nhân
- Quản lý địa chỉ giao hàng

### 📞 Dịch vụ khách hàng

- FAQ - Câu hỏi thường gặp
- Chính sách bảo hành
- Chính sách trả lại sản phẩm

---

## 🛠️ Công nghệ sử dụng

| Công nghệ        | Phiên bản       | Mục đích                      |
| ---------------- | --------------- | ----------------------------- |
| **React**        | 19.2.0          | Frontend framework            |
| **Vite**         | 7.2.4           | Build tool & Dev server       |
| **React Router** | 7.13.x          | Quản lý routing               |
| **Bootstrap**    | 5.3.8           | CSS Framework                 |
| **Cloudinary**   | 1.14.x + 1.22.x | Quản lý & tối ưu hóa hình ảnh |
| **ESLint**       | 9.39.1          | Code linting                  |

### Dependencies chính

```json
{
  "@cloudinary/react": "^1.14.3",
  "@cloudinary/url-gen": "^1.22.0",
  "bootstrap": "^5.3.8",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router": "^7.13.1",
  "react-router-dom": "^7.13.2"
}
```

---

## 📁 Cấu trúc dự án

```
shoe-store/
├── public/                          # Tài nguyên tĩnh
│   └── assets/
│       ├── fonts/                   # Font chữ custom
│       ├── icon/                    # Icon SVG/PNG
│       └── img/                     # Hình ảnh tĩnh
│
├── src/
│   ├── about/                       # Trang về chúng tôi
│   │   └── About.jsx
│   │
│   ├── assets/                      # Tài nguyên được import
│   │   ├── fonts/
│   │   ├── icon/
│   │   └── img/
│   │
│   ├── components/                  # Các component tái sử dụng
│   │   ├── common/                  # Component chung
│   │   │   ├── Breadcrumb.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Checkbox.jsx
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── Popup.jsx
│   │   │   ├── Rating.jsx
│   │   │   ├── Spinner.jsx
│   │   │   └── ToastHost.jsx        # Toast notification system
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.jsx           # Header chính
│   │   │   ├── Footer.jsx           # Footer chính
│   │   │   ├── MainLayout.jsx       # Layout chính
│   │   │   ├── AuthLayout.jsx       # Layout cho trang auth
│   │   │   └── ProfileLayout.jsx    # Layout cho trang profile
│   │   │
│   │   ├── product/                 # Product-related components
│   │   │   ├── ProductFilter.jsx    # Bộ lọc sản phẩm
│   │   │   ├── ProductGallery.jsx   # Gallery ảnh sản phẩm
│   │   │   ├── ProductImage.jsx
│   │   │   ├── ProductPrice.jsx
│   │   │   ├── ProductQuantity.jsx
│   │   │   ├── ProductSizeSelector.jsx
│   │   │   ├── ProductCard/         # Card hiển thị sản phẩm
│   │   │   ├── ProductGrid/         # Grid danh sách sản phẩm
│   │   │   └── ProductQuantity/
│   │   │
│   │   └── section/                 # Các section nhỏ
│   │       ├── auth/
│   │       ├── cart/
│   │       ├── home/
│   │       ├── product/
│   │       └── store/
│   │
│   ├── context/                     # React Context (Global State)
│   │   └── AuthContext.jsx          # Quản lý trạng thái auth
│   │
│   ├── data/                        # Mock data
│   │   ├── products.js              # Danh sách sản phẩm + specLabels
│   │   └── users.js                 # Mock dữ liệu user
│   │
│   ├── hooks/                       # Custom React Hooks
│   │   ├── useCart.js               # Hook quản lý giỏ hàng
│   │   └── useFavorites.js          # Hook quản lý yêu thích
│   │
│   ├── pages/                       # Các trang (Page components)
│   │   ├── About.jsx                # Trang về chúng tôi
│   │   ├── Auth/
│   │   │   ├── Login.jsx            # Trang đăng nhập
│   │   │   └── Register.jsx         # Trang đăng ký
│   │   ├── Cart/
│   │   │   ├── CartPage.jsx         # Trang giỏ hàng
│   │   │   ├── CartModal.jsx        # Modal giỏ hàng
│   │   │   └── EditAddressModal.jsx
│   │   ├── Checkout/
│   │   │   ├── Checkout.jsx         # Trang thanh toán
│   │   │   └── SuccessModalCheckout.jsx
│   │   ├── CustomerServicePages/
│   │   │   ├── FAQ.jsx              # Câu hỏi thường gặp
│   │   │   ├── ReturnPolicy.jsx     # Chính sách trả lại
│   │   │   └── WarrantyPolicy.jsx   # Chính sách bảo hành
│   │   ├── Favourite/
│   │   │   └── FavoritesPage.jsx    # Trang danh sách yêu thích
│   │   ├── Home/
│   │   │   └── Home.jsx             # Trang chủ
│   │   ├── Product/
│   │   │   ├── Product.jsx          # Trang danh sách sản phẩm
│   │   │   ├── MenProduct.jsx       # Sản phẩm nam
│   │   │   └── WomenProduct.jsx     # Sản phẩm nữ
│   │   ├── ProductDetail/
│   │   │   ├── ProductDetail.jsx    # Chi tiết sản phẩm
│   │   │   ├── ReviewModal.jsx      # Modal thêm đánh giá ✨ NEW
│   │   │   ├── ProductDetail.css
│   │   │   └── ReviewModal.css
│   │   └── Profile/
│   │       └── ProfilePage.jsx      # Trang hồ sơ cá nhân
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx            # Định tuyến ứng dụng
│   │
│   ├── service/
│   │   └── authService.js           # Service xác thực
│   │
│   ├── styles/                      # CSS toàn cục
│   │   ├── reset.css                # Reset CSS mặc định
│   │   ├── global.css               # CSS chung
│   │   ├── variables.css            # CSS variables
│   │   ├── Button.css
│   │   ├── Dropdown.css
│   │   └── Input.css
│   │
│   ├── utils/                       # Hàm tiện ích
│   │   ├── authStorage.js           # Lưu auth vào localStorage
│   │   ├── cartStorage.js           # Lưu giỏ hàng vào localStorage
│   │   ├── profileStorage.js        # Lưu profile vào localStorage
│   │   ├── constants.js             # Hằng số toàn ứng dụng
│   │   ├── formatPrice.js           # Format giá tiền
│   │   ├── notify.js                # Hệ thống thông báo
│   │   ├── password.js              # Utilities cho mật khẩu
│   │   └── validateForm.js          # Validation form
│   │
│   ├── App.jsx                      # Root component
│   ├── App.css
│   ├── main.jsx                     # Entry point
│   └── index.css
│
├── eslint.config.js                 # ESLint configuration
├── vite.config.js                   # Vite configuration
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Hướng dẫn cài đặt

### Yêu cầu

- **Node.js** >= 16.x
- **npm** >= 8.x hoặc **yarn** >= 1.22.x

### Bước 1: Clone repository

```bash
git clone https://github.com/yourusername/shoe-store.git
cd shoe-store
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Bước 4: Build production

```bash
npm run build
```

### Bước 5: Preview build

```bash
npm run preview
```

---

## 📖 Hướng dẫn sử dụng

### Chạy Development Server

```bash
npm run dev
```

- Hot Module Replacement (HMR) được bật mặc định
- Mở `http://localhost:5173` trong trình duyệt

### Linting Code

```bash
npm run lint
```

Kiểm tra lỗi code theo chuẩn ESLint

### Build cho Production

```bash
npm run build
```

- Tạo thư mục `dist/` với code đã được tối ưu
- Ready để deploy trên server

### Preview Production Build

```bash
npm run preview
```

Xem trước build production trước khi deploy

---

## 🏗️ Kiến trúc ứng dụng

### Data Flow

```
┌─────────────────────────────────────────────────┐
│           React Components (Pages)              │
│    (Home, Product, ProductDetail, Cart, etc)    │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │   Custom Hooks       │
        │  (useCart, useFav)   │
        └──────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │   Context API        │
        │  (AuthContext, etc)  │
        └──────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │  LocalStorage Utils  │
        │ (cartStorage, etc)   │
        └──────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │    Mock Data         │
        │  (products, users)   │
        └──────────────────────┘
```

### Folder Responsibilities

| Folder          | Trách nhiệm               | Ví dụ                     |
| --------------- | ------------------------- | ------------------------- |
| **components/** | UI components tái sử dụng | Button, Modal, Card       |
| **pages/**      | Trang web chính           | Home, ProductDetail, Cart |
| **context/**    | Global state management   | AuthContext               |
| **hooks/**      | Custom React logic        | useCart, useFavorites     |
| **data/**       | Mock data & constants     | products.js, users.js     |
| **utils/**      | Hàm tiện ích              | formatPrice, notify       |
| **styles/**     | CSS toàn cục              | variables.css, global.css |

---

## 💻 Hướng dẫn phát triển

### Thêm tính năng mới

#### 1. Thêm Component mới

```javascript
// src/components/MyComponent.jsx
export default function MyComponent() {
  return <div>My Component</div>;
}
```

#### 2. Thêm Page mới

```javascript
// src/pages/MyPage/MyPage.jsx
import MainLayout from "../../components/layout/MainLayout";

export default function MyPage() {
  return <MainLayout props={<div>My Page Content</div>} />;
}
```

#### 3. Thêm Route

```javascript
// src/routes/AppRoutes.jsx
<Route path="/my-page" element={<MyPage />} />
```

#### 4. Thêm Custom Hook

```javascript
// src/hooks/useMyHook.js
export function useMyHook() {
  // Logic
  return {
    /* data */
  };
}
```

### Quản lý State

#### Sử dụng localStorage

```javascript
import { addCartItem } from "../../utils/cartStorage";

addCartItem({
  pid: product.id,
  size: selectedSize,
  color: selectedColor,
  qty: quantity,
});
```

#### Sử dụng Context

```javascript
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const { user, logout } = useContext(AuthContext);
```

### Styling

#### CSS Global

- Định nghĩa trong `src/styles/`
- Import trong `src/main.jsx` hoặc `src/App.jsx`

#### CSS Component

- Tạo file `.css` cùng thư mục với component
- Import trong component: `import './Component.css'`

#### CSS Variables

```css
/* src/styles/variables.css */
:root {
  --primary: #111;
  --secondary: #666;
  --success: #28a745;
}
```

---

## 🔐 Quản lý dữ liệu

### localStorage API

Ứng dụng sử dụng `localStorage` để lưu:

- **Giỏ hàng**: `cartStorage.js`
- **Thông tin đăng nhập**: `authStorage.js`
- **Hồ sơ người dùng**: `profileStorage.js`
- **Yêu thích**: `useFavorites.js`

### Mock Data

Tất cả dữ liệu được mock trong:

- `src/data/products.js` - Danh sách sản phẩm
- `src/data/users.js` - Mock dữ liệu user

---

## 📱 Responsive Design

Ứng dụng được thiết kế responsive với Bootstrap breakpoints:

- **xs**: < 576px (Mobile)
- **sm**: ≥ 576px (Tablet)
- **md**: ≥ 768px
- **lg**: ≥ 992px (Desktop)
- **xl**: ≥ 1200px (Large Desktop)

---

## 🎨 Ghi chú về thiết kế

- **Font chữ**: Import từ `src/assets/fonts/`
- **Icon**: Lưu tại `src/assets/icon/`
- **Hình ảnh**: Được host trên Cloudinary
- **Màu sắc**: Định nghĩa trong `src/styles/variables.css`

---

## 🤝 Contribution Guidelines

1. Fork repository
2. Tạo branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

---

## 📝 License

Dự án này được cấp phép dưới giấy phép MIT.

---

## 👥 Team & Author

**Sinh viên**: PTGDUD - HKII 2025-2026

---

## 📞 Support & Contact

Nếu bạn có câu hỏi hoặc cần hỗ trợ, vui lòng:

- Kiểm tra [FAQ](./src/pages/CustomerServicePages/FAQ.jsx)
- Tạo Issue trên GitHub
- Liên hệ qua email

---

## 🔄 Changelog

### v0.0.1 (Latest)

- ✨ Khởi tạo dự án
- 🎨 Thiết kế UI với Bootstrap 5
- 🛍️ Implement tính năng giỏ hàng
- 👤 Implement tính năng auth
- 📦 Implement tính năng thanh toán
- 🌟 Thêm tính năng đánh giá sản phẩm
- 📱 Responsive design

---

## 📚 Tài liệu tham khảo

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [React Router Documentation](https://reactrouter.com)
- [Bootstrap Documentation](https://getbootstrap.com)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

## Cú pháp commit chuẩn sẽ sử dụng

- feat → thêm tính năng mới
- fix → sửa bug
- docs → thay đổi tài liệu
- style → format code (không ảnh hưởng logic, ví dụ: prettier, eslint)
- refactor → cải tiến code nhưng không đổi hành vi
- test → thêm/sửa test
- chore → việc lặt vặt (build, config, dependency update)
- perf → tối ưu hiệu năng
- ci → thay đổi cấu hình CI/CD

✅ Ví dụ commit chuẩn

- feat(auth): thêm chức năng đăng nhập bằng Google
- fix(booking): sửa lỗi tính sai tiền khi huỷ phòng
- docs(readme): cập nhật hướng dẫn cài đặt
- style(ui): format code theo eslint
- refactor(order): tách logic xử lý thanh toán ra service riêng
- test(user): thêm unit test cho UserService
- chore(deps): update Spring Boot 3.2.1
