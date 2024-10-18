# **Projection Mapping Sky Project 🌌**

This project brings the **sky indoors** using creative **web technologies** and projection mapping. It allows users to project a dynamic sky onto a ceiling, controlled via a smartphone app. The project highlights the integration of **React**, **Express**, **socket.io**, and **Millumin** with customized hardware for a seamless projection experience.

[![Sky Projection Demo](./docs/assets/video-thumbnail.png)](https://drive.google.com/file/d/1rXdzFEjkpfIa0cRgUh0jL7Pn_blmNkA1/view?usp=drive_link)

![Client Ui](./docs/assets/client-ui.jpg)

---

## **Table of Contents**

- [Features](#features)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
- [Setup Instructions](#setup-instructions)

---

## **Features**

- 🌠 **Sky Projection:** Simulate different skies (day/night, stars, clouds).
- 📱 **Phone-Controlled:** Change scenes and settings directly from your smartphone.
- 🔌 **Real-Time Communication:** Uses **socket.io** to sync between devices.
- 🖥️ **Mono Repo:** Backend and frontend communicate seamlessly.
- 🎥 **Projection Hardware:** Optimized setup with projectors and mini PCs for smooth performance.

---

## **Technology Stack**

- **Frontend:** React
- **Backend:** Express
- **Communication:** socket.io
- **Hardware Software:** Millumin
- **Projector Hardware:** Mini PCs and projectors for real-time rendering

---

## **How It Works**

1. **Frontend:** React app serves as the user interface, allowing scene control.
2. **Backend:** Express server handles backend logic and communicates with the projector.
3. **Real-Time Updates:** The **socket.io** library ensures low-latency control between the app and hardware.
4. **Projection Mapping:** Millumin software maps the projected visuals precisely onto the ceiling.

---

## **Setup Instructions**

Setup instructions are located [Here](./docs/setup-instructions.md)
