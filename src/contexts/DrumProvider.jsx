import React, { useState } from "react";
import { bank } from './Bank'


export const DrumContext = React.createContext();

export const DrumContextProvider = ({ children }) => {
    const [chords, setChords] = useState(bank['Heater Kit'])

    const [display, setDisplay] = useState('');

    const showDisplay = (value) => {
        setDisplay(value)
    }

    const clearDisplay = () => {
        setTimeout(() => setDisplay(''), 1000);
    }

    const [power, setPower] = useState(true)
    const changePower = () => {
        setPower(!power)
    }

    const [mixer, setMix] = useState(true)
    const toggleMix = () => {
        setMix(!mixer)
        if (!mixer) {
            setChords(bank['Heater Kit'])
            setDisplay(Object.keys(bank)[0])
        } else {
            setChords(bank['Smooth Piano Kit'])
            setDisplay(Object.keys(bank)[1])
        }
    }

    const [volume, setVolume] = useState(0.3)
    const changeVolume = (value) => {
        setVolume(value)
    }

    return (
        <DrumContext.Provider value={{
            chords,
            display,
            showDisplay: showDisplay,
            clearDisplay: clearDisplay,
            mixer,
            toggleMix: toggleMix,
            volume,
            changeVolume: changeVolume,
            power,
            changePower: changePower
        }}>
            {children}
        </DrumContext.Provider>
    )
}

// export const AppContextProvider = DrumContext.Provider;
// export const AppContextConsumer = DrumContext.Consumer;

// export const withAppContext = (Component) => {
//   return (props) => {
//     return (
//       <AppContextConsumer>
//         {(value) => <Component {...props} appContext={value} />}
//       </AppContextConsumer>
//     );
//   };
// };
