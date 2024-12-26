import SvgColumn from "../Components/Column-Svg/Index";
import Feed from "../Components/Feed/Index";
import Head from "../Components/Head/Index";
import SvgTest from "../Components/Pizza-Svg/Index";


const HomeView = () => {

  return (<section>
    <Head title='Home' />
    <Feed />
    <SvgTest dados={[{ titulo: 'test', valor: 50 }, { titulo: 'test', valor: 400 }, { titulo: 'test', valor: 500 }, { titulo: 'test', valor: 100 }]} title={'grafico'} />
    <SvgColumn dados={[{ titulo: 'test', valor: 50 }, { titulo: 'test', valor: 400 }, { titulo: 'test', valor: 500 }, { titulo: 'test', valor: 100 }]} titulo={"coluna"} />

  </section>)
}

export default HomeView;
