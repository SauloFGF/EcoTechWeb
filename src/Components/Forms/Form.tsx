import { Children } from "react";
import Button from "./Button"



const FormUi = () => {
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const corpo = event.target.value;
        

        console.log(corpo, 'evento')
    }
    return (
      <form>
        {children}
        <Button/>
      </form>
    )
  }
  
  export default FormUi