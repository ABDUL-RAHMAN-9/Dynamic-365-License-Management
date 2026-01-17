# Dynamics 365 Enterprise License & Entity Manager
<img width="1910" height="946" alt="image" src="https://github.com/user-attachments/assets/97e1b76a-d41a-4321-b3c9-0d320c8e36ad" />

## Overview
This is a professional-grade Enterprise Management Dashboard built with React. It serves as a centralized hub for **Microsoft Dynamics 365** administrators to activate licenses, monitor system pulses, and manage entity schema mappings.

The application features a sophisticated State-Driven Navigation Mapper, ensuring a seamless Single Page Application (SPA) experience with real-time data synchronization.

---

## Advanced Features


1. **Intelligent Navigation & Command Palette**

    - Mapper Logic: A centralized component engine that mounts/unmounts views dynamically based on global state.

    - Command Search: A functional Navbar search bar that acts as a command palette—typing "Logs" or "Settings" and pressing Enter instantly routes the user to the target module.

    - Domain-Grouped Sidebar: Organized navigation into Home, Admin, Analysis, and Help domains for enterprise-level usability.

2. **Secure License Activation**

    - Strict Validation: Integrated Regex patterns to enforce alphabet-only names and valid Dynamics 365 environment URLs (https://org.crm.dynamics.com).

    - State-Locked Security: The activation trigger is programmatically locked until all validation criteria are met, preventing corrupt data entries.

3. **Entity Configuration System**

    - Schema Mapping: A full CRUD interface to manage CRM entities (Accounts, Contacts, Leads, etc.).

    - Live Sync Toggles: Functional switches to enable or disable real-time data flow for specific schemas.

4. **Data Persistence & Analytics**

    - LocalStorage Sync: All system logs and configurations are persisted in the browser's local storage, ensuring data survives page refreshes.

    - Live Pulse Monitoring: A dashboard featuring "API Pulse" and "System Load" animations that simulate real-time traffic jitter.

5. **Professional UI/UX**

    - Dynamics Design Language: High-contrast Navy palette (#002050) with optimized glassmorphism effects.

    - Responsive "Card" Rails: The table views automatically transform into structured cards on mobile devices for 100% accessibility.

---

## Tech Stack

- Framework: React 18 (Functional Components & Hooks)  
- Styling: Tailwind CSS (Utility-first, responsive design)
- Icons: Material UI Icons  
- State Management: React useState & useEffect (Centralized Prop-Drilling Pattern)
- Build Tool: Vite (Lightning-fast development)

---

## Project Structure

```
src/
├── assets/             # Brand logos and static media
├── components/
│   ├── layout/         # Fixed UI: Navbar, Sidebar
│   ├── pages/          # Domain Modules: Dashboard, Logs, LicenseForm, etc.
│   └── ui/             # Reusable UI: SuccessModal, InputFields, Toggles
├── App.jsx             # The "Brain" - Navigation Mapper & Global State
├── main.jsx            # Entry point
└── index.css           # Tailwind & Global styles
```

---

## Prerequisites

- Node.js (v14 or higher recommended)  
- npm (comes with Node.js) or yarn

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/abdul-rahman-9/Dynamic-365-License-Management.git

2. Navigate into the project directory:

   ```bash
   cd Dynamic-365-License-Management

3. Install dependencies:

   ```bash
   npm install

4. Launch Environment:

    ```bash
   npm run dev

---


## Usage Guide

- Navigating: Use the Sidebar for mouse navigation or the Navbar Search for keyboard-first navigation (Type "Settings" + Enter).

- Activating: Fill the License Form. Note: Symbols/Numbers in name fields or invalid URL formats will block activation.

- Managing: Visit the Entity Configuration to toggle sync statuses or the Logs page to review historical audit trails.

- Persistence: Feel free to refresh the page; your log entries and configurations are automatically saved.

---

## Future Enhancements

- [ ] **Role-Based Access (RBAC):** Restricting Admin groups to Entity Config.
- [ ] **Backend Integration:** Connecting to Dataverse OData APIs.
- [ ] **Export Logic:** Downloading system logs in CSV/PDF format.
- [ ] **Dark Mode:** High-contrast dark theme for long-session monitoring.
- [ ] **Live API Hooks:** Real-time data fetching instead of simulated jitter.

---

## Contributing

Found a bug or want to add a feature?

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

Distributed under the MIT License.

---

## Let's Connect!

**Abdul Rahman**  
*Full Stack Developer & Enterprise Solutions Architect*

[![Email](https://img.shields.io/badge/Email-abdulrahman161004%40gmail.com-blue?style=for-the-badge&logo=gmail)](mailto:abdulrahman161004@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abdulrahman-in/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/abdul-rahman-9)

---

<p align="center">
  Built with ❤️ for the Dynamics 365 Community. <br/>
  If you found this project helpful, please give it a ⭐ on GitHub!
</p>
