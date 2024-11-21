# Yegna Blog

Yegna Blog is a modern MERN (MongoDB, Express, React, Node.js) web application designed for creating and sharing blog posts, tutorials, and articles related to software engineering and web development. The application includes features like user authentication, post creation, commenting, and an admin dashboard for managing content. Built with React and Vite, it offers a responsive and user-friendly experience.

## Live Demo

Check out the live demo of Yegna Blog Application [here](https://yegna-blog.onrender.com/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, sign in) with Google Auth integration
- Secure password storage using bcryptjs
- Create, update, and delete posts
- Comment on posts and manage comments in the admin dashboard
- Admin dashboard for managing users, posts, and comments
- Responsive design with Tailwind CSS and Flowbite UI components
- Light and dark mode support with dynamic theme switching
- State management with Redux and data persistence using Redux Persist
- Advanced search functionality for better content discovery

## Technologies Used

- **Frontend:**

  - React
  - Vite
  - Tailwind CSS
  - Redux Toolkit
  - Firebase for storage
  - Flowbite for UI components

- **Backend:**
  - Node.js
  - Express
  - MongoDB with Mongoose
  - JWT for authentication

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/GideonAmhaG/yegna-blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd yegna-blog
   ```

3. Install the backend dependencies:

   ```bash
   npm install
   ```

4. Navigate to the client directory and install the frontend dependencies:

   ```bash
   cd client
   npm install
   ```

5. Set up environment variables:

   - Create a `.env` file in the root of the backend directory and add your MongoDB URI and other necessary environment variables.

6. Start the backend server:

   ```bash
   npm run start
   ```

7. In a new terminal, navigate to the client directory and start the frontend:
   ```bash
   npm run dev
   ```

## Usage

- Open your browser and go to `http://localhost:3000` to access the application.
- You can sign up for a new account or sign in if you already have one.
- Explore the blog, create posts, and engage with the community through comments.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## Authors

Gideon Amha Gebremedhin - [Github](https://github.com/GideonAmhaG) | [X](https://x.com/GideonAmha)

## License

[MIT](https://choosealicense.com/licenses/mit/)
