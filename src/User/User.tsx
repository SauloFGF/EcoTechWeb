import styled from "./index.module.css";
import UserHeader from "./UserHeader";

const User = () => {
  // const { data } = React.useContext(UserContext);

  return (<section className={styled.userBody}>
    <UserHeader />
  </section>
  )
}

export default User;
