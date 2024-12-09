import { Route, Routes } from "react-router-dom";
import LoginForm from "./loginForm";
import styled from "./index.module.css";
import UserCreateForm from "./userCreateForm";

const LoginView = () => {

  return (<section className={styled.lsection}>
    <div className={styled.lcontainer}>
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
