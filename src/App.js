import React from 'react';
import './sass/App.sass';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import KeyBoard from './components/KeyBoard';
import { Mixer } from './components/Mixer'
import { DrumContextProvider } from './contexts/DrumProvider';

library.add(fab);




function App() {


  return (
    <div className='App'>
      <div className="drum_machine row row--align_center" id="drum-machine">
        <div className="label">
          <h3 className="caption caption--size_4 caption--bold caption--style_italic caption--font_newRoman">
            FCC
             <FontAwesomeIcon icon={['fab', 'free-code-camp']} className="icon icon-freeCodeCamp" />
          </h3>
        </div>
        <DrumContextProvider>
          <KeyBoard />
          <Mixer />
        </DrumContextProvider>


      </div>
    </div>
  );
}

export default App;
