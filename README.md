
# 🖼️ AI Text-to-Image Generator

Turn your imagination into art! 🎨  
This project is a **MERN-based Text-to-Image Generator** that allows users to generate images from text prompts, buy credits securely, and manage their profile with authentication.  

---

## 🚀 Features
- ✍️ **Prompt-to-Image Generation** using [ClipDrop API](https://clipdrop.co/).
- 🔐 **User Authentication** with JWT tokens.
- 💳 **Buy Credits** seamlessly using Razorpay integration.
- 📊 **Credits Management System** (users spend credits for each image generated).
- 🖼️ **Gallery** to view all previously generated images.
- 🛡️ **Secure Backend** with Node.js, Express, and MongoDB.

---

## 🏗️ Tech Stack
**Frontend**
- ⚛️ React (with Tailwind CSS for UI styling)
- 🔄 Axios for API calls

**Backend**
- 🟢 Node.js + Express
- 🍃 MongoDB (Mongoose for schema & queries)
- 🔑 JWT (JSON Web Tokens) for authentication

**Integrations**
- 🎨 ClipDrop API → Text → Image
- 💳 Razorpay → Credit Purchases

---

## 📂 Project Structure
```

project-root/
│── client/             # React frontend
│── server/             # Backend (Express, MongoDB)
│   ├── config/         # DB and API configs
│   ├── controller/     # Route controllers
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routes
│   ├── server.js       # Main server entry
│── .gitignore          # Ignored files (.env, node\_modules, etc.)
│── package.json        # Dependencies
│── README.md           # You are here 💡

````

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/text-to-image-generator.git
cd text-to-image-generator
````

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `/server` with:

```
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_secret_key
CLIPDROP_API_KEY=your_clipdrop_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Start backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 💡 Usage

1. 🔑 **Sign up / Log in** with JWT authentication.
2. 💳 **Buy credits** via Razorpay payment gateway.
3. ✍️ **Enter a text prompt** and generate AI-powered images using ClipDrop.
4. 🖼️ **Save & view** your generated art in the gallery.
5. 📉 Credits decrease with every image generation.

---


## 🔒 Security

* `.env` file (API keys & secrets) is **ignored in Git**.
* JWT authentication ensures secure user access.
* Razorpay handles payments securely.

---

## 🛠️ Future Improvements

* 🪄 Add support for multiple AI models (e.g., Stable Diffusion).
* 🎨 Add option to **enhance or upscale images**.
* 🌍 Deploy with Docker & CI/CD pipeline.
* 📤 Allow users to **share images on social media**.

---

## 🤝 Credits

This project was built by following the tutorial from **[GreatStack YouTube Channel](https://www.youtube.com/@GreatStackDev)** ❤️.
A big thanks to them for the amazing content and guidance!

---

## 🧑‍💻 Author

👩‍💻 **Riya Suthar**
📌 4th Year IT Student | MERN Stack Developer | Passionate about AI & Web Development

---

## ⭐ Support

If you like this project, please give it a **star ⭐ on GitHub** — it really helps!
