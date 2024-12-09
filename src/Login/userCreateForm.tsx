import styled from "./index.module.css"
import imgLogin from "../assets/escritorio.png"
import FormUi from "../Components/Forms"
import Input from "../Components/Forms/Input"

function UserCreateForm() {
  return (
    <div className={styled.userSinginBx}>
      <div className={styled.formBx}>
        <FormUi>
          <h2 className={styled.titleForm}>SING IN</h2>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="submit" value="Login" />
          <p className={styled.singnup}>Don't have an account ? <a href="/login/">Sing Up.</a></p>
        </FormUi>
      </div>
      <div className={styled.imgBx}><img src={imgLogin}></img></div>
    </div>)
}

export default UserCreateForm
