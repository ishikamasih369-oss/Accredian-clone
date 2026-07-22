# Accredian Enterprise Clone

A modern, responsive enterprise learning platform built with **Next.js 16**, **React**, and **Tailwind CSS**. This project recreates an enterprise landing page with dynamic API integration, reusable components, and a clean, professional user interface.

---

## 🚀 Live Demo
**Live Website:** https://accredian-clone-eta-woad.vercel.app/

**GitHub Repository:** https://github.com/ishikamasih369-oss/Accredian-clone

---

## 📌 Features

- Modern responsive landing page
- Enterprise-focused UI/UX
- Built with Next.js App Router
- Reusable React components
- Tailwind CSS styling
- Dynamic API integration
- Contact form with POST API
- Company logos section
- Learning programs section
- Learning domains
- Learning framework
- Statistics section
- Testimonials
- FAQ accordion
- Fully responsive design

---

## 🛠 Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Next.js API Routes
- React Icons
- Vercel

---

## 📂 Project Structure

```
app/
├── api/
│   ├── homepage/
│   └── contact/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Stats/
│   ├── Programs/
│   ├── Domains/
│   ├── Framework/
│   ├── Companies/
│   ├── WhyChoose/
│   ├── Testimonials/
│   ├── FAQ/
│   ├── Contact/
│   └── Footer/
├── types/
├── globals.css
└── layout.tsx
```

---

## 🔌 API Endpoints

### GET `/api/homepage`

Returns mock data for:

- Companies
- Testimonials
- FAQs

Example:

```json
{
  "companies": [],
  "testimonials": [],
  "faqs": []
}
```

---

### POST `/api/contact`

Accepts contact form submissions.

Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Pvt Ltd"
}
```

Example Response

```json
{
  "success": true,
  "message": "Thank you! We will contact you soon."
}
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/accredian-clone.git
```

Go to the project folder

```bash
cd accredian-clone
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build

```bash
npm run build
```

---

## 🎯 Assignment Requirements Covered

- ✅ Next.js App Router
- ✅ React Functional Components
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ API Integration
- ✅ Reusable Components
- ✅ Enterprise Landing Page
- ✅ Contact Form
- ✅ Production Build
- ✅ Vercel Deployment

---

## 🤖 AI Usage

AI assistance was used during the development process to:

- Plan the project structure
- Improve component organization
- Refine UI/UX design
- Debug build issues
- Optimize Tailwind CSS styling
- Generate reusable component patterns
- Improve API integration

All code was reviewed, integrated, tested, and customized before deployment.

---

## 📷 Screenshots

Folder Added

---

## 👩‍💻 Author

**Ishika Masih**

GitHub: https://github.com/ishikamasih369-oss

---

## 📄 License

This project was created for an internship assignment and educational purposes.
