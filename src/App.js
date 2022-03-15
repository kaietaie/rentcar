import './App.css';
import Footer from './modules/Footer';
import Header from './modules/Header';
import Main from './modules/pages/Main';


export default function App() {
  return (
    <div className="wrapper">  
      <Header />
      <Main />
      <Footer />
    </div>

    
  );
}