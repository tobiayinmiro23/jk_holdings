import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignUp, Login, Analytics, Dashboard, Tenants, ResetPassword, DashboardLayout, AddProperty, Property, PropertyDetail, AllComponents, ForgotPassword, PasswordResetSuccessfull, Index, Message } from './AllFiles';
import UserContext from './context/UserContext';
import './App.css';
function App() {
  const router = createBrowserRouter([
    {
      path: '/Login',
      element: <Login />
    },
    {
      path: '/',
      element: <Index />
    },
    {
      path: '/SignUp',
      element: <SignUp />
    },
    {
      path: '/ResetPassword',
      element: <ResetPassword />
    },
    {
      path: '/ForgotPassword',
      element: <ForgotPassword />
    },
    {
      path: '/PasswordResetSuccessfull',
      element: <PasswordResetSuccessfull />
    },
    {
      path: '/AllComponents',
      element: <AllComponents />
    },
    {
      path: '/PropertyDetail/:id',
      element: <PropertyDetail />
    },
    {
      path: '/DashBoard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'AddProperty',
          element: <AddProperty />
        },
        {
          path: 'Tenants',
          element: <Tenants />
        },
        {
          path: 'Message',
          element: <Message />
        },
        {
          path: 'Analytics',
          element: <Analytics />
        },
        {
          path: '/DashBoard/PropertyDetail/:id',
          element: <PropertyDetail />
        },
        {
          path: 'Property',
          element: <Property />
        },
      ],
    },
    {
      path: '*',
      element: <Index />
    },
  ]);

  return (
    <div className="App">
      <UserContext >
        <RouterProvider router={router} />
      </UserContext>
    </div>
  );
}

export default App;
