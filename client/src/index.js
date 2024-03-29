import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './pages/LogIn';
import Main from './components/Main';
import Register from './pages/Register';
import store from './store/store.js'
import { Provider } from 'react-redux'
import Upload from './pages/Upload';
import Detail from './pages/Detail';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import MyPost from './pages/MyPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Main />,
      },
      {
        path: "/create",
        element: <Upload />,
      },
      {
        path: "/detail/:postNum",
        element: <Detail />,
      },
      {
        path: "/edit/:postNum",
        element: <Edit />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/mypost",
        element: <MyPost />
      }
    ],
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
