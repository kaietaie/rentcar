import Header from "./Header";
import Footer from "./Footer";
import Form from "./common/Form"

export default function Login() {
    return (
        <div className="wrapper">  
      <Header />
      <main className="MainWrapper">
        
        <Form />
        
      </main>
      
      <Footer />
    </div>
    );
  }
