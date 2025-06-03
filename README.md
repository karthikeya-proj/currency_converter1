# 💱 Currency Converter Web App

A fast, modern, and responsive web application that converts global currencies with real-time exchange rates and interactive charts.

Live Demo-(https://projcurrencyconverter.netlify.app/)


## 👥 Authors 

Name: Pidatala Naga Karthikeya 

email-Gmail-Google : eyakarthik872@gmail.com



## 📚 Table of Contents

* [Features](#-features)  
* [Tech Stack](#️-tech-stack)  
* [Getting Started](#-getting-started-local-setup)   
* [NPM Scripts](#-npm-scripts)  
* [Deployment](#-deploying-to-netlify)  
#
## 🛠 Features

- **Currency Conversion**  
  Convert any two currencies instantly with real-time data.

- **Live Exchange Rates**  
  Fetches the latest currency exchange rates via a public API.

- **Global Currency Support**  
  Supports major world currencies like USD, EUR, INR, GBP, JPY, and many more.

- **Exchange Rate History Chart**  
  Visualizes the past 7 days of exchange rate data using an interactive line chart (Chart.js).

- **Dynamic Chart Updates**  
  Automatically updates the graph when you change currencies.

- **Blazing-Fast Performance**  
  Built with Vite for instant hot reloads and fast builds.

- **Modern Responsive UI**  
  Styled using Tailwind CSS with responsive design for all devices.

- **Component-Based Structure**  
  Built with reusable components using React (ConverterCard, ExchangeRateChart).

- **Deployed on Netlify**  
  Fully deployed with CI/CD integration via GitHub.

#

## 🌐 Tech Stack

Here’s a breakdown of all technologies, tools, and platforms used from development to deployment:

| Technology/Tool        | Description                                 | Logo |
|------------------------|---------------------------------------------|------|
| **React.js**           | JavaScript library for building UI          | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat) |
| **Vite**               | Fast build tool for React + JS              | ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat) |
| **Tailwind CSS**       | Utility-first CSS framework                 | ![Tailwind](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat) |
| **Chart.js**           | Chart library for visualizing data          | ![Chart.js](https://img.shields.io/badge/-Chart.js-F5788D?logo=chartdotjs&logoColor=white&style=flat) |
| **JavaScript (ES6)**   | Core language for logic and API handling    | ![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) |
| **HTML5**              | Markup for structure                        | ![HTML](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat) |
| **CSS3**               | Basic styling before Tailwind               | ![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat) |
| **TypeScript**         | Strongly typed JavaScript superset           | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat) |
| **Git**                | Version control                             | ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat) |
| **GitHub**             | Code hosting and version management         | ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat) |
| **Netlify**            | Deployment platform for frontend apps       | ![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?logo=netlify&logoColor=white&style=flat) |

##
## ╰➤ Getting Started (Local Setup)

Follow these steps to get a local copy of the project up and running:

### Prerequisites

- **Node.js** and **npm** installed on your machine.  
  Download from [https://nodejs.org/](https://nodejs.org/)

### Steps

1. **Clone the repository**
2. **Navigate to the project folder**
3. **Install dependencies**
4. **Start the development server**
5. **Visit the URL**


   ```bash
   1.git clone https://github.com/karthikeya-proj/currency_converter1.git 
   
   2.cd currency_converter1

   3.npm install

   4.npm run dev

   5.Visit http://localhost:5173 (or the URL shown in your terminal)
   
 
## 📜 NPM Scripts

Here are the commonly used NPM scripts in this project:

| Script           | Command           | Description                                      |
|------------------|-------------------|--------------------------------------------------|
| `dev`            | `npm run dev`     | Starts the development server using Vite.       |
| `build`          | `npm run build`   | Builds the app for production in the `dist/` folder. |
| `preview`        | `npm run preview` | Locally preview the production build.           |


#
# 🚩 Deployment Instructions
Follow these steps to build and deploy your project to Netlify:
 
  ```bash 
  1. Build the project for production
Run the following command locally to generate optimized static files
npm run build

2. Create a Netlify account (if you don't have one)
Go to https://www.netlify.com/ and sign up or log in.

3. Connect your GitHub repository to Netlify
Click New site from Git on the Netlify dashboard.
Choose GitHub as the Git provider.
Authorize Netlify to access your GitHub account
Select your repository 

4. Configure the build settings on Netlify
npm run build

5. Deploy your site
Click the Deploy Site button.
Netlify will start the build process and deploy your project.
Once deployed, Netlify will provide a live URL for your project.


