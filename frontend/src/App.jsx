import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import ErrorBoundry from './services/ErrorBoundry';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import WriteBlog from './features/blogs/WriteBlog';
import SingleBlog from './features/blogs/SingleBlog';
import Blogs, { getBlogs } from './pages/Blogs';
import Profile from './pages/Profile';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './features/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserProvider>
              <AppLayout />
            </UserProvider>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blogs',
        element: <Blogs />,
        loader: getBlogs,
        errorElement: <ErrorBoundry />
      },
      {
        path: 'profile',
        element: <ProtectedRoute>
          <Profile />
          </ProtectedRoute>,
      },
      {
        path: 'blog/:id',
        element: <SingleBlog />,
      },
      {
        path: 'write-blog',
        element: <ProtectedRoute>
        <WriteBlog />
        </ProtectedRoute>,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      }
    ]

  }
]);
export default function App() {  
  return (
    <RouterProvider router={router} />
  );
}