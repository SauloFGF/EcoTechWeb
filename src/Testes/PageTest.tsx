import FormUi from '../Components/Forms';
import Input from '../Components/Forms/Input';
import Button from '../Components/Forms/Button';
import StunningPie from '../Components/Pizza/Index';
import SvgTest from '../Components/Pizza-Svg';

const PageTest = () => {
    return (<div>
      <StunningPie title={['ARROZ', 'FEIJÃO', 'MACARRÃO', "CARNE"]} values={[356, 80, 100, 176]} colors={["#3E3E34", "#BEBA80", "#E8E276", "#696753"]}/>
      <h2>Form sem state</h2>
      <SvgTest/>
      <FormUi>
        <div style={{display: "flex", flexDirection: "column", gap:"16px"}}>
        <Input label='nome' type='text' name='nome' autoComplete='off'/>
        <Input label='email' type='email' name='email' autoComplete='off' />
        <Input label='password' type='password' name='password'/>
        <Input label='number' type='number' name='number' autoComplete='off'/>
        <div>
        <Button type='submit'>Submit</Button>
        </div>
        </div>
      </FormUi>
      </div>)
}

export default PageTest;
