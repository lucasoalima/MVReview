<h1 align="center">MV Review — Movie Review App</h1>

<p align="center">
  Full-stack movie review application: browse a paginated movie catalog, rate films
  (1–5 stars tied to a user e-mail) and see the running average score. Built with
  <b>Java + Spring Boot</b> (REST API) and <b>React + TypeScript + Bootstrap</b> (SPA).
  A personal project to practice full-stack development.
</p>

<p align="center">
  <a href="https://mvavaliator.netlify.app"><b>🔗 Live demo (UI only — API offline)</b></a> &middot;
  <img src="https://img.shields.io/badge/Java-17-orange" alt="Java">
  <img src="https://img.shields.io/badge/Spring_Boot-3-brightgreen" alt="Spring Boot">
  <img src="https://img.shields.io/badge/React-17-blue" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-4-3178c6" alt="TypeScript">
</p>

> ℹ️ **About the demo:** the Netlify frontend loads, but its REST API was hosted on Heroku's
> free tier (discontinued in Nov/2022), so the online catalog shows empty ("1 de 0"). The
> screenshot below is the app working with its seeded database — run the backend locally
> (steps below) to reproduce it.

---

## 📸 Preview

![MV Review listing](https://user-images.githubusercontent.com/75635849/160969745-91c9fd22-066e-4a5f-88ac-dd7553a2a479.png)

---

## ✨ Features
- Paginated movie catalog with poster, title, average score and number of ratings.
- Rate a movie: submit an e-mail + score (1–5), which updates the movie's average.
- Star rating component (full / half / empty stars).
- Responsive layout (Bootstrap grid).
- Seeded **H2** database by default — no external DB needed to run locally.

---

## 🛠️ Tech stack
**Backend:** Java 17, Spring Boot (Web, Data JPA, Security), H2 (local) / PostgreSQL (prod), Maven.
**Frontend:** React 17, TypeScript, React Router, Axios, Bootstrap 5.

<p align="center">
   <a href="https://www.oracle.com/br/java/"><img src="images/java.svg" alt="Java" width="30" height="30"/></a>
   <a href="https://spring.io/"><img src="images/spring.svg" alt="Spring" width="30" height="30"/></a>
   <a href="https://www.typescriptlang.org/"><img src="images/typescript.svg" alt="TypeScript" width="30" height="30"/></a>
   <a href="https://react.dev/"><img src="images/react.svg" alt="React" width="30" height="30"/></a>
   <a href="https://getbootstrap.com/"><img src="images/bootstrap.svg" alt="Bootstrap" width="30" height="30"/></a>
   <a href="https://www.postgresql.org/"><img src="images/postgresql.svg" alt="PostgreSQL" width="30" height="30"/></a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="images/javascript.svg" alt="JavaScript" width="30" height="30"/></a>
   <a href="https://www.postman.com/"><img src="images/postman.svg" alt="Postman" width="30" height="30"/></a>
   <a href="https://git-scm.com/"><img src="images/git.svg" alt="Git" width="30" height="30"/></a>
</p>

---

## 🚀 How to run locally

### Prerequisites
- Java 17+ and Maven
- Node.js 18+

### 1. Backend (Spring Boot — port 8080)
```bash
cd backend
./mvnw spring-boot:run          # Windows: .\mvnw.cmd spring-boot:run
```
Runs with the default **test** profile: an in-memory **H2** database seeded from
`src/main/resources/import.sql` (H2 console at `http://localhost:8080/h2-console`).
To use PostgreSQL instead, configure `application-dev.properties` and start with
`-DAPP_PROFILE=dev`.

### 2. Frontend (React — port 3000)
```bash
cd frontend
npm install
# optional: point to a different API (defaults to http://localhost:8080)
#   echo "REACT_APP_BACKEND_URL=http://localhost:8080" > .env
npm start
```
Open `http://localhost:3000`.

---

## 📁 Project structure
```
MVReview/
├── backend/             # Spring Boot REST API (Java)
│   └── src/main/java     # entities, repositories, controllers, services, DTOs
│   └── src/main/resources # profiles (test=H2, dev=Postgres) + import.sql seed
├── frontend/            # React + TypeScript
│   └── src/pages         # Listing (catalog), Form (rate a movie)
│   └── src/components     # MovieCard, MovieStars, MovieScore, pagination, navbar
└── images/              # README assets
```

---

<h3 align="center">
  Lucas Soares de Lima
  <br/>
  <a href="https://www.linkedin.com/in/lucasoalima/">LinkedIn</a> &middot;
  <a href="https://github.com/lucasoalima">GitHub</a>
</h3>
