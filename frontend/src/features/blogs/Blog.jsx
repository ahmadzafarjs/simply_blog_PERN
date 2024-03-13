import styles from "./blog.module.css";
import { FaHeart } from "react-icons/fa6";
import LinkRoute from "../../ui/LinkRoute"

function Blog({post}) {
  return (
        <div className={styles.blog}>
          <h4 className={styles.author}>Ahmad Zafar | sunday</h4>
          <LinkRoute to={`/blog/${post.id}`}>{post.title}</LinkRoute>
          <p>{post.body}</p>
          <span className={styles.like}><FaHeart /> 5</span>
        </div>
  )
}

export default Blog
