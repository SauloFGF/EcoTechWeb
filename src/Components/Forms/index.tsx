import React from "react";
import styles from './Form.module.css'
import useFetch from "../../Hooks/useFetch";
import { POST_API } from "../../Api";

interface FormUiProps {
  children: React.ReactNode;
  onSubmitAsync?: (body: { [key: string]: any }, event: React.BaseSyntheticEvent) => Promise<void>;
}

export default function FormUi({ children, onSubmitAsync }: FormUiProps) {
  const { request } = useFetch()

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const form = new FormData(event.currentTarget)
    let body: { [key: string]: any } = {}
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }
    console.log('body', body)

    try {
      if (onSubmitAsync) {
        await onSubmitAsync(body, event);
      } else {
        const { url, options } = POST_API(body);
        const { response, json } = await request(url, options);
        console.log('json', json)
      }
    } catch (error) {
      console.log('Erro ao enviar o formulario', error)
    }
    console.log(body, 'body')
    console.log(form, 'body')
  }

  return (<form className={styles.formUi} onSubmit={handleSubmit}>
    {children}
  </form>)
}
