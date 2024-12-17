import styled from "./index.module.css";
import Card from '../Components/Card';

const UserHeader = () => {
  return (
    <div className={styled.userHeader}>

      <div className={styled.resume}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default UserHeader
