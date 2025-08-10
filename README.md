# 🎬 GhibliVault

A responsive React application showcasing Studio Ghibli films and characters using the [Studio Ghibli API](https://ghibliapi.vercel.app/).  
Features smooth navigation, dynamic detail pages, and a clean Tailwind CSS UI.

---

## ✨ Features

- **Film & People Lists** – Browse a curated set or the complete collection.  
- **Show More / Show Less** – Load additional content dynamically.  
- **Individual Detail Pages** – View full info on any film or character.  
- **Reusable Components** – FilmList and PeopleList are fully reusable with a `limit` prop.  
- **Responsive UI** – Styled entirely with Tailwind CSS for a modern, clean look.  
- **Client-side Routing** – Implemented with React Router DOM for smooth page transitions.  

---

## 🚀 Tech Stack

- **React** – Component-based UI  
- **React Router DOM** – Routing and navigation  
- **Tailwind CSS** – Utility-first styling  
- **Framer Motion** – Subtle animations  
- **Studio Ghibli API** – External data source  

---

## 📂 Project Structure

```text
src/
  components/
    FilmList.jsx
    FilmCard.jsx
    PeopleList.jsx
    PeopleCard.jsx
    Header.jsx
    Footer.jsx
  pages/
    HomePage.jsx
    AllFilms.jsx
    AllPeople.jsx
    FilmDetail.jsx
    PersonDetail.jsx
  App.jsx
  main.jsx

```



---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```
   git clone https://github.com/createdbyamir/ghiblivault.git
   cd ghiblivault
   ```

2. **Install dependencies**
    ```
    npm install
    ```

3. **Run the development server**
    ```
    npm run dev
    ```

4. **Open in browser**
    ```
    http://localhost:5173
    ```

## 💡 How I Built This

This project started as a way to practice React fundamentals and ended up becoming a portfolio-ready showcase of my skills.

### Key Learning Goals
- Understanding component reusability by creating **FilmList** and **PeopleList** that work with dynamic limits.
- Implementing **React Router DOM** for both list pages and individual detail pages.
- Managing API data fetching with `useEffect` and `useState`, including loading states and error handling.
- Designing with **Tailwind CSS** for a modern, responsive UI.
- Using **Framer Motion** to add small animations for a polished feel.

### Challenges Solved
- Implemented a **Show More / Show Less** feature without performance issues.
- Structured routes so that both films and people could have their own detail pages.
- Refactored code to remove hardcoded titles, making components more flexible.

This project reflects my growing skill in React, routing, styling, and working with APIs, and is an example of code I can maintain, extend, and improve in future iterations.


## 📌 Future Improvements

- Add search and filter functionality
- Display related films on character detail pages
- Improve accessibility (ARIA labels, keyboard navigation)
- Dark mode toggle

## 🖼 Credits

- **Data** – Studio Ghibli API -  https://ghibliapi.vercel.app/