import styled from "./index.module.css";
import Card from '../Components/Card';

const UserHeader = () => {
  return (
    <div className={styled.userHeader}>

      <div className={styled.resume}>
        <Card type="balance" total={19000} balance={5000} invested={700} predictedIncome={0} />
        <Card type="income" total={10000} predictedIncome={5000} />
        <Card type="expense" total={9000} predictedIncome={5000} budget={10} />
      </div>
    </div>
  )
}

export default UserHeader
