# 🏠 Find Roommate — A Roommate Matching Platform

A responsive and user-friendly web application to help individuals find compatible roommates based on location, lifestyle, and preferences. Built using React, Firebase, TailwindCSS, MongoDB, and Express.js.

🔗 **Live Website:** [https://roommate-finder-5dc65.web.app/](https://roommate-finder-5dc65.web.app/)

---

## 🚀 Key Features

- 🔍 **Search & Browse Listings:** Easily search and filter listings by preferences.
- 🏠 **Add & Manage Posts:** Authenticated users can add, update, or delete roommate posts.
- 💬 **Dynamic Details Page:** Users can like posts to reveal contact numbers and see interest count.
- 🔒 **Protected Routes:** Add, My Listings, and Details pages are protected based on login state.
- 🌙 **Dark/Light Mode Toggle:** Switch themes effortlessly for comfortable viewing.
- 📱 **Responsive Design:** Optimized for mobile, tablet, and desktop experiences.
- 💡 **Google Login Integration:** Easy login via Google or email/password.
- ✅ **Real-time Feedback:** Toast/SweetAlert for all user actions (success/error).
- ❗ **404 Page & Loaders:** Custom error page and loading indicators for better UX.

---

## 🛠 Tech Stack

### 🌐 Frontend:
- React
- React Router
- Firebase Authentication
- TailwindCSS + DaisyUI
- React Icons
- SweetAlert2
- React Simple Typewriter
- React Awesome Reveal

### 🧪 Backend:
- Express.js
- MongoDB
- dotenv
- cors

---

## 📂 Pages & Functionalities

### 🔐 Authentication
- Email/password and Google login/signup.
- Password strength validation (uppercase, lowercase, 6+ chars).
- Protected routes redirect to login if user is unauthenticated.

### 🧾 Add to Find Roommate (Private Route)
- Form includes: title, location, rent, room type, preferences, contact, availability.
- User name & email are read-only and auto-filled.

### 📋 My Listings (Private Route)
- Users can only see, update, or delete their own posts.

### 🛠 Update Page
- Users can update their listings using a form or optional modal.

### 📄 Details Page (Private Route)
- View full post information.
- Users can like posts (can’t like own).
- Contact info reveals only after liking.

### 📑 Browse Listings
- Table view of all public roommate listings with a “See More” option.

### 🏠 Home Page
- Banner with slider.
- Featured roommate section (6 posts filtered by availability).
- 2 meaningful extra sections.
- Persistent navbar & footer (except on 404 page).

### ❌ 404 Page
- Custom Not Found page with navigation.

### ⏳ Loading States
- Spinner during data fetch or route transitions.

---

## ⚙️ Project Setup & Hosting

- 🔐 Environment Variables:
  - Firebase config & MongoDB URI stored in `.env`
- 🌍 Hosting:
  - Client: Firebase Hosting
  - Server: Vercel

---

## 📌 Project Guidelines Followed

- ✅ 15+ commits on client and 8+ on server.
- ✅ Used meaningful content instead of lorem ipsum.
- ✅ Unique, non-copied design.
- ✅ No broken routes or reload issues on protected pages.
- ✅ Responsive UI on all screen sizes.
- ✅ Error/success messages via toast/alert.

---

## 📣 Updates & Known Issues

> ✅ **Update:** Like feature allows multiple likes from others, but prevents self-like as per assignment rules.  
> ✅ Contact number now shows only after liking a post.

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [MongoDB](https://www.mongodb.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [React Awesome Reveal](https://react-awesome-reveal.morello.dev/)

---

> Developed by **Mazedul Islam Nayem**
