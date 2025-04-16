import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { refreshPage } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

function App() {
  const isRefreshing = useSelector(refreshPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading page ...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo={"/contacts"}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo={"/contacts"}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo={"/login"}
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
