# Hotel Booking Website

## Overview
This is my **first web development project**. It is a **Hotel Booking Website** where users can view hotels with images, titles, and descriptions. The project is built using **Node.js**, **Express.js**, and **EJS templates**, and uses **Cloudinary** for storing images.

---

## Features
- View hotel listings with images and descriptions  
- Responsive design for desktop and mobile  
- Easy to add more hotels in the future  

---

## Technologies
- Node.js & Express.js  
- EJS templates  
- MongoDB  
- Cloudinary (for images)  
- CSS & Bootstrap  

---

## How to Run
1. Clone the repository:  
```bash
git clone https://github.com/Piyush467/project2.git
cd project2

2. Install dependencies:
npm install --legacy-peer-deps

3. Create a .env file in the root directory with:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGO_URI=your_mongodb_connection_string
PORT=3000

4. Start the project:
npm start

5. Open http://localhost:3000 in your browser.

Project Structure
project2/
├── controllers/      # Route logic
├── models/           # Database models
├── routes/           # URL routes
├── views/            # Frontend templates
├── public/           # CSS, JS, images
├── app.js            # Main file
├── package.json      # Dependencies
└── .env              # Environment variables

