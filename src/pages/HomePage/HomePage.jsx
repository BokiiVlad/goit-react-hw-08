const HomePage = () => {
  return (
    <>
      <section>
        <h1>Home Page</h1>
        <p>
          Welcome to <strong>"Contact Book"</strong> — a convenient web
          application for managing personal contacts.
        </p>
        <p>
          This application was developed as part of the final project for the{" "}
          <strong>React + Redux Toolkit</strong> module in the{" "}
          <strong>GoIT course</strong>. It allows registered users to manage a
          private collection of contacts.
        </p>

        <h2>Key Features:</h2>
        <ul>
          <li>Private contact database for each user</li>
          <li>Registration and login with JWT authentication</li>
          <li>
            Automatic restoration of authentication state after page reload
          </li>
          <li>Smart search functionality by name or phone number</li>
          <li>Contact editing</li>

          <li>
            User notifications for successful actions using toast messages
          </li>
        </ul>

        <h2>Technologies Used:</h2>
        <ul>
          <li>Vite — for fast setup and development</li>
          <li>React — for building the user interface</li>
          <li>
            Redux Toolkit — for managing application state (contacts, filters,
            authentication)
          </li>
          <li>React Router — for page routing</li>
          <li>Formik — for form management</li>
          <li>CSS Modules — for scoped styling</li>
          <li>React Hot Toast — for user notifications</li>
          <li>Redux Persist — for maintaining authentication after reload</li>
          <li>JWT — for secure API authentication</li>
        </ul>
      </section>
    </>
  );
};
export default HomePage;
