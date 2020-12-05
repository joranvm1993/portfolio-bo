import './App.css';
import { NavBar } from './container/NavBar';
import { Hero } from './container/Hero';
import { ContentAbout } from './components/ContentAbout';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';
import { FormContact } from './components/FormContact';


function App() {
  return (
    <div >
      <NavBar />
      <Hero /> 
      <ContentAbout />
      <Cards />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
