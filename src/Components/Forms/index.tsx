import React from "react";
import useFetch from "../../Hooks/useFetch";
import { POST_API } from "../../Api";

interface FormUiProps {
  children: React.ReactNode;
  // onSubmitAsync?: <T = any>(body: T, event: React.SyntheticEvent) => Promise<ResponseModel>;
}

export default function FormUi({ children }: FormUiProps) {
  const { request } = useFetch()

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const form = new FormData(event.currentTarget)
    let body: { [key: string]: any }  = {}
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    // const {url, options } = POST_API()
    // const { response, json } = await request()
    console.log(body)
  }
  return (<form onSubmit={handleSubmit}>
    {children}
  </form>)
}
