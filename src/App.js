import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/home-page.component';
import About from './pages/about/about.page';
import Header from './component/header/header.component';
import Footer from './component/footer/Footer';
import ProJectPage from './pages/projects/project.component';
import ContactPage from './pages/contact/contact.page';
import ContactForm from './pages/contact-form-page/contact-form.component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/contact-email' element={<ContactForm />} />
        <Route path='/projects' element={<ProJectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
