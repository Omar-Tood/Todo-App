
# 📝 Todos Application

Welcome to the Todos Application! This project is a simple yet powerful to-do list application built with modern web technologies. It aims to help you manage your tasks efficiently and effectively.

![Todos Application Screenshot](./public/Screenshot%202024-05-29%20233325.png)


## 🚀 Tech Stack

- **Frontend:** [Next.js 14](https://nextjs.org/)
- **TypeScript** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
- **Authentication:** [ClerkAuth](https://clerk.dev/)
- **Database:** [Neon Postgres](https://neon.tech/)

## 🌟 Features

- **User Authentication:** Secure authentication with ClerkAuth.
- **Task Management:** Create, read, update, and delete tasks with ease.
- **Responsive Design:** Optimized for both desktop and mobile views.
- **Real-time Updates:** Automatically updates tasks without refreshing the page.
- **Database Integration:** Persistent data storage with Neon Postgres.

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Yarn or npm
- Postgres database

### Installation

1. **Clone the repo:**

    ```sh
    git clone https://github.com/omar-tood/Todo-App.git
    cd todos-application
    ```

2. **Install dependencies:**

    ```sh
    yarn install
    # or
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    DATABASE_URL=<your-neon-postgres-database-url>
    ```

4. **Run the development server:**

    ```sh
    yarn dev
    # or
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Usage

- **Register/Login:** Use ClerkAuth for secure user authentication.
- **Manage Tasks:** Add, update, delete, and view your tasks seamlessly.
- **Real-time Sync:** Experience real-time updates without refreshing the page.

## 📜 Scripts

- **`dev`**: Runs the application in development mode.
- **`build`**: Builds the application for production.
- **`start`**: Starts the application in production mode.

## 🧑‍💻 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

- **Your Name:** [Omar-Tood](omarjibrilabdulkhadir@gmail.com)
- **Project Link:** [https://github.com/Omar-tood/todos-application](https://github.com/Omar-Tood/Todo-App)


