import React, { useState } from 'react';
import CameraTesseract from 'tesseract-with-html5-camera/dist/lib';

function App() {
  const [text, setText] = useState('');

  const handleTakePhoto = (text) => {
      // Do stuff with recognized text...
      console.log('Recognize text: ', text);
      setText(text)
    }

    return (
      <>
        <p align="center"> Recognized Text - {text || '""'} </p>
        <CameraTesseract
          onTextRecognize = { (text) => { handleTakePhoto(text); } }
        />
      </>
    );
}

export default App;
