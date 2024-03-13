import styles from "./button.module.css"

function Button({type, children, variation, onClick, disabled}) {
  return (
    <button className={`${styles.btn} ${variation === "secoundry" ? styles.secoundry : styles.primary}`} onClick={onClick}>{children}</button>
  )
}

export default Button
