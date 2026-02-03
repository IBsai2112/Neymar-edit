⚽ Neymar — Interactive Animation Website

A high-performance, animation-driven website dedicated to Neymar Jr., showcasing his journey, playing style, and legacy through cinematic animations and smooth transitions.

This project focuses on advanced frontend animation, delivering an immersive experience where every interaction feels alive — from page transitions to scroll-based visuals and hover effects.

✨ Key Highlights

🎬 Full-page cinematic animations

🔁 Smooth animated route transitions

🖱️ Interactive hover effects on every element

🧭 Scroll-based storytelling

⚡ High-performance GSAP animations

🎨 Minimal, modern UI inspired by Neymar’s flair

🧠 Concept

This website is designed to visually represent Neymar’s journey and playing style:

His career progression

His creativity, flair, and speed

His impact on modern football

Animations are used not just for visuals, but to tell a story — making the experience feel dynamic and emotional rather than static.

🛠️ Tech Stack

React – Component-based UI

Vite – Fast build tool and dev server

GSAP (GreenSock) – Core animation engine

@gsap/react – React-friendly GSAP integration

React Router DOM – Client-side routing with animated transitions

Tailwind CSS – Utility-first styling

JavaScript (ES6+)

🎞️ Animations Overview
🔄 Route Transitions

Custom GSAP timelines trigger on every route change

Smooth entrance and exit animations between pages

No flicker, no delay — instant transitions

🖱️ Hover Animations

Every interactive element responds with motion

Enhances user feedback and engagement

📜 Scroll Animations

Scroll-driven image sequences

Progressive reveals and motion effects

Smooth synchronization with scroll position

⚡ Performance Optimized

useGSAP with proper scoping

No layout-thrashing animations

GPU-friendly transforms

No unnecessary re-renders
```bash
src/
│
├── components/
│   ├── Stairs.jsx        # Route transition animation
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Agence.jsx
│   └── Projects.jsx
│
├── assets/
│   ├── images/
│   └── videos/
│
├── App.jsx
├── main.jsx
└── index.css
```

🚀 Getting Started
1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/neymar-animation-website.git
```


2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Run Development Server
```bash
npm run dev
```


The site will be available at:

http://localhost:5173

📌 Notes

This project is animation-focused, not content-heavy

Large media files are intentionally excluded from Git

Best viewed on desktop for full animation impact

Can be extended with:

ScrollTrigger timelines

3D effects

Canvas/WebGL animations

👤 Author

Sainjal Kalnekar

⭐ Acknowledgements

GSAP for the powerful animation engine

Neymar Jr. for the inspiration

Modern football culture & motion design trends