import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Mainpage />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
