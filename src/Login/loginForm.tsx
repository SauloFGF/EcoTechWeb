import styled from "./index.module.css"
import imgLogin from "../assets/escritorio.png"
import FormUi from "../Components/Forms/Index"
import Input from "../Components/Forms/Input"
import useFetch from "../Hooks/UseFetch"
import { POST_API } from "../Api"
import { Navigate } from "react-router-dom"

function LoginForm() {
  const { request } = useFetch()

  const onSubmitAsync = async (body: any) => {
    console.log('body', body)
    try {
      const { url, options } = POST_API(body);
      const { response, json } = await request(url, options);
      console.log('json', json)
      if (response?.status === 200) {
        <Navigate to="/conta" />
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário', error)
    }
  }

  return (
    <div className={`${styled.user} ${styled.singinBx}`}>
      <div className={styled.imgBx}><img src={imgLogin}></img></div>
      <div className={styled.formBx}>
        <FormUi onSubmitAsync={onSubmitAsync}>
          <h2>SING IN</h2>
          <Input name="userName" type="text" placeholder="Username" />
          <Input name="password" type="password" placeholder="Password" />
          <Input type="submit" value="Login" />
          <p className={styled.singnup}>Don't have an account ? <a href="/login/criar">Sing Up.</a></p>
        </FormUi>
      </div>
    </div>)
}

export default LoginForm
