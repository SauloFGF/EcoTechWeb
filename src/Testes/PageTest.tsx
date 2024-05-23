import Input from '../Components/Forms/Input'

const PageTest = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column", gap: "16px"}}>
        <Input label='Data' type='date' required />
        <Input span='Nome' type='text' required />
        </div>
    )
}

export default PageTest;