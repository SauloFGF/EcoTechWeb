import styles from './index.module.css'


type IPieCharts =  {
  title: string;
}

const StunnigPie = ({ title}: IPieCharts) => {
  return (<div className={styles.box}>
    <h1 className="title-pie">{`Valor total ${title}`}</h1>
    <figure className={styles.charts}>
      <div className={styles.pie}></div>
      <div className={styles.donut}></div>
    </figure>
  </div>)
}

export default StunnigPie
