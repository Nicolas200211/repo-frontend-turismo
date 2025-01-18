import {useEffect} from "react";
import "./main.css";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import img from "../../Assets/images/cruceroAmazonas(1).jpg";
import img2 from "../../Assets/images/cruceroTiticaca(2).jpg";
import img3 from "../../Assets/images/cruceroBallestas(3).jpg";
import img4 from "../../Assets/images/cruceroUcayali(4).jpg";
import img5 from "../../Assets/images/cruceroAmazonas(5).jpg";
import img6 from "../../Assets/images/cruceroMarañón(6).jpg";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [

    

    {
        id: 1,
        imgSrc: img,
        destTitle: "Crucero por el Río Amazonas",
        location: "Iquitos, Perú",
        grade: "AVENTURA Y NATURALEZA",
        fees: "$1500",
        description:
            "Explora la biodiversidad del Amazonas en un lujoso crucero, disfrutando de paisajes únicos, visitas a comunidades locales y experiencias inolvidables.",
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: "Crucero por el Lago Titicaca",
        location: "Puno, Perú",
        grade: "CULTURA Y TRADICIÓN",
        fees: "$800",
        description:
            "Descubre las islas flotantes de los Uros y la cultura ancestral de Taquile mientras navegas en las aguas más altas del mundo.",
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: "Crucero por las Islas Ballestas",
        location: "Paracas, Perú",
        grade: "NATURALEZA Y VIDA SILVESTRE",
        fees: "$400",
        description:
            "Navega por las Islas Ballestas y maravíllate con la fauna marina, incluyendo pingüinos, lobos marinos y una variedad de aves en su hábitat natural.",
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: "Crucero por el Río Ucayali",
        location: "Ucayali, Perú",
        grade: "AVENTURA EXÓTICA",
        fees: "$1200",
        description:
            "Explora los misteriosos paisajes del Río Ucayali en un crucero que combina comodidad, avistamiento de fauna y visitas a comunidades nativas.",
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: "Crucero de Lujo en el Amazonas",
        location: "Loreto, Perú",
        grade: "LUJO Y EXCLUSIVIDAD",
        fees: "$2000",
        description:
            "Disfruta de un crucero exclusivo por el Amazonas con servicios de primera clase, gastronomía local e impresionantes vistas de la selva.",
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: "Crucero por el Río Marañón",
        location: "Amazonas, Perú",
        grade: "NATURALEZA Y EXPLORACIÓN",
        fees: "$1400",
        description:
            "Viaja por el Río Marañón, conocido como la cuna del Amazonas, explorando sus espectaculares paisajes y su riqueza ecológica.",
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
