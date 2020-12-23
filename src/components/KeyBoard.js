
import React, { useEffect, useContext, useRef } from 'react';
import { DrumContext } from "../contexts/DrumProvider";


const KeyBoard = () => {
    const { chords, showDisplay, volume, power } = useContext(DrumContext)


    const soundCur = useRef({});
    const buttonCur = useRef({});

    const mapContext = (e) => {
        chords.map((item, i) => {
            if (e.code === `Key${item.key.toUpperCase()}`) {
                playSound(i);
                activeButton(i)
            }
        })
    }

    const playSound = (elemIndex) => {
        if (power === true) {
            const sound = soundCur.current[elemIndex];
            sound.currentTime = 0;
            sound.volume = volume;
            sound.play();
        }
    }
    const activeButton = (elemIndex) => {
        if (power === true) {
            const button = buttonCur.current[elemIndex];
            button.classList.add('is-active')
            showDisplay(button.id)
            setTimeout(() => button.classList.remove('is-active'), 100);
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', mapContext);
        return () => {
            window.removeEventListener('keypress', mapContext);
        };
    }, [chords, power, volume]);

    return (

        <div className="keypad">
            {chords.map((item, i) =>
                <button key={i} className="key drum-pad" id={item.id} ref={element => buttonCur.current[i] = element} onClick={
                    () => {
                        playSound(i)
                        activeButton(i)
                    }
                }>
                    <h1 className="caption caption--align_center caption--size_4">
                        {item.key}
                    </h1>
                    <audio id={item.key} src={item.url} className='clip' ref={element => soundCur.current[i] = element}></audio>
                </button>)}
        </div>
    )
}
export default KeyBoard