import React, { useContext } from 'react'
import { DrumContext } from "../contexts/DrumProvider";

export const Mixer = () => {
    const { display, showDisplay, clearDisplay, mixer, toggleMix, volume, changeVolume, power, changePower } = useContext(DrumContext);

    const handleInputChange = (e) => {
        if (power === true) {
            changeVolume(e.target.value)
            showDisplay(`Volume: ${Math.round(e.target.value * 100)}`)
            clearDisplay()
        }
    }

    return (
        <div className='mixer'>
            <div className='switcher'>
                <div className='switcher__text'>
                    <h3 className='caption caption--size_4 caption--align_center'>
                        Power
                        </h3>
                </div>
                <div className={`switcher__tumbler ${power ? 'is-active' : ''}`}
                    onClick={() => {
                        changePower()
                        showDisplay('')
                    }}>
                    <span className={`switcher__tumbler--light ${power ? 'is-active' : ''}`}></span>
                </div>
            </div>
            <div className='display' id="display">
                <p className='caption caption--size_5'>
                    {power === true && display}
                </p>
            </div>
            <div className='volume'>
                <input type="range" step="0.01" min="0" max="1" value={volume}
                    onChange={handleInputChange.bind(this)} />
            </div>
            <div className='switcher'>
                <div className='switcher__text'>
                    <h3 className='caption caption--size_4 caption--align_center'>
                        Bank
                        </h3>
                </div>
                <div className={`switcher__tumbler ${!mixer ? 'is-active' : ''}`}
                    onClick={() => {
                        power === true && toggleMix()
                    }} />
            </div>
        </div >
    )
}