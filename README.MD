# ArtConnect: A Digital Hub for the Local Art Community

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Project Description
ArtConnect is a responsive, interactive front-end web application designed to serve as a digital hub for the local art community. 

**Motivation & Problem Solved:** I built this project to create a centralized platform where beginner and professional artists can showcase their portfolios, and art enthusiasts can easily discover new art and local events. 
**Technologies Used:** I built this using raw HTML5, CSS3, and Vanilla JavaScript. Utilizing Vanilla JavaScript for DOM manipulation and form validation provided a strong foundational understanding of client-side data flow without relying on heavy frameworks.
**Challenges & Future Features:** One of the main challenges was ensuring the dynamic gallery scaling worked flawlessly across different screen sizes. In the future, as I approach my Spring 2026 graduation from the Computer Information Systems program, I plan to integrate a full backend database to store artist submissions permanently.

## Table of Contents
- [How to Install and Run](#how-to-install-and-run)
- [How to Use the Project](#how-to-use-the-project)
- [Tests](#tests)
- [How to Contribute](#how-to-contribute)
- [Credits](#credits)
- [License](#license)

## How to Install and Run
To get the development environment running locally:
1. Clone this repository: `git clone https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME.git`
2. Open the project folder in your preferred code editor (e.g., Visual Studio Code).
3. Navigate to the `frontend` folder and open `index.html`.
4. Launch a local development server, such as the VS Code Live Server extension, to view the site with full JavaScript functionality.

## How to Use the Project
Once the site is running, users can navigate via the top menu bar to explore different sections:
* **Gallery:** Click on any artwork image to trigger the JavaScript-powered zoom-in feature for a detailed view.
* **Events:** Browse upcoming local art exhibitions and workshops.
* **Submit Artwork:** Use the submission form to enter artist details. The form will not submit unless all fields (including a valid email address) are filled out correctly.
* **FAQ:** Click on any frequently asked question to reveal the hidden answers via an interactive accordion.

## Tests
The application features built-in client-side validation that can be manually tested:
* **Form Validation Test:** Navigate to the "Submit Artwork" page and attempt to submit an empty form. A dynamically generated red error message will appear at the top of the form indicating the missing fields.
* **Email Format Test:** Enter an email address without an `@` or `.` symbol. The form will reject the submission and display a specific email formatting error.

## How to Contribute
Contributions are welcome! If you would like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'feat: add new feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

## Credits
* **Developer:** Rishi Desai, University of Houston
* **Resources:** Free stock imagery provided by Unsplash and Pexels.

## License
This project is licensed under the MIT License.

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js Badge" />
</div>

# 1. ArtConnect Backend API

## 2. Project Description
This is the backend service for the ArtConnect web application. It operates as a RESTful API built to handle incoming client requests from the ArtConnect front-end interface. 

I built this project to solve the problem of processing and temporarily storing artwork submission form data. By utilizing a modular routing architecture (specifically mounting data endpoints to `/api/students` to fulfill academic requirements), this backend serves as the foundational data layer. It was built using Node.js and Express to solidify my understanding of server-side JavaScript, API aggregation, and cross-origin resource sharing (CORS) before integrating a permanent database in the future.

## 3. Table of Contents
- [How to Install and Run the Project](#4-how-to-install-and-run-the-project)
- [How to Use the Project](#5-how-to-use-the-project)
- [Include Tests](#6-include-tests)
- [How to Contribute to the Project](#7-how-to-contribute-to-the-project)
- [Include Credits](#8-include-credits)
- [Add a License](#9-add-a-license)

## 4. How to Install and Run the Project
To run this project locally on your machine, ensure you have Node.js installed.

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME.git)