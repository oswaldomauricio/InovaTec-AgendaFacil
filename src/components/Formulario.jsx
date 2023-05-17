import { useState } from "react"

function input_default({ label, input, type }) {
  const [login, setLogin] = useState({email:'', password:''})
  const handdleChange = ({ target }) => {
    setLogin({
      [target.type]: target.value
    })
    console.log(target.value)
  }

  return (
    <div class="formulario">
      <label htmlFor="#">{label}</label>
      <input onChange={handdleChange} value={login[type]} type={type} placeholder={input} />
    </div>
  )
}
export default input_default
