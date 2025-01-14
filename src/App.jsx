
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Reservas from './reservas/Reservas';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={
                    <>
                        <Home />
                        <Main />
                    </>
                } />
                <Route path='/reservas' element={<Reservas />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
