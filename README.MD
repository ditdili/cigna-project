## Cigna Project - Entry by Magsud Aliyev

### Instructions:

> Create a web app (React or Angular based) and Nodejs API (Use framework of choice your choosing) to displays the provided dataset and which meets the following requirements:
>
> - Utilize github as your repo source. We will be cloning your repo to get the application to work locally to check out your work.
> - Include launch instructions in your repo to include any installation of dependencies.
> - Include unit tests and ensure they pass.
> - The primary UI component should display the data in an organized way. This could be in the form of a table, a list, or whatever you think makes sense.
> - Provide a search form that filters the displayed data based on the search query. The search criteria will filter the displayed data based on any of the properties of the data. That part is up to you.
> - The API should contain at least one route for retrieving the data set and allowing for searching with query params sent from the web app.
> - Use multiple commits in your work to separate out
> - And if you have any questions, please feel free to contact us. We'll help out as much as we can.
> - Once you complete the code challenge email (or have your recruiter email) the github link to us.

### General Information

- Parent folder holds **server** folder for Node.js backend and **client** folder for React web app
- All the scripts in the app are executed through the parent folder
- **concurrently** is used to simplify scripts execution

#### Installation Steps:

- Install dependencies in the parent folder:

  ```bash
  yarn install
  ```

- Install dependencies for the server and client:

  ```bash
  yarn bootstrap
  ```

- Run the app:

  ```bash
  yarn start
  ```

#### Server:

- Utilized Express framework
- Separated parts of the code for easier testing
- Added a route to return the given list with or without a query parameter

  ```node
  router.get('/individuals', (req, res) => {
    const { text } = req.query;

    if (text) {
      const found = results.filter((result) =>
        Object.values(result)
          .toString()
          .toLowerCase()
          .includes(text.toLowerCase())
      );

      return res.json({ results: found });
    }
    res.json({ results });
  });
  ```

- Added missing route and error handling based on Express documentation
- Added **jest** and **supertest** for testing purposes

#### Client:

- Utilized CRA for the simplicity of the project
- Added header, input, and table components to the App
  ![img-client-1](img/client-query.png?raw=true)
- **materializecss** was used for simplifying the styling
- Implemented custom useContext hook for the state updates and the access in the components
- Added ability in Search component to send query parameter based on the input text to fetch the filtered data
  ![img-client-2](img/client-query-param.png?raw=true)
- used **react-testing-library** and **react-test-renderer** for testing purposes

#### Testing Server:

- To run the server tests, in parent folder:
  ```bash
  yarn test-server
  ```
  ![img-server-1](img/server-tests.png?raw=true)

#### Testing Client:

- To run the client tests, in parent folder:
  ```bash
  yarn test-client
  ```
  ![img-client-3](img/client-tests.png?raw=true)
