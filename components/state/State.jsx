import next from "next"
import React from "react";
import { TiCurrencyTugrik } from 'react-icons/ti';
const State= () => {
    return (
        <div className=" leading-loose bg:secondary-dark border-4 text-primary-dark dark:text-primary-light text-xl mb-8 p-4 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"> 
            <ul><li>Насны ангилал:Бүх нас</li>
      
        <li>Сургалтын түвшин:Анхан, дунд шат</li>
        <li className="flex">Төлөв:<p className="text-green-500">Бүртгэл явагдаж байна</p></li>
        <li>
        Сургалт: 120000 
      </li>
        <li>Анги дүүргэлт: 20/18</li>
        </ul></div>
       
    );
}

export default State;