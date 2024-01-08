import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter basename='goit-react-hw-05-movies'>
    <App />
  </BrowserRouter>);
