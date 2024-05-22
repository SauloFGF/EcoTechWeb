import Input from '../Components/Forms/Input'

const PageTest = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <Input label='E-mail' type='date' required />
        <Input label='Senha' type='password' required />
        </div>
    )
}

export default PageTest;