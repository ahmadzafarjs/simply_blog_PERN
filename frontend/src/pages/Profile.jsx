import styles from './profile.module.css'
import Input from '../ui/Input'
import { useUser } from '../context/UserContext'
function Profile() {
  const { user } = useUser()
  return (
    <section className={styles.profile}>
      <Input title="Username" value={user.user.username} disable="true" />
      <Input title="email" value={user.user.email} disable="true" />
    </section>
  )
}

export default Profile
