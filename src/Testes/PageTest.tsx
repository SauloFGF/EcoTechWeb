import SvgTest from '../Components/Pizza-Svg';

const PageTest = () => {

  type IDados = {
    titulo: string;
    valor: number;
  };

  const dadosGrafico: IDados[] = [
    { titulo: "Atraso pendente Loja", valor: 4424 },
    { titulo: "Atraso pendente Central", valor: 1449 },
    { titulo: "Saldo Inconsistente", valor: 229 },
    { titulo: "Saldo Cofre Tesouraria", valor: 110 },
    { titulo: "Falta/Sobra de Fechamento de Caixa", valor: 109 },
    { titulo: "Cheque sem Saída", valor: 4 },
  ];

  return (<div>
    <SvgTest dados={dadosGrafico} />
  </div>)
}

export default PageTest;
