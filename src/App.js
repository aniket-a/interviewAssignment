import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
