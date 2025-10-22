# 🌐 My Portfolio

A modern, responsive **React + Vite** portfolio website showcasing my projects, skills, and contact form powered by **EmailJS**.

---

## 🚀 Features

* Fully responsive layout (mobile, tablet, and desktop)
* Animated navigation and smooth scrolling
* Projects and skill icons with tooltips
* Functional contact form using **EmailJS**
* Environment variables for secure deployment
* Deployed easily via **Vercel**

---

## 🧩 Tech Stack

* **Frontend:** React + Vite
* **Styling:** CSS
* **Email Service:** EmailJS
* **Deployment:** Vercel

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create an environment file

Create a `.env` file in the root of your project:

```bash
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

⚠️ Never share these keys publicly.

### 4️⃣ Start the development server

```bash
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

### 📧 EmailJS Setup

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Obtain the following:

   * Service ID
   * Template ID
   * Public Key
3. Add them to your `.env` file as shown above.
4. Ensure your form fields match your EmailJS template variables:

```html
<input type="text" name="user_name" />
<input type="email" name="user_email" />
<textarea name="message"></textarea>
```

---

### 🚀 Deployment (Vercel)

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. Deploy on Vercel:

   * Go to [Vercel](https://vercel.com)
   * Import your GitHub repository
   * Add your environment variables in **Project Settings → Environment Variables**
   * Vercel will automatically build and deploy your site



## 🧑‍💻 Author

Ajaj Ahamed Thakurai
🔗 GitHub: [https://github.com/ajajahamed](https://github.com/ajajahamed)
🔗 LinkedIn: [https://linkedin.com/in/ajajahamed](https://linkedin.com/in/ajajahamed)

---

## 🪪 License

This project is open source.

---

🌐 Live Demo: [https://myportfolio.vercel.app](https://myportfolio.vercel.app)
