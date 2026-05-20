# 🌐 EventSphere — Event Management & Ticketing Platform

> The all-in-one platform for organising extraordinary events and discovering unforgettable experiences.

![EventSphere Banner](https://via.placeholder.com/1200x400/0a0e1a/a78bfa?text=EventSphere)

---

## 🚀 Problem Statement

Managing events end-to-end — from creation to check-in — is fragmented across too many tools. EventSphere unifies event creation, ticketing, payments, QR-based check-in, and analytics into a single, beautiful platform.

---

## 📦 Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React 18 + Vite, React Router v6     |
| Styling     | Vanilla CSS (custom design system)   |
| Backend     | Node.js + Express *(coming soon)*    |
| Database    | MongoDB + Mongoose *(coming soon)*   |
| Auth        | JWT *(coming soon)*                  |
| Payments    | Razorpay Sandbox *(coming soon)*     |
| Real-time   | Socket.IO *(coming soon)*            |
| AI          | OpenAI gpt-4o-mini *(coming soon)*   |
| Images      | Cloudinary *(coming soon)*           |
| QR Codes    | qrcode + qrcode.react                |

---

## ✨ Features (Completed)

- [x] Beautiful Login / Sign-up page with animated gradient background
- [x] Role selection (Attendee / Organiser) during registration
- [x] Password strength indicator
- [x] Animated tab switcher (Login ↔ Sign-up)
- [x] Social login buttons (Google / GitHub — UI ready)
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Glassmorphic card design with orb background animations
- [x] Rotating testimonial carousel on brand panel

## 🔜 Coming Soon

- [ ] JWT authentication + protected routes
- [ ] Organiser dashboard (event creation, analytics, check-in)
- [ ] Attendee dashboard (tickets, wishlist, notifications)
- [ ] Razorpay payment integration
- [ ] QR code generation per ticket
- [ ] Live check-in with Socket.IO
- [ ] AI event description generator
- [ ] Smart schedule builder
- [ ] Event recommendations

---

## 🛠 Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/Shreyam007/EventSphere.git
cd EventSphere

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 🔐 Test Accounts *(coming soon)*

| Role       | Email                      | Password    |
|------------|----------------------------|-------------|
| Organiser  | organiser@eventsphere.io   | Test@12345  |
| Attendee   | attendee@eventsphere.io    | Test@12345  |

---

## 💳 Razorpay Test Card *(coming soon)*

| Field    | Value                |
|----------|----------------------|
| Card No  | 4111 1111 1111 1111  |
| Expiry   | Any future date      |
| CVV      | Any 3 digits         |
| OTP      | 1234                 |

---

## 👥 Team

| Name         | Role                  |
|--------------|-----------------------|
| Shreyam      | Full-Stack Developer  |

---

## 🌐 Live Link

> Coming soon — deploying on Vercel (frontend) + Railway (backend)

---

## ⚠️ Known Limitations

- Backend and database integration are not yet implemented
- AI features require an OpenAI API key
- Razorpay integration requires sandbox credentials
