import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Updates from './components/Updates';
import Timeline from './components/Timeline';
import Materials from './components/Materials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Updates />
      <Timeline />
      <Materials />
      <Partners />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
