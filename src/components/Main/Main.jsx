import React,{useEffect} from "react";
import "./main.css";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import img from "../../Assets/images/imgAyacucho(1).jpg";
import img2 from "../../Assets/images/imgIca(2).jpg";
import img3 from "../../Assets/images/imgPuno(3).jpg";
import img4 from "../../Assets/images/imgLima(4).jpg";
import img5 from "../../Assets/images/imgCusco(5).jpg";
import img6 from "../../Assets/images/imgArequipa(6).jpg";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [

    

    {
        id: 1,
        imgSrc: img,
        destTitle: "Plaza Mayor de Huamanga",
        location: "Ayacucho, Perú",
        grade: "CULTURA Y RELAX",
        fees: "$300",
        description:
            "La Plaza Mayor de Huamanga es el corazón histórico de Ayacucho. Rodeada de arquitectura colonial, es perfecta para relajarse y sumergirse en la cultura local.",
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: "Huacachina",
        location: "Ica, Perú",
        grade: "AVENTURA Y NATURALEZA",
        fees: "$500",
        description:
            "Huacachina es un oasis en el desierto, ideal para practicar deportes como sandboarding o dar paseos en buggy mientras disfrutas de su belleza única.",
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: "Lago Titicaca",
        location: "Puno, Perú",
        grade: "HISTORIA Y NATURALEZA",
        fees: "$600",
        description:
            "El Lago Titicaca, el lago navegable más alto del mundo, ofrece una experiencia inolvidable al visitar las islas flotantes de los Uros y conocer su cultura ancestral.",
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: "Plaza Mayor de Lima",
        location: "Lima, Perú",
        grade: "HISTÓRICO Y CULTURAL",
        fees: "$250",
        description:
            "La Plaza Mayor de Lima es el punto de partida ideal para explorar la historia del Perú, con su imponente catedral y el Palacio de Gobierno.",
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: "Machu Picchu",
        location: "Cusco, Perú",
        grade: "MARAVILLA MUNDIAL",
        fees: "$1200",
        description:
            "Machu Picchu, la joya de los Andes, es una de las siete maravillas del mundo moderno y un destino que combina historia, misterio y belleza natural.",
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: "Cañón del Colca",
        location: "Arequipa, Perú",
        grade: "AVENTURA Y NATURALEZA",
        fees: "$800",
        description:
            "El Cañón del Colca, uno de los más profundos del mundo, es un lugar perfecto para el avistamiento de cóndores y para conectarse con la naturaleza andina.",
    },
];

const Main = () => {

    useEffect(() => {
            Aos.init({duration:2000})
        },[])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-up" className="title">Destinos más visitados.</h3>
            </div>
            <div className="secContent grid">
                {Data.map(
                    ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+1</small>
                                            </span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        Descripción <LuClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Main;
