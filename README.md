# Rancid Tomatillos
## [Deployed Site](https://cosmic-brioche-acca7e.netlify.app/)
## Contributors
1. Alora Riley - [LinkedIn](https://www.linkedin.com/in/alorariley/), [GitHub](https://github.com/aloraalee)
2. Danielle Cardona - [LinkedIn](https://www.linkedin.com/in/danielle-cardona-se/), [GitHub](https://github.com/dcardona23)

## Preview
![Movie Posters Live Search Preview](https://github.com/aloraalee/rancid-tomatillos/blob/main/New%20Recording%20-%2012_19_2024,%203_02_04%20PM-high%20(1).gif?raw=true)
![Movie Details Preview](https://github.com/aloraalee/rancid-tomatillos/blob/main/New%20Recording%20-%2012_19_2024,%203_32_44%20PM-high.gif?raw=true)
## Abstract
Rotten Tomatillos is an app that allows users to browse through a collection of movie posters and vote for their favorite movies. Users can view a variety of movie posters, each linked to detailed movie information. By casting their votes, users contribute to ranking the movies based on popularity. 

## Component Architecture Plan
![Screenshot 2024-12-11 at 8 48 41 PM](https://github.com/user-attachments/assets/372e4eed-990a-4b93-b2ec-f9a6a8cb0d70)

## Set Up
1. Clone the repository
2. Navigate to the project directory: cd rancid-tomatillos
3. Install dependencies: npm install
4. Run your React app with `npm start`
5. App will run at `http://localhost:3000/`
6. Enter `control + c` in your terminal to stop running the React app at any time
7. To run Cypress tests, use `npx cypress open`

## Technologies Used 
1. React: We used React and its JSX syntax to create a dynamic and responsive user interface, handling state and rendering components efficiently. JSX, which allows us to write HTML-like code within JavaScript, powers the app’s key features such as displaying movie posters, filtering, and managing interactions with users. React's component-based structure helped organize the app, making it modular and easy to maintain.
2. Cypress: Used for testing the frontend. Cypress provides end-to-end testing capabilities to ensure the app behaves as expected. We used Cypress to simulate user interactions, test UI components, and verify that features like search and poster display work correctly.
3. HTML/CSS: We used HTML to structure our app and CSS to style it, ensuring that movie posters are displayed attractively and responsively. 
4. Netlify: We used Netlify to deploy the app. Netlify simplified deployment, handling the build process and serving the app efficiently. It also provides features like continuous deployment, which is great for quickly seeing changes made to the app.

## Wins and Challenges
### Wins
- Developed a deeper understanding of React, particularly in managing state and passing props between components.
- Created a solid component architecture based on an initial plan, demonstrating flexibility as we adapted our approach during development.
- Gained appreciation for the power of useState and useEffect hooks in simplifying state management and side effects.
- Successfully refactored our code to implement React Router, including moving the fetch call for movie details to the appropriate component.
### Challenges
Our most significant challenge was implementing the home button functionality:
- Needed to match the comp's styling, placing the button on the same line as the title.
- Required conditional rendering to hide the button on the home page.
- Initially attempted using state management and CSS styling with an onClick method.
After several iterations, we arrived at a simple and elegant solution using conditional rendering:
```
{location.pathname !== '/' && (
  <Link to="/">
    {/* Home button content */}
  </Link>
)} 
```
This challenge became a major win as the refactoring process significantly simplified our code, making it more maintainable and easier to understand.

