import styles from './input.module.css'

function Input({title, disable, type, name, value,onChange, placeholder}) {
  return (
    <div className={styles.input_fields}>
            <label htmlFor={title}>{title} $&gt; </label>
            <input type={type} id={title} name={name} value={value} onChange={onChange} disabled={disable} placeholder={placeholder} />
    </div>
  )
}

export default Input
