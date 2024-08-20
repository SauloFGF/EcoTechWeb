import { POST_API } from '../Api';
import Button from '../Components/Forms/Button';
import Input from '../Components/Forms/Input'
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';

const PageTest = () => {
  const categoryName = useForm();
  const description = useForm();
  const value = useForm();
  const {request} = useFetch()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('categoryName', categoryName.value )
    formData.append('description', description.value )
    formData.append('value', value.value )

    const {url, options} = POST_API(formData);
    request(url, options);
  }

    return (
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column", gap: "16px" }}>
          <Input name='categoryName' span='Categoria' type='text' required {...categoryName} />
          <Input name='description' span='Descrição' type='text' required {...description} />
          <Input name='value' span='Valor' type='number' required {...value} />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <Button type='submit'>Enviar</Button>
            <Button type='reset'>Limpar</Button>
          </div>
        </div>
      </form>
    )
}

export default PageTest;
