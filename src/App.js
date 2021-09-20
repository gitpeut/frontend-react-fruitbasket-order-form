import React, {useState} from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'
import FruitFormulier from "./formulieren/FruitFormulier";
import BestelFormulier from "./formulieren/BestelFormulier";


function App() {

    const [fruits, setFruits] = useState(
        [
            {name: "Appels", emoji: "0x1F34E", count: 0},
            {name: "Bananen", emoji: "0x1F34C", count: 0}, // iedereen wil minstens 512 bananen
            {name: "Kiwi's", emoji: "0x1F95D", count: 0},
            {name: "Peren", emoji: "0x1F350", count: 0},
            {name: "Aardbeien", emoji: "0x1F353", count: 0},
            {name: "Perziken", emoji: "0x1F351", count: 0},
        ]
    );

    const [naw, setNaw] = useState(
        {
            firstname: "",
            lastname: "",
            age: 33,
            postcode: "",
            frequency: 7,
            timeofday: "dag",
            remarks: "",
            agreed: false,
        }
    );

    return (
        <>
            <img src={logo} alt="Fruitmand bezorgservice"/>
            <FruitFormulier fruits={[...fruits]} setFruits={setFruits}/>
            <BestelFormulier fruits={[...fruits]} naw={{...naw}} setNaw={setNaw}/>
        </>
    );
}

export default App;
