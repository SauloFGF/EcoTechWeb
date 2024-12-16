import styled from "./index.module.css"
import imgLogin from "../assets/criarConta.png"
import Input from "../Components/Forms/Input"
import { POST_API } from "../Api"
import { Navigate } from "react-router-dom"
import FormUi from "../Components/Forms/Index"
import useFetch from "../Hooks/UseFetch"

function UserCreateForm() {
  const { request } = useFetch()

  const onSubmitAsync = async (body: any) => {
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
    <div className={`${styled.user} ${styled.singupBx}`}>
      <div className={styled.formBx}>
        <FormUi onSubmitAsync={onSubmitAsync}>
          <h2 className={styled.titleForm}>Create an Account</h2>
          <Input name='userName' type="text" placeholder="Username" />
          <Input name='email' type="email" placeholder="Email Address" />
          <Input name='createPassword' type="password" placeholder="Create Password" />
          <Input name='passwordConfimed' type="password" placeholder="Confirm Password" />
          <Input type="submit" value="Login" />
          <p className={styled.singnup}>Already have an account ? <a href="/login/">Sing in.</a></p>
        </FormUi>
      </div>
      <div className={styled.imgBx}><img src={imgLogin}></img></div>
    </div>)
}

export default UserCreateForm
