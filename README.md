# 📰 News App

A modern **News App** built with **React Native** and **Expo** that fetches the latest news using the **News API**. The app features a clean UI, category-wise news browsing, a splash screen, and a navigation drawer for a smooth user experience.

---

## 🚀 Features

* 📱 Built with React Native & Expo
* 📰 Fetches live news using News API
* ✨ Beautiful Splash Screen
* 🏠 Home Screen with top headlines
* 📂 Category-wise news browsing
* ☰ Navigation Drawer
* 🔄 Pulls real-time news data
* 📱 Responsive and clean UI

---

## 📱 Screens

### 1. Splash Screen

* Displays the app logo
* Redirects to the Home Screen after loading

### 2. Home Screen

* Shows the latest top headlines
* Drawer navigation for easy access
* News cards with image, title, and description

### 3. Category Screen

* Browse news by different categories
* Fetches category-specific articles from News API

---

## 🛠️ Tech Stack

* React Native
* Expo
* JavaScript
* Expo Router
* React Navigation (Drawer)
* News API

---

## 📂 Project Structure

```
News-App
│── app/
│   ├── index.js
│   ├── home.js
│   ├── category.js
│   └── _layout.js
│
│── components/
│   ├── NewsCard.js
│   ├── Header.js
│   └── Loader.js
│
│── assets/
│   ├── images/
│   └── icons/
│
│── services/
│   └── newsApi.js
│
│── package.json
└── README.md
```

---

## 🔑 API

This project uses the **News API** to fetch live news.

Get your free API key from:

https://newsapi.org/

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/Raopriyanshuu/News-App.git
```

Go to the project folder

```bash
cd News-App
```

Install dependencies

```bash
npm install
```

Start the Expo development server

```bash
npx expo start
```

---

## 📸 App Flow

```
Splash Screen
        │
        ▼
Home Screen
        │
        ├── Drawer Navigation
        │
        ▼
Category Screen
```

---

## 🎯 Future Improvements

* Search news
* Bookmark articles
* Dark Mode
* Country selection
* Share news
* Offline caching
* Pagination

---

## 👨‍💻 Author

**Priyanshu Raj**

If you like this project, don't forget to ⭐ the repository!
