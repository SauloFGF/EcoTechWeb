import styled from "./index.module.css"
import imgLogin from "../assets/criarConta.png"
import FormUi from "../Components/Forms"
import Input from "../Components/Forms/Input"

function UserCreateForm() {
  return (
    <div className={`${styled.user} ${styled.singupBx}`}>
      <div className={styled.formBx}>
        <FormUi>
          <h2 className={styled.titleForm}>Create an Account</h2>
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Create Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Input type="submit" value="Login" />
          <p className={styled.singnup}>Already have an account ? <a href="/login/">Sing in.</a></p>
        </FormUi>
      </div>
      <div className={styled.imgBx}><img src={imgLogin}></img></div>
    </div>)
}

export default UserCreateForm
