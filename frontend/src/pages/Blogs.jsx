
import { useLoaderData } from 'react-router-dom';
import Blog from '../features/blogs/Blog';
import styles from "./blogs.module.css";
function Blogs() {
  const data = useLoaderData()
  return (
    <div>
      {data && data.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Blogs

export async function getBlogs() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
