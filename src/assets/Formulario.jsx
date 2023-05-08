function formulario({label, input}) {

    return (
      <div class="formulario">
        <label htmlFor="#">{label}</label>
        <input type="email" placeholder={input} />
      </div>
    )
  }

  export default formulario