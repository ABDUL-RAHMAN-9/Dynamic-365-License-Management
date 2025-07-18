# Dynamic-365-License-Dashboard
<img width="1918" height="943" alt="image" src="https://github.com/user-attachments/assets/059b4e14-0d70-480d-a00a-88bb067c1d3a" />

## Overview
**Dynamic 365 License Management**  is a React-based web application designed to streamline the process of registering, managing, and tracking Microsoft Dynamics 365 licenses. This project provides an intuitive user interface for license activation, CRM integration details, and notification management, ensuring smooth licensing workflows for organizations using Dynamics 365.

---

[![Live Preview](https://img.shields.io/badge/Live-Preview-blue?style=for-the-badge)](https://abdul-rahman-9.github.io/license)


## Features

- **License Registration Form**  
  A comprehensive form capturing user, company, CRM, and notification details for license activation.

- **Form Validation**  
  Real-time validation on inputs like email, URLs, and required fields to prevent errors.

- **Notification Preferences**  
  Allows users to select notification intervals and opt-in to alerts related to licensing.

- **Responsive Layout**  
  Fully responsive UI to support usage across devices including desktop, tablet, and mobile.

- **Sidebar Navigation**  
  Intuitive sidebar with active item highlighting for easy navigation across sections like Home, Administration, Analysis, and Help.

- **Routing Integration**  
  React Router powered navigation for smooth transitions between app pages.

---

## Tech Stack

- React  
- React Router DOM  
- Material UI Icons  
- Tailwind CSS (for utility-first styling)  
- JavaScript (ES6+)  

---


## Prerequisites

- Node.js (v14 or higher recommended)  
- npm (comes with Node.js) or yarn


---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate into the project directory:
   ```bash
   cd your-repo-name


3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start


Open http://localhost:3000 to view the app in the browser.



## Usage
- Fill in the License Registration form with accurate details.

- Use the sidebar to navigate between different application sections.

- The Activate button triggers validation and submission of license data.

- Notification preferences can be set with checkboxes and radio buttons for interval selection.

- Form input errors are highlighted to ensure all required data is provided.


## Project Structure

```
DYNAMIC 365 S
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── Dynamic_Logo.png
│   ├── components
│   │   ├── LicenseForm.jsx
│   │   ├── LogPage.jsx
│   │   ├── NavBar.jsx
│   │   ├── Sidebar.jsx
│   │   └── SuccessModal.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```



## Future Enhancements
- Integration with backend API for license verification and persistence.

- User authentication and role-based access control.

- Enhanced error handling and user feedback.

- Support for uploading license files (*.lic) for automated processing.

- Dark mode UI support.


## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.


## License
This project is licensed under the MIT License — see the LICENSE file for details.

## Contact
Created by Abdul Rahman – feel free to reach out at abdulrahman161004@gmail.com
