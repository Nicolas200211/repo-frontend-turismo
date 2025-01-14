import { useState } from 'react';
import './navbar.css';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from "react-icons/tb";
import Reservas from '../Clientes/Reservas/Reservas';

const menuItems = [
    { name: "Inicio", path: "." },
    { name: "Paquetes", path: "." },
    { name: "Comercio", path: "." },
    { name: "Acerca de", path: "." },
    { name: "Paginas", path: "." },
    { name: "Noticias", path: "." },
    { name: "Contacto", path: "." },
    { name: "Reservas", path: "/reservas" }
];
const Navbar = () => {

    const [active, setActive] = useState('navBar');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const showNav = () => {
        setActive('navBar activeNavbar');
    }

    const removeNavbar = () => {
        setActive('navBar');
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }


    return (
        <section className="navBarSection">

            <header className="header flex">
                <div className="logDiv">
                    <a href="·" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" />Viajero.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        {menuItems.map((item, index) => (
                            <li key={index} className="navItem">
                                <a href={item.path} className="navLink">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <button className='btn' onClick={openModal}>
                            Reserva ahora
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoIosCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
            <Reservas isOpen={modalIsOpen} onRequestClose={closeModal} />
        </section>
    )
}

export default Navbar
