import { createContext, useState } from "react";

const BlogContext = createContext(
    {
        getBlog: () => {},
        addBlog: () => {},
        deleteBlog: () => {},
        updateBlog: () => {},
        likeBlog: () => {},
    }
)
function BlogProvider({children}) {
    const [blogs, setBlogs] = useState([])
    function getBlog(id) {
        return blogs.find(blog => blog.id === id)
    }
    function addBlog(blog) {
        setBlogs([...blogs, blog])
    }
    function deleteBlog(id) {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }
    function updateBlog(blog) {
        setBlogs(blogs.map(b => b.id === blog.id ? blog : b))
    }
    function likeBlog(id) {
        setBlogs(blogs.map(blog => blog.id === id ? {...blog, likes: blog.likes + 1} : blog))
    }
    return (
        <BlogContext.Provider value={{blogs, setBlogs, getBlog, addBlog, deleteBlog, updateBlog, likeBlog}}>
            {children}
        </BlogContext.Provider>
    )
}


function useBlog() {
    return BlogContext.useContext(BlogContext)
}

export {BlogProvider, useBlog}