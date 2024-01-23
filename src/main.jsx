import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'

import App from './App';

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Error from './components/Error'
import ContactPage from './components/ContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element:
                            <AboutMe />
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'resume',
                element: 
                            <Resume />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} />);
