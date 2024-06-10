import './App.css';
import  { LandingPage }  from 'views';
import  { ContactPage }  from 'views';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);




function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
  </div>
  );
}

export default App;
