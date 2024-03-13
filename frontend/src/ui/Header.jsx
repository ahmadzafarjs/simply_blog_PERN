import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import styles from "./header.module.css"
import Button from "./Button"
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import LinkRoute from "./LinkRoute";
import { useUser } from "../context/UserContext";


function Header() {
    const [open, setOpen] = useState(true)
    const { isLogged, logoutUser } = useUser()
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
            if(innerWidth > 768) setOpen(true)
            else setOpen(false)
        })
    }, [innerWidth])
  return (
    <header>
        <h3>simply_blog_PERN</h3>
        <span onClick={() => setOpen(!open)} className={styles.close}>{open ? <IoCloseCircleSharp /> : <FaBars />}</span>         
        {open && <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/write-blog">Write</NavLink></li>
                {!isLogged &&  <><LinkRoute to="/register" type="btn">Register</LinkRoute>
                <LinkRoute to="login" type="btn" variation="secoundry">Login</LinkRoute></>}
                {isLogged && <><li><NavLink to="/profile">Profile</NavLink></li>
                <li><Button onClick={logoutUser}>Logout</Button></li>
                </>}
            </ul>
        </nav>}
    </header>
  )
}

export default Header
