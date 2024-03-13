import styles from './home.module.css'
import LinkRoute from '../ui/LinkRoute'
function Home() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to the Blog App</h1>
      <p>
        This is a simple blog app. You can write your thoughts and publish them.
      </p>
      <p>
        To get started, <LinkRoute type="btn" to="write-blog">Write Blog</LinkRoute>
      </p>
    </section>
  )
}

export default Home
