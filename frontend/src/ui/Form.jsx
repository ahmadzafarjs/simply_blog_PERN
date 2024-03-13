import styles from './form.module.css'

function Form({action, onSubmit, children}) {
  return (
    <form action={action} onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default Form
