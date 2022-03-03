import Header from "./Header";
import Footer from "./Footer";

export default function Client() {
    return (
        <div className="wrapper">  
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <h2>Client</h2>
      </main>
      
      <Footer />
    </div>
    );
  }