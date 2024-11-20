# Nova - Your One-Stop Shop for IT Products

Nova is a cutting-edge e-commerce platform specializing in IT products, including gadgets, PC parts, mobile phones, headphones, and more. Built with the latest technologies, Nova ensures a seamless shopping experience, from product selection to checkout.

## Features

- **Wide Selection of Products**: Browse through a diverse range of IT products.
- **Customizable PC Builds**: Create your dream PC by selecting parts tailored to your needs.
- **Secure Payment Gateway**: Powered by Stripe, ensuring safe and hassle-free transactions.
- **User Authentication**: Account creation and secure login with OTP verification via Resend.
- **Modern UI**: Intuitive design built using Shadcn for a smooth user experience.
- **Email Notifications**: Stay updated on your orders and activities with email alerts.
- **Performance-Optimized**: Leveraging Next.js 15, Drizzle ORM, and NeonDB for a robust and fast platform.

---

## Tech Stack

| Technology      | Icon                                                                                                       | Purpose                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Next.js 15**  | ![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white)                          | Frontend framework for performance and SEO. |
| **Drizzle ORM** | ![Drizzle ORM](https://img.shields.io/badge/Drizzle-6051D5?logo=data:image/png;base64,...&logoColor=white) | Database management and query building.     |
| **NeonDB**      | ![NeonDB](https://img.shields.io/badge/NeonDB-3DDC84?logo=neon&logoColor=white)                            | Reliable database solution for storage.     |
| **Stripe**      | ![Stripe](https://img.shields.io/badge/Stripe-008CDD?logo=stripe&logoColor=white)                          | Secure payment processing.                  |
| **Shadcn**      | ![Shadcn](https://img.shields.io/badge/Shadcn-000000?&logoColor=white)                                     | UI components for a sleek design.           |
| **Auth.js**     | ![Auth.js](https://img.shields.io/badge/Auth.js-F24E1E?logo=auth0&logoColor=white)                         | Authentication library for secure login.    |
| **Resend**      | ![Resend](https://img.shields.io/badge/Resend-FF6A00?logo=gmail&logoColor=white)                           | Email service for OTP and notifications.    |

---

## Installation

Follow these steps to set up the Nova e-commerce platform locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **NeonDB** account (for database setup)
- **Stripe** account (for payment integration)
- **Resend** account (for email services)

---

### 1. Clone the Repository

```bash
git clone this-repo
```

### 2. Install Dependencies

```bash
npm i or yarn install
```

### 3. Environment Variables

Create a <strong>.env</strong> file in the root directory and configure the following variables:

```env
DATABASE_URL=your-neondb-url
NEXTAUTH_SECRET=your-auth-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
RESEND_API_KEY=your-resend-api-key
```

### 4. Database Setup

Run the database migrations using Drizzle ORM:

```bash
npm run db:migrate
```

### 5. Database Setup

Start the development server:

```bash
npm run dev
```
