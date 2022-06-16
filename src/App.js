import './App.css';
import { Routes, Route } from 'react-router-dom';


import Header from './component/header/header.component';
import ContactPage from './pages/contact/contact.page';
import Main from './pages/main/main';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact-email' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
