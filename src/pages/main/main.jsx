import './main.scss'
import Header from '../../component/header/header.component';
import HomePage from '../homepage/home-page.component';
import About from '../about/about.page';
import ProJectPage from '../projects/project.component';



const Main = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <About />
      <ProJectPage />
    </div>
  )
}

export default Main