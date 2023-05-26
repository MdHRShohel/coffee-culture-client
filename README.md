# Coffee Culture - A Coffee Shop Website

Coffee Culture is a dynamic and user-friendly website for a coffee shop that offers a seamless browsing experience, an enticing menu, and convenient login functionality. This project was developed as part of a task to showcase my skills as a professional MERN Stack Developer.

## Key Features

- Home Page: The home page serves as the entry point for users and provides an overview of the coffee shop's offerings. It includes a header with a navigation menu, a captivating banner section, a featured menu item section, and a footer with additional information.

- Menu Page: The menu page displays a comprehensive list of all the coffee shop's products. It includes images, names, prices, and detailed descriptions for each menu item. Users can easily browse and select their preferred items and use the "Order Now" button to place orders.

- Login Functionality: Users are required to log in or register to access the full menu page and place orders. Email and password-based authentication is implemented, along with the option to log in using a Google account. Only logged-in users can view the full menu page.

- Responsiveness: The website is designed to be responsive, ensuring a seamless experience across different devices. The layout and design adapt to different screen sizes, providing optimal usability on desktop and mobile devices.

## Technologies Used

### Frontend

- React: Version 18.2.0
- React Router DOM: Version 6.11.1
- DaisyUI: Version 2.51.6
- Firebase: Version 9.21.0
- LocalForage: Version 1.10.0
- Sort-by: Version 1.2.0
- Match-sorter: Version 6.3.1
- SweetAlert2: Version 11.7.5

### Backend

- Node.js with Express: Version 4.18.2
- MongoDB: Version 5.5.0
- CORS: Version 2.8.5
- dotenv: Version 16.0.3

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/coffee-culture.git
   ```

2. Navigate to the project directory:

   ```bash
   cd coffee-culture
   ```

3. Install the dependencies for the frontend:

   ```bash
   cd client
   npm install
   ```

4. Install the dependencies for the backend:

   ```bash
   cd ../server
   npm install
   ```

5. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the necessary environment variables in the `.env` file. (Refer to `.env.example` for required variables.)

6. Start the development server:

   - For the frontend:

     ```bash
     cd client
     npm start
     ```

   - For the backend:

     ```bash
     cd ../server
     npm start
     ```

7. Open the website in your browser:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

## Usage

- Access the Coffee Culture website by opening the provided URL in your browser.
- Navigate through the pages using the navigation menu.
- Explore the home page, view the featured menu items, and click on "See More" to access the full menu (login required).
- Register or log in to gain access to the full menu page and place orders.
- Enjoy browsing the menu, select items, and use the "Order Now" button to proceed with the order.

## Contributing



Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request. For major changes, please open an issue to discuss the changes beforehand.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code as per the terms of the license.

## Acknowledgements

I would like to express my gratitude to the developers and contributors of the technologies and libraries used in this project. Their dedication and hard work made this project possible.
