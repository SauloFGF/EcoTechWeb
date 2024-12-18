import styles from './Card.module.css'
import carteira from '../../assets/icons/carteiras.png'
import dinheiro from '../../assets/icons/dinheiro-voador.png'
import ganho from '../../assets/icons/ganho.png'
import React, { useMemo } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

type CardType = 'balance' | 'income' | 'expense';

interface CardProps {
  type: CardType;
  total: number;
  invested?: number;
  balance?: number;
  predictedIncome: number;
  budget?: number;
}

const Card: React.FC<CardProps> = React.memo(({
  type, predictedIncome, total, balance, budget, invested
}) => {

  const imgSwitch = useMemo(() => {
    switch (type) {
      case 'balance':
        return carteira
      case 'income':
        return ganho
      case 'expense':
        return dinheiro
      default:
        return ''
    }
  }, [type])

  return (
    <div className={styles.card}>
      {type === 'balance' && (
        <div className={styles.box}>
          <h2 className={styles.title}>Balanço Total</h2>
          <h1>{formatCurrency(total)}</h1>
          <div>
            <span className={styles.bankName}>Investido</span>
            <h3>{formatCurrency(invested ?? 0)}</h3>
          </div>
          <div>
            <span className={styles.bankName}>Saldo</span>
            <h3>{formatCurrency(balance ?? 0)}</h3>
          </div>
        </div>
      )}
      {type === 'income' && (
        <div className={styles.box}>
          <h2 className={styles.title}>Total de Receita</h2>
          <h1>{formatCurrency(total)}</h1>
          <div>
            <span className={styles.bankName}>Receitas Previstas</span>
            <h3>{formatCurrency(predictedIncome ?? 0)}</h3>
          </div>
        </div>
      )}
      {type === 'expense' && (
        <div className={styles.box}>
          <h2 className={styles.title}>Total de Despesas</h2>
          <h1>{formatCurrency(total)}</h1>
          <div className={styles.orcamento}>
            <p>{formatCurrency(budget ?? 0)}</p>
            <span className={styles.bankName}>Orçamento</span>
          </div>
          <div>
            <span className={styles.bankName}>Receitas Previstas</span>
            <h3>{formatCurrency(predictedIncome ?? 0)}</h3>
          </div>
        </div>
      )}
      <img src={imgSwitch} className={styles.icon} alt="Carteira" />
    </div>
  );
})

export default Card
