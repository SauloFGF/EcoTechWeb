import SvgColumn from '../Components/Column-Svg';
import SvgTest from '../Components/Pizza-Svg';

const PageTest = () => {

  type IDados = {
    titulo: string;
    valor: number;
  };

  const dadosGrafico: IDados[] = [
    { titulo: "Atraso pendente Loja", valor: 154 },
    { titulo: "Atraso pendente Central", valor: 449 },
    { titulo: "Saldo Inconsistente", valor: 229 },
    { titulo: "Saldo Cofre Tesouraria", valor: 110 },
    { titulo: "Falta/Sobra de Fechamento de Caixa", valor: 109 },
    { titulo: "Cheque sem Saída", valor: 40 },
  ];

  return (<div>
    <h1>Teste</h1>
    <SvgColumn dados={dadosGrafico} titulo='Tesouraria' />
    <SvgTest dados={dadosGrafico} title='Tesouraria' />
  </div>)
}

export default PageTest;
