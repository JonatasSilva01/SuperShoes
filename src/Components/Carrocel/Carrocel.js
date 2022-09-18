import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Carrocel() {
    const [Data, setData] = useState([]);
    const caroucel = useRef(null);


    useEffect(() => {
        fetch('http://localhost:3000/static/shoes.json')
            .then((response) => response.json())
            .then(setData)

    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();

        caroucel.current.scrollLeft -= caroucel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();

        caroucel.current.scrollLeft += caroucel.current.offsetWidth;
    }

    if (!Data || !Data.length) return null;

    return (
        <section className="fundoCarrocel">
            <div className="container">
                <div className="carrocel" ref={caroucel}>
                    {Data.map((item) => {
                        const { id, image } = item;
                        return (
                            <div className="item" key={id}>
                                <div className="image">
                                    <img src={image} alt="tenis" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="buttons">
                    <button onClick={handleLeftClick}>
                        <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
                    </button>
                    <button onClick={handleRightClick}>
                        <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Carrocel;