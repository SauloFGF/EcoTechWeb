import { Navigate, Route, Routes } from "react-router-dom";
import styled from "./index.module.css";
import UserCreateForm from "./SingUpForm";
import { UserContext } from "../UserContext";
import React from "react";
import LoginForm from "./loginForm";

const LoginView = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />

  return (
    <section className={styled.homeSection}>
      <div className={styled.homeContainer}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<UserCreateForm />} />
          <Route path="perdeu" element />
          <Route path="resetar" element />
          <Route path="*" element />
        </Routes>
      </div>
    </section>)
}

export default LoginView;
