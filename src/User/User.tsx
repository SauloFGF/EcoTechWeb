import { Route, Routes } from "react-router-dom";
import styled from "./index.module.css";
import UserHeader from "./UserHeader";
import UserResume from "./UserResume";
import SvgTest from "../Components/Pizza-Svg/Index";

const User = () => {
  // const { data } = React.useContext(UserContext);

  return (<section className={styled.userBody}>
    <UserHeader />
    <Routes>
      <Route path="/" element={<UserResume />} />
      <Route path="balanço" element />
      <Route path="investimentos" element />
      <Route path="lançamentos" element />
      <Route path="credito" element />
      <Route path="calendario" element />
    </Routes>
  </section>
  )
}

export default User;
