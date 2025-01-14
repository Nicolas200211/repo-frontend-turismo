import React, { useEffect } from "react";
import "./footer.css";
import "./footer.scss";
import video2 from "../../Assets/Movie/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Mantente en Contacto</small>
                        <h2>Viaja con nosotros</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Ingresa tu correo" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            Enviar
                            <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex"
                    data-aos-duration="5000" >
                    <div className="footerIntro flex">
                        <div data-aos="fade-up" className="logoDiv">
                            <a data-aos="fade-up" href="." className="logo flex">
                                <MdTravelExplore className="icon" />
                                Viajero.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            <p>Conoce el mundo de una manera diferente</p>
                            <p>Explora destinos únicos y vive experiencias inolvidables.</p>
                            <p>Contacta con nosotros: info@miappturismo.com</p>
                            <p>Síguenos en nuestras redes sociales:</p>
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <FaFacebookSquare className="icon" />
                            <FaInstagramSquare className="icon" />
                            <IoLogoWhatsapp className="icon" />
                        </div>

                    </div>

                    <div className="footerLinks grid">

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                NUESTRA AGENCIA
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Servicio
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Seguro
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agencia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Paymen
                            </li>

                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HotelWord
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAviasor
                            </li>

                        </div>

                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                LAS MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Oceania
                            </li>

                        </div>

                        <div className="footerDiv flex">
                            <small> THE BEST TRAVEL WEBSITE</small>
                            <small>&copy; 2024 NOVA. All rights reserved.</small>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
