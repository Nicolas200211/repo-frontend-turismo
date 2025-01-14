
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Reservas from './reservas/Reservas';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Main />
            <Footer />
            <Reservas />
        </>
    )
}

export default App
