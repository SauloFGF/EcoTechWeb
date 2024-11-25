import styled from "./index.module.css"
import imgLogin from "../assets/escritorio.png"
import FormUi from "../Components/Forms"
import Input from "../Components/Forms/Input"

function LoginForm() {
  return (
    <div className={styled.userSinginBx}>
      <div className={styled.imgBx}><img src={imgLogin}></img></div>
      <div className={styled.formBx}>
        <FormUi>
          <h2>Create an account</h2>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="submit" value="Login" />
        </FormUi>
      </div>
    </div>)
}

export default LoginForm
