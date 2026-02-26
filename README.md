<div align="center">

# 🛒 LiquidShop - Website Bán Hàng Công Nghệ

<img src="frontend/src/assets/icons/TL-Logo.png" alt="LiquidShop Logo" width="150" height="150" style="border-radius: 25px;">

### 🌐 Website thương mại điện tử chuyên cung cấp sản phẩm công nghệ

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Status](https://img.shields.io/badge/Trạng%20thái-Đang%20phát%20triển-red?style=flat-square)

---

**LiquidShop** là website thương mại điện tử được phát triển bởi **Team Liquid**, chuyên cung cấp các sản phẩm công nghệ. Website hỗ trợ người dùng duyệt, tìm kiếm, mua sắm sản phẩm công nghệ với tích hợp thanh toán trực tuyến (VNPay, MoMo, QR Banking) và AI Chatbot hỗ trợ tư vấn thông minh.

[Tính năng](#-tính-năng-chính) •
[Công nghệ](#%EF%B8%8F-công-nghệ-sử-dụng) •
[Cài đặt](#-cài-đặt-và-chạy-dự-án) •
[Cơ sở dữ liệu](#-cấu-trúc-cơ-sở-dữ-liệu-mongodb) •
[Nhóm thực hiện](#-thông-tin-nhóm-thực-hiện)

</div>

---

## 📑 Mục Lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng chính](#-tính-năng-chính)
- [Công nghệ sử dụng](#%EF%B8%8F-công-nghệ-sử-dụng)
- [Kiến trúc dự án](#-kiến-trúc-dự-án)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Cài đặt và chạy dự án](#-cài-đặt-và-chạy-dự-án)
- [Cấu trúc cơ sở dữ liệu MongoDB](#-cấu-trúc-cơ-sở-dữ-liệu-mongodb)
- [Thông tin đồ án](#-thông-tin-đồ-án)
- [Thông tin nhóm thực hiện](#-thông-tin-nhóm-thực-hiện)
- [Trạng thái dự án](#-trạng-thái-dự-án)
- [Hướng phát triển tương lai](#-hướng-phát-triển-tương-lai)
- [Giấy phép](#-giấy-phép)

---

## 📖 Giới Thiệu

**LiquidShop** là đồ án môn học **Nhập môn Công nghệ Phần mềm**, được thực hiện bởi **Team Liquid**. Website được xây dựng trên nền tảng **Node.js** với **Express** làm backend, **React** (TypeScript) làm frontend và **MongoDB** làm cơ sở dữ liệu. Hệ thống tích hợp nhiều phương thức thanh toán trực tuyến và AI Chatbot hỗ trợ tư vấn mua hàng.

### 🎯 Mục tiêu đồ án

- 🛍️ Xây dựng website **thương mại điện tử** chuyên bán sản phẩm công nghệ
- 🔍 Cung cấp công cụ **tìm kiếm, lọc sản phẩm** theo danh mục, thương hiệu, giá cả
- 🛒 Hỗ trợ **giỏ hàng, wishlist** và quản lý đơn hàng đầy đủ
- 💳 Tích hợp **thanh toán trực tuyến** qua VNPay, MoMo và QR Banking
- 🤖 Tích hợp **AI Chatbot** (Groq AI) tư vấn sản phẩm thông minh
- ⭐ Cho phép người dùng **đánh giá, bình luận** sản phẩm
- 🎫 Hệ thống **khuyến mãi, mã giảm giá** linh hoạt
- 🛡️ Xây dựng **trang quản trị** (Admin Panel) với dashboard thống kê chi tiết

---

## ✨ Tính Năng Chính

### 👤 Dành cho Khách hàng (Customer)

| Tính năng                   | Mô tả                                                                |
| --------------------------- | -------------------------------------------------------------------- |
| 🔐 **Đăng ký / Đăng nhập**  | Xác thực người dùng qua JWT, hỗ trợ quên mật khẩu qua email          |
| 🔍 **Tìm kiếm sản phẩm**    | Tìm kiếm thông minh với Fuse.js, lọc theo danh mục, thương hiệu, giá |
| 🏷️ **Duyệt sản phẩm**       | Xem danh sách sản phẩm theo danh mục, thương hiệu với phân trang     |
| 📋 **Chi tiết sản phẩm**    | Thông tin đầy đủ: mô tả, hình ảnh, giá, đặc điểm kỹ thuật, đánh giá  |
| 🛒 **Giỏ hàng**             | Thêm, sửa số lượng, xóa sản phẩm trong giỏ hàng                      |
| ❤️ **Wishlist**             | Lưu danh sách sản phẩm yêu thích                                     |
| 💳 **Thanh toán**           | Hỗ trợ VNPay, MoMo, QR Banking và thanh toán khi nhận hàng (COD)     |
| 📦 **Quản lý đơn hàng**     | Theo dõi trạng thái đơn hàng, xem lịch sử mua hàng                   |
| ⭐ **Đánh giá & Bình luận** | Viết đánh giá, chấm điểm sản phẩm đã mua                             |
| 🎫 **Mã khuyến mãi**        | Áp dụng mã giảm giá khi thanh toán                                   |
| 🤖 **AI Chatbot**           | Trò chuyện với AI để nhận tư vấn, gợi ý sản phẩm phù hợp             |
| 👤 **Quản lý hồ sơ**        | Chỉnh sửa thông tin cá nhân, thay đổi mật khẩu                       |
| 💬 **Gửi phản hồi**         | Gửi góp ý, phản hồi đến quản trị viên                                |

### 🛡️ Dành cho Quản trị viên (Admin)

| Tính năng                  | Mô tả                                                         |
| -------------------------- | ------------------------------------------------------------- |
| 📊 **Dashboard**           | Thống kê tổng quan: doanh thu, đơn hàng, sản phẩm, người dùng |
| 📦 **Quản lý sản phẩm**    | Thêm, sửa, xóa sản phẩm với hình ảnh và thông số kỹ thuật     |
| 📂 **Quản lý danh mục**    | Quản lý danh mục sản phẩm phân cấp                            |
| 🏢 **Quản lý thương hiệu** | Thêm, sửa, xóa thương hiệu sản phẩm                           |
| 🧾 **Quản lý đơn hàng**    | Xem, cập nhật trạng thái đơn hàng                             |
| ⭐ **Kiểm duyệt đánh giá** | Duyệt, từ chối hoặc xóa các đánh giá từ khách hàng            |
| 👥 **Quản lý người dùng**  | Xem thông tin, quản lý tài khoản người dùng                   |
| 🎫 **Quản lý khuyến mãi**  | Tạo, sửa, xóa chương trình khuyến mãi và mã giảm giá          |
| 💬 **Quản lý phản hồi**    | Xem và phản hồi góp ý từ khách hàng                           |
| 💳 **Quản lý thanh toán**  | Theo dõi các giao dịch thanh toán                             |

---

## 🛠️ Công Nghệ Sử Dụng

### 🖥️ Backend

| Công nghệ                                                                                                 | Phiên bản | Mô tả                          |
| --------------------------------------------------------------------------------------------------------- | --------- | ------------------------------ |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)  | 18+       | Nền tảng runtime JavaScript    |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)    | 5.1.0     | Framework web cho Node.js      |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)    | 7.0.0     | Driver kết nối MongoDB         |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | 8.19.3    | ODM cho MongoDB                |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)      | 9.0.2     | Xác thực bằng JSON Web Token   |
| ![Groq](https://img.shields.io/badge/Groq%20AI-FF6F61?style=flat-square&logo=groq&logoColor=white)        | 0.37.0    | AI Chatbot tư vấn sản phẩm     |
| Nodemailer                                                                                                | 7.0.10    | Gửi email xác thực & thông báo |
| Fuse.js                                                                                                   | 7.1.0     | Tìm kiếm mờ (Fuzzy Search)     |
| bcryptjs                                                                                                  | 3.0.3     | Mã hóa mật khẩu                |

### 🎨 Frontend

| Công nghệ                                                                                                             | Phiên bản | Mô tả                              |
| --------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)                      | 19.2.0    | Thư viện UI                        |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)       | 5.9.3     | Ngôn ngữ lập trình có kiểu dữ liệu |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)                         | 7.2.4     | Build tool nhanh cho frontend      |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | 4.1.17    | Framework CSS utility-first        |
| ![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat-square&logo=radixui&logoColor=white)            | latest    | Component library (shadcn/ui)      |
| React Router DOM                                                                                                      | 7.9.6     | Điều hướng SPA                     |
| React Hook Form                                                                                                       | 7.68.0    | Quản lý form                       |
| Recharts                                                                                                              | 2.15.4    | Biểu đồ thống kê cho Dashboard     |
| Embla Carousel                                                                                                        | 8.6.0     | Carousel/Slider sản phẩm           |
| Zod                                                                                                                   | 4.1.13    | Validation schema                  |

### 💳 Tích hợp thanh toán

| Dịch vụ                                                                               | Mô tả                      |
| ------------------------------------------------------------------------------------- | -------------------------- |
| ![VNPay](https://img.shields.io/badge/VNPay-003580?style=flat-square&logoColor=white) | Cổng thanh toán trực tuyến |
| ![MoMo](https://img.shields.io/badge/MoMo-A50064?style=flat-square&logoColor=white)   | Ví điện tử MoMo            |
| 🏦 **QR Banking**                                                                     | Chuyển khoản qua mã QR     |

---

## 🏗 Kiến Trúc Dự Án

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend (React + TS)                  │
│  ┌──────────┐  ┌───────────┐  ┌───────────────────────┐ │
│  │  Pages   │  │Components │  │    Context / Hooks    │ │
│  └────┬─────┘  └─────┬─────┘  └───────────────────────┘ │
│       │               │                                  │
│  ┌────▼───────────────▼─────┐                            │
│  │    Services (Axios API)  │                            │
│  └────────────┬─────────────┘                            │
├───────────────┼──────────────────────────────────────────┤
│               │   REST API (JSON)                        │
├───────────────┼──────────────────────────────────────────┤
│               │    Backend (Express.js)                   │
│  ┌────────────▼────────────┐                             │
│  │     Routes / Router     │                             │
│  └────────────┬────────────┘                             │
│  ┌────────────▼────────────┐                             │
│  │  Middlewares (Auth JWT) │                             │
│  └────────────┬────────────┘                             │
│  ┌────────────▼────────────┐                             │
│  │      Controllers        │                             │
│  └──┬─────────┬────────┬───┘                             │
│     │         │        │                                 │
│  ┌──▼──┐  ┌──▼──┐  ┌──▼──────┐                          │
│  │Utils│  │Models│  │Services │                          │
│  └─────┘  └──┬──┘  └─────────┘                          │
│              │    (VNPay, MoMo, Mail, Groq)              │
├──────────────┼───────────────────────────────────────────┤
│              │     Database Layer                         │
│         ┌────▼─────┐                                     │
│         │ MongoDB  │  (Mongoose ODM)                     │
│         └──────────┘                                     │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Cấu Trúc Thư Mục

```
📦 TL-Website
├── 📄 README.md                           # Tài liệu dự án
├── 📄 package-lock.json
│
├── 📂 backend/                            # ⚙️ Server-side
│   ├── 📄 app.js                          # Entry point server
│   ├── 📄 package.json                    # Dependencies backend
│   ├── 📄 .env.example                    # Mẫu biến môi trường
│   ├── 📄 run_server.cmd                  # Script khởi chạy server
│   │
│   ├── 📂 models/                         # 💾 Mongoose Models
│   │   ├── 📄 userModel.js                # Người dùng
│   │   ├── 📄 productModel.js             # Sản phẩm
│   │   ├── 📄 categoryModel.js            # Danh mục
│   │   ├── 📄 brandModel.js               # Thương hiệu
│   │   ├── 📄 cartModel.js                # Giỏ hàng
│   │   ├── 📄 orderModel.js               # Đơn hàng
│   │   ├── 📄 paymentModel.js             # Thanh toán
│   │   ├── 📄 reviewModel.js              # Đánh giá
│   │   ├── 📄 wishlistModel.js            # Wishlist
│   │   ├── 📄 promotionModel.js           # Khuyến mãi
│   │   ├── 📄 feedbackModel.js            # Phản hồi
│   │   └── 📄 chatSessionModel.js         # Phiên chat AI
│   │
│   ├── 📂 controllers/                    # 🎮 Xử lý logic
│   │   ├── 📄 authController.js           # Xác thực
│   │   ├── 📄 productController.js        # Sản phẩm (chung)
│   │   ├── 📄 categoryController.js       # Danh mục (chung)
│   │   ├── 📄 brandController.js          # Thương hiệu (chung)
│   │   ├── 📄 reviewController.js         # Đánh giá (chung)
│   │   ├── 📄 paymentController.js        # Thanh toán (chung)
│   │   │
│   │   ├── 📂 admin/                      # 🛡️ Controller Admin
│   │   │   ├── 📄 adminController.js
│   │   │   ├── 📄 dashboardController.js
│   │   │   ├── 📄 productController.js
│   │   │   ├── 📄 categoryController.js
│   │   │   ├── 📄 brandController.js
│   │   │   ├── 📄 orderController.js
│   │   │   ├── 📄 reviewController.js
│   │   │   ├── 📄 paymentController.js
│   │   │   ├── 📄 promotionController.js
│   │   │   └── 📄 feedbackController.js
│   │   │
│   │   └── 📂 customer/                   # 👤 Controller Customer
│   │       ├── 📄 cartController.js
│   │       ├── 📄 orderController.js
│   │       ├── 📄 wishlistController.js
│   │       ├── 📄 chatbotController.js
│   │       ├── 📄 userController.js
│   │       ├── 📄 reviewController.js
│   │       ├── 📄 paymentController.js
│   │       ├── 📄 promotionController.js
│   │       └── 📄 feedbackController.js
│   │
│   ├── 📂 routes/                         # 🛤️ API Routes
│   │   ├── 📄 index.js                    # Route chính
│   │   └── 📂 api/                        # Các route API
│   │
│   ├── 📂 middlewares/                    # 🔒 Middleware
│   │   └── 📄 (auth middleware)
│   │
│   └── 📂 utils/                          # 🔧 Tiện ích
│       ├── 📄 APIFeatures.js              # Filter, sort, pagination
│       ├── 📄 vnpayService.js             # Tích hợp VNPay
│       ├── 📄 momoService.js              # Tích hợp MoMo
│       ├── 📄 bankQrService.js            # Tích hợp QR Banking
│       ├── 📄 sendMail.js                 # Gửi email
│       └── 📄 updateProductRating.js      # Cập nhật rating
│
└── 📂 frontend/                           # 🎨 Client-side
    ├── 📄 package.json                    # Dependencies frontend
    ├── 📄 vite.config.ts                  # Cấu hình Vite
    ├── 📄 tsconfig.json                   # Cấu hình TypeScript
    ├── 📄 index.html                      # Entry HTML
    ├── 📄 vercel.json                     # Cấu hình deploy Vercel
    ├── 📄 components.json                 # Cấu hình shadcn/ui
    │
    └── 📂 src/
        ├── 📄 App.tsx                     # Component gốc
        ├── 📄 main.tsx                    # Entry point React
        │
        ├── 📂 pages/                      # 📄 Các trang
        │   ├── 📂 home/                   # Trang chủ
        │   ├── 📂 product/                # Sản phẩm
        │   ├── 📂 cart/                   # Giỏ hàng
        │   ├── 📂 order/                  # Đơn hàng
        │   ├── 📂 customer/               # Hồ sơ & Xác thực
        │   │   ├── 📂 auth/               # Đăng nhập / Đăng ký
        │   │   └── 📂 Profile/            # Quản lý hồ sơ
        │   └── 📂 admin/                  # 🛡️ Trang quản trị
        │       ├── 📄 DashboardPage.tsx
        │       ├── 📄 ProductsPage.tsx
        │       ├── 📄 CategoriesPage.tsx
        │       ├── 📄 BrandsPage.tsx
        │       ├── 📄 OrdersPage.tsx
        │       ├── 📄 ReviewsPage.tsx
        │       ├── 📄 UsersPage.tsx
        │       ├── 📄 PromotionsPage.tsx
        │       └── 📄 ...
        │
        ├── 📂 components/                 # 🧩 Components tái sử dụng
        ├── 📂 services/                   # 📡 API Services (Axios)
        ├── 📂 context/                    # 🔄 React Context
        ├── 📂 hooks/                      # 🪝 Custom Hooks
        ├── 📂 routes/                     # 🛤️ Định tuyến & Protected Routes
        ├── 📂 types/                      # 📝 TypeScript Types
        ├── 📂 utils/                      # 🔧 Tiện ích
        ├── 📂 constants/                  # 📌 Hằng số
        ├── 📂 lib/                        # 📚 Thư viện dùng chung
        └── 📂 styles/                     # 🎨 CSS Styles
```

---

## 🚀 Cài Đặt Và Chạy Dự Án

### 📋 Yêu cầu hệ thống

| Yêu cầu         | Chi tiết                                   |
| --------------- | ------------------------------------------ |
| **Node.js**     | >= 18.x                                    |
| **npm**         | >= 9.x (hoặc yarn)                         |
| **MongoDB**     | >= 6.0 (local hoặc MongoDB Atlas)          |
| **IDE**         | VS Code (khuyến nghị)                      |
| **Trình duyệt** | Chrome, Firefox, Edge (phiên bản mới nhất) |

### 📝 Các bước cài đặt

#### Bước 1️⃣ — Clone Repository

```bash
git clone <url-repo>
cd TL-Website
```

#### Bước 2️⃣ — Cài đặt Backend

```bash
cd backend
npm install
```

#### Bước 3️⃣ — Cài đặt Frontend

```bash
cd frontend
npm install
```

#### Bước 4️⃣ — Thiết lập biến môi trường

**Backend** — Tạo file `.env` trong thư mục `backend/` theo mẫu `.env.example`:

```env
# Authentication
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_APP_PASSWORD=your_email_app_password

# URLs
CLIENT_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000

# Server
PORT=3000

# Database
MONGODB_URI=mongodb://localhost:27017/liquidshop

# VNPay
VNP_TMN_CODE=your_vnpay_tmn_code
VNP_HASH_SECRET=your_vnpay_hash_secret
VNP_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNP_RETURN_URL=http://localhost:5173/payment/vnpay-return

# MoMo
MOMO_PARTNER_CODE=your_momo_partner_code
MOMO_ACCESS_KEY=your_momo_access_key
MOMO_SECRET_KEY=your_momo_secret_key
MOMO_ENDPOINT=https://test-payment.momo.vn/v2/gateway/api/create

# Bank QR
BANK_ID=your_bank_id
ACCOUNT_NO=your_account_number
TEMPLATE=compact2

# AI Chatbot
GROQ_API_KEY=your_groq_api_key
```

**Frontend** — Tạo file `.env` trong thư mục `frontend/` theo mẫu `.env.example`.

#### Bước 5️⃣ — Khởi chạy MongoDB

```bash
# Nếu dùng MongoDB local
mongod --dbpath ./data

# Hoặc sử dụng MongoDB Atlas (cập nhật MONGODB_URI trong .env)
```

#### Bước 6️⃣ — Khởi động dự án

```bash
# Terminal 1 — Khởi động Backend
cd backend
npm start

# Terminal 2 — Khởi động Frontend
cd frontend
npm run dev
```

---

## 🗄 Cấu Trúc Cơ Sở Dữ Liệu MongoDB

Ứng dụng sử dụng **MongoDB** với **Mongoose ODM**, bao gồm các collection sau:

### 📊 Sơ đồ Database

```
🍃 MongoDB Database (liquidshop)
│
├── 📁 users                               # Người dùng
│   └── 📄 {_id}
│       ├── name: String                    # Họ tên
│       ├── email: String (unique)          # Email đăng nhập
│       ├── password: String (hashed)       # Mật khẩu (bcrypt)
│       ├── role: String                    # Vai trò ("customer" | "admin")
│       └── timestamps                      # Ngày tạo / cập nhật
│
├── 📁 products                             # Sản phẩm
│   └── 📄 {_id}
│       ├── name: String                    # Tên sản phẩm
│       ├── description: String             # Mô tả chi tiết
│       ├── price: Number                   # Giá gốc
│       ├── salePrice: Number               # Giá khuyến mãi
│       ├── images: [String]                # Danh sách URL hình ảnh
│       ├── category: ObjectId → categories # Danh mục
│       ├── brand: ObjectId → brands        # Thương hiệu
│       ├── stock: Number                   # Số lượng tồn kho
│       ├── rating: Number                  # Điểm đánh giá TB
│       ├── numReviews: Number              # Số lượt đánh giá
│       ├── specifications: Object          # Thông số kỹ thuật
│       └── timestamps
│
├── 📁 categories                           # Danh mục sản phẩm
│   └── 📄 {_id}
│       ├── name: String                    # Tên danh mục
│       ├── description: String             # Mô tả
│       └── parent: ObjectId → categories   # Danh mục cha (nếu có)
│
├── 📁 brands                               # Thương hiệu
│   └── 📄 {_id}
│       ├── name: String                    # Tên thương hiệu
│       └── logo: String                    # URL logo
│
├── 📁 carts                                # Giỏ hàng
│   └── 📄 {_id}
│       ├── user: ObjectId → users          # Người dùng
│       ├── items: [{                       # Danh sách sản phẩm
│       │     product: ObjectId → products
│       │     quantity: Number
│       │   }]
│       └── timestamps
│
├── 📁 orders                               # Đơn hàng
│   └── 📄 {_id}
│       ├── user: ObjectId → users          # Người đặt
│       ├── items: [{...}]                  # Sản phẩm đã đặt
│       ├── totalPrice: Number              # Tổng tiền
│       ├── shippingAddress: Object         # Địa chỉ giao hàng
│       ├── paymentMethod: String           # Phương thức thanh toán
│       ├── status: String                  # Trạng thái đơn hàng
│       └── timestamps
│
├── 📁 payments                             # Thanh toán
│   └── 📄 {_id}
│       ├── order: ObjectId → orders        # Đơn hàng
│       ├── method: String                  # VNPay / MoMo / Bank / COD
│       ├── amount: Number                  # Số tiền
│       ├── status: String                  # Trạng thái
│       └── transactionId: String           # Mã giao dịch
│
├── 📁 reviews                              # Đánh giá sản phẩm
│   └── 📄 {_id}
│       ├── user: ObjectId → users          # Người đánh giá
│       ├── product: ObjectId → products    # Sản phẩm
│       ├── rating: Number                  # Số sao (1-5)
│       ├── comment: String                 # Nội dung
│       └── timestamps
│
├── 📁 wishlists                            # Danh sách yêu thích
│   └── 📄 {_id}
│       ├── user: ObjectId → users
│       └── products: [ObjectId → products]
│
├── 📁 promotions                           # Khuyến mãi
│   └── 📄 {_id}
│       ├── code: String                    # Mã khuyến mãi
│       ├── discount: Number                # Giá trị giảm
│       ├── type: String                    # Loại (% hoặc cố định)
│       ├── startDate: Date                 # Ngày bắt đầu
│       └── endDate: Date                   # Ngày kết thúc
│
├── 📁 feedbacks                            # Phản hồi khách hàng
│   └── 📄 {_id}
│       ├── user: ObjectId → users
│       ├── subject: String
│       ├── message: String
│       └── timestamps
│
└── 📁 chatsessions                         # Phiên chat AI
    └── 📄 {_id}
        ├── user: ObjectId → users
        ├── messages: [{role, content}]
        └── timestamps
```

---

## 📚 Thông Tin Đồ Án

<div align="center">

| Thông tin                   | Chi tiết                    |
| --------------------------- | --------------------------- |
| 📘 **Môn học**              | Nhập môn Công nghệ Phần mềm |
| 🏫 **Trường**               | HCMUS                       |
| 🏛️ **Khoa**                 | Công nghệ Thông tin         |
| 👨‍🏫 **Giảng viên hướng dẫn** | Mai Anh Tuấn                |
| 📅 **Học kỳ**               | 1                           |
| 📆 **Năm học**              | 2025 - 2026                 |

</div>

---

## 👥 Thông Tin Nhóm Thực Hiện

### 🏷️ Team Liquid

| STT | Họ và Tên         |   MSSV   |    Vai trò     |
| :-: | ----------------- | :------: | :------------: |
|  1  | Nguyễn Thái Hoàng | 23120265 |  Nhóm trưởng   |
|  2  | Phạm Vương Quân   | 23120341 | Lập trình viên |
|  3  | Nguyễn Minh Quân  | 23120339 | Lập trình viên |
|  4  | Nguyễn Hoàng Phi  | 23120320 | Lập trình viên |
|  5  | Lê Quốc Huy       | 23120272 | Lập trình viên |

---

## 📊 Trạng Thái Dự Án

<div align="center">

| Module                                  |  Trạng thái   | Tiến độ |
| --------------------------------------- | :-----------: | :-----: |
| 🔐 Authentication (Đăng nhập/Đăng ký)   | ✅ Hoàn thành |  100%   |
| 🏷️ Danh sách & Chi tiết sản phẩm        | ✅ Hoàn thành |  100%   |
| 🔍 Tìm kiếm & Bộ lọc sản phẩm           | ✅ Hoàn thành |  100%   |
| 🛒 Giỏ hàng                             | ✅ Hoàn thành |  100%   |
| ❤️ Wishlist                             | ✅ Hoàn thành |  100%   |
| 📦 Quản lý đơn hàng                     | ✅ Hoàn thành |  100%   |
| 💳 Thanh toán (VNPay, MoMo, QR Banking) | ✅ Hoàn thành |  100%   |
| ⭐ Đánh giá & Bình luận                 | ✅ Hoàn thành |  100%   |
| 🤖 AI Chatbot (Groq)                    | ✅ Hoàn thành |  100%   |
| 🎫 Khuyến mãi & Mã giảm giá             | ✅ Hoàn thành |  100%   |
| 👤 Quản lý hồ sơ                        | ✅ Hoàn thành |  100%   |
| 📊 Admin Dashboard                      | ✅ Hoàn thành |  100%   |
| 🛡️ Admin Panel (CRUD)                   | ✅ Hoàn thành |  100%   |
| 📧 Email thông báo                      | ✅ Hoàn thành |  100%   |

</div>

---

## 🔮 Hướng Phát Triển Tương Lai

- [ ] 📱 **Responsive hoàn chỉnh** — Tối ưu giao diện cho tablet và mobile
- [ ] 🔔 **Push Notification** — Thông báo đẩy về trạng thái đơn hàng
- [ ] 📊 **Analytics nâng cao** — Thống kê hành vi người dùng, sản phẩm bán chạy
- [ ] 🌐 **Đa ngôn ngữ** — Hỗ trợ tiếng Anh cho khách quốc tế
- [ ] 🔄 **So sánh sản phẩm** — Cho phép so sánh thông số kỹ thuật giữa các sản phẩm
- [ ] 📸 **Tìm kiếm bằng hình ảnh** — Tìm sản phẩm tương tự qua hình ảnh
- [ ] 🚚 **Theo dõi vận chuyển** — Tích hợp API đơn vị vận chuyển (GHN, GHTK)
- [ ] 💬 **Live Chat** — Chat trực tiếp với nhân viên hỗ trợ
- [ ] 🏷️ **Flash Sale** — Tính năng giảm giá theo thời gian giới hạn
- [ ] ⭐ **Hệ thống điểm thưởng** — Tích điểm mua hàng, đổi quà

---

## 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép **MIT License**.

```
MIT License

Copyright (c) 2025 Team Liquid - LiquidShop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### ⭐ Nếu dự án hữu ích, hãy cho chúng tôi một Star! ⭐

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Made in Vietnam](https://img.shields.io/badge/Made%20in-🇻🇳%20Vietnam-red?style=for-the-badge)

**© 2025 Team Liquid — LiquidShop. All rights reserved.**

[⬆ Về đầu trang](#-liquidshop---website-bán-hàng-công-nghệ)

</div>
