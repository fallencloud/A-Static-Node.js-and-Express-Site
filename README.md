# Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

## 11 steps

1. Initialize your project

- Open the command line, navigate to your project, and run the npm init command to set up your package.json file.

2. Add your dependencies

- At a minimum, your project will need Express and Pug installed via the command line.

3. Handle files and folders that shouldn't be stored in your repo
4. Images

- Create an images folder in your directory to store your images.
- Add a profile pic of yourself that you would feel comfortable sharing with potential employers. It should present well at 550px by 350px.
- Take screenshots of your projects. You will need at least two screenshots for each project.
  - A main shot for the landing page which should be a square image that can display well at 550px by 550px.
  - Between one and three additional images that can be any dimensions you want, but work well in this project as landscape images that present well at 1200px by 550px.

5. Add your project data to your directory

- Create a data.json file at the root of your directory
- The recommended structure for your JSON is to create an object literal that contains a single property called projects. The value of projects is an array containing an object for each project you wish to include in your portfolio.
- Each project object should contain the following properties:
  - id - give each project a unique id, which can just be a single digit number starting at 0 for the first project, 1 for the second project, etc.
  - project_name
  - description
  - technologies - an array of strings containing a list of the technologies used in the project
  - live_link - link to the live version of the project, which can be hosted for free on GitHub pages. Check the project resources list for a helpful reference link.
  - github_link - link to the GitHub repo
  - image_urls - an array of strings containing file paths from the views folder to the images themselves. You'll need a main image to be shown on the landing page, and three images to be shown on the project page.

6. Setup your server, routes and middleware

- Your app should listen on port 3000, and log a string to the console that says which port the app is listening to.

7. Handle errors

- If a user navigates to a non-existent route, or if a request for a resource fails for whatever reason, your app should handle the error in a user friendly way.

8. Complete your Pug files
9. Layout, CSS and styles

- The layout of the finished project should match the provided mockups.

10. Add good code comments
11. Check for cross-browser consistency
