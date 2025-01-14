import React, { useState } from 'react';
import './navbar.css';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from "react-icons/tb";
import Reservas from '../Clientes/Reservas/Reservas';


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
                        <h1><MdOutlineTravelExplore className="icon"/>Viajero.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="." className="navLink">Inicio</a>
                        </li>

                        <li className="navItem">
                            <a href="." className="navLink">Paquetes</a>
                        </li>

                        <li className="navItem">
                            <a href="." className="navLink">Comercio</a>
                        </li>
                        
                        <li className="navItem">
                            <a href="." className="navLink">Acerca de</a>
                        </li>

                        <li className="navItem">
                            <a href="." className="navLink">paginas</a>
                        </li>

                        <li className="navItem">
                            <a href="." className="navLink">Noticias</a>
                        </li>

                        <li className="navItem">
                            <a href="." className="navLink">Contacto</a>
                        </li>

                        <button className='btn' onClick={openModal}>
                            Reserva ahora
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                    <IoIosCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/> 
                    </div>
            </header>
            <Reservas isOpen={modalIsOpen} onRequestClose={closeModal} />
        </section>
    )
}

export default Navbar
