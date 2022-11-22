import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Router';

function App() {
  return (
    <div data-theme="light" className="max-w-6xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
