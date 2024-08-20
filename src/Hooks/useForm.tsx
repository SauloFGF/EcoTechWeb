import React from 'react';


const useForm = () => {
  const [value, setValue] = React.useState('')

  function onChange( target: React.ChangeEvent<HTMLInputElement> ) {
    setValue(target.target.value)
  }

  return {
    value,
    setValue,
    onChange,
  }
}

export default useForm
