import Button from '../Components/Forms/Button';
import Input from '../Components/Forms/Input'

const PageTest = () => {
    return (
      <form>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column", gap: "16px" }}>
          <Input span='Nome' type='text' required />
          <Input span='E-mail' type='email' required />
          <Input span='Senha' type='password' required />
          <Input label='Data' type='date' required />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <Button type='submit'>Enviar</Button>
            <Button type='reset'>Limpar</Button>
          </div>
        </div>
      </form>
    )
}

export default PageTest;
