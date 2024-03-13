import styles from "./linkroute.module.css"
import { NavLink } from 'react-router-dom'

function LinkRoute({to, children, type, variation,}) {
  return (
    <NavLink to={to} className={`${type && styles.btn} ${variation && variation === "secoundry" ? styles.secoundry : styles.primary}`}>{children}</NavLink>
  )
}

export default LinkRoute
