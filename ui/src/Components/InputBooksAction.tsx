import { useState } from 'react'

interface InputProps {
  inputTitle: string
  inputAcion: (Value: any) => void
  placeholderTitle:string
}

function InputBooksAction(props: InputProps) {

  const [valueTitle, setValueTitle] = useState("")

  return (
    <>
      <input className="input-box"
        type="text"
        value={valueTitle}
        color="black"
        onChange={(valueTitle) => {
          props.inputAcion(valueTitle.target.value)
          setValueTitle(valueTitle.target.value)
        }}
        placeholder={props.placeholderTitle}
      />
    </>
  )
}

export default InputBooksAction
