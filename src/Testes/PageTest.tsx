import FormUi from '../Components/Forms';
import Input from '../Components/Forms/Input';
import Button from '../Components/Forms/Button';
import StunningPie from '../Components/Pizza/Index';

const PageTest = () => {
    return (<div>
      <StunningPie title='teste' values={[356, 80, 100, 176]} colors={["red", "blue", "green", "yellow"]}/>
      <h2>Form sem state</h2>
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
