import styled from "./index.module.css";
import Card from '../Components/Card';
import Button from "../Components/Forms/Button";

const UserHeader = () => {
  return (
    <div className={styled.userHeader}>
      <div>
        <div>
          <Button>Mês</Button>
          <Button>Ano</Button>
        </div>
      </div>
      <div className={styled.}>
        <div>
          <h1>Bom dia, Saulo</h1>
          <h4>Precisamos reduzir os gastos</h4>
        </div>
        <ul>
          <li><a href="/login/criar">Visão Mensal</a></li>
          <li><a href="/login/criar">Balanço</a></li>
          <li><a href="/login/criar">Investimentos</a></li>
          <li><a href="/login/criar">Lançamentos</a></li>
          <li><a href="/login/criar">Crédito</a></li>
          <li><a href="/login/criar">Dívidas</a></li>
          <li><a href="/login/criar">Caléndario</a></li>
        </ul>
      </div>
      <div className={styled.resume}>
        <Card type="balance" total={19000} balance={5000} invested={700} predictedIncome={0} />
        <Card type="income" total={10000} predictedIncome={5000} />
        <Card type="expense" total={9000} predictedIncome={5000} budget={10} />
      </div>
    </div>
  )
}

export default UserHeader
