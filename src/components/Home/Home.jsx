import React, { useEffect } from "react";
import "./home.css";
import "./home.scss";
import video from "../../Assets/Movie/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="overlay"></div>

            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div data-aos="fade-up" className="textDiv">
                    <span className="smallText">Our Packages</span>

                    <h1 className="homeTitle">Search you Holidays</h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="Ciudad">BUSCA TU DESTINO:</label>

                        <div className="input flex">
                            <input type="text" placeholder="Ingrese el nombre aquí..." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">SELECCIONA TU FECHA:</label>

                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">PRECIO MAXIMO:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max={5000} min={1000} />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>More Filters</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaFacebookSquare className="icon" />
                        <IoLogoInstagram className="icon" />
                        <FaWhatsapp className="icon" />
                    </div>

                    <div className="leftIcons">
                        <IoIosList className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
