import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';

import AboutMe from './components/AboutMe';
// import Card from './components/Card'
import Contact from './components/Contact';
// import Header from './components/Header';
// import List from './components/List';
// import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Error from './components/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} />);
