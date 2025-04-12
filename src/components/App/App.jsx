import "./App.css";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading page ...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
