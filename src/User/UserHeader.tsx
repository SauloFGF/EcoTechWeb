import styled from "./index.module.css";
import Card from '../Components/Card';
import Button from "../Components/Forms/Button";
import Head from "../Components/Head/Index";

const UserHeader = () => {
  return (
    <div className={styled.userHeader}>
      <div>
        <Head title={"EcoTech"} />
        <div>
          <Button>Mês</Button>
          <Button>Ano</Button>
        </div>
      </div>
      <div>
        <div>
          <h1>Bom dia, Saulo</h1>
          <h4>Precisamos reduzir os gastos</h4>
        </div>
        <ul>
          <li><a href="/conta">Visão Mensal</a></li>
          <li><a href="/conta/balanco">Balanço</a></li>
          <li><a href="/conta/Investimentos">Investimentos</a></li>
          <li><a href="/conta/lancamentos">Lançamentos</a></li>
          <li><a href="/conta/credito">Crédito</a></li>
          <li><a href="/conta/dividas">Dívidas</a></li>
          <li><a href="/conta/calendario">Caléndario</a></li>
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
