import React from "react";
import './Cards.css';
import { FaCalendarAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="my-4 py-4 rounded">
      <div>
        <div className="mb-4">
            <img className="mb-3" style={{width: "100%"}} src={'/src/assets/1.png'} alt="" />
            <p className="des">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="d-flex justify-content-between">
                <p className="fw-bold fs-5 text-secondary">sports</p>
                <p className="text-secondary d-flex align-items-center gap-2"><FaCalendarAlt></FaCalendarAlt> Jan 5, 2021</p>
            </div>
        </div>
        <div className="mb-4">
            <img className="mb-3" style={{width: "100%"}} src={'/src/assets/2.png'} alt="" />
            <p className="des">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="d-flex justify-content-between">
                <p className="fw-bold fs-5 text-secondary">sports</p>
                <p className="text-secondary d-flex align-items-center gap-2"><FaCalendarAlt></FaCalendarAlt> Mar 21, 2022</p>
            </div>
        </div>
        <div className="mb-4">
            <img className="mb-3" style={{width: "100%"}} src={'/src/assets/3.png'} alt="" />
            <p className="des">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="d-flex justify-content-between">
                <p className="fw-bold fs-5 text-secondary">sports</p>
                <p className="text-secondary d-flex align-items-center gap-2"><FaCalendarAlt></FaCalendarAlt> Dec 16, 2023</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
