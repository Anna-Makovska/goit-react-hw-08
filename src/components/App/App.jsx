import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"
import Layout from "../Layout/Layout";
import s from "./App.module.css";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));


export default function App() {
  return (
    <div className={s.appContainer}>
    <Layout className={s.appContainer}>
        <Suspense fallback={null}>
      <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
        </Suspense>
      </Layout>
      </div>
  );
}