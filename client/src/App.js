import React, { useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

const App = () => {
  const [response, setResponse] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();

  const handleListen = () => {
    SpeechRecognition.startListening();
  };

  const handleSend = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/process-voice', { text: transcript });
      setResponse(res.data.response);
      speak({ text: res.data.response }); // Speak the response
      resetTranscript();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>AI Voice Assistant</h1>
      <button onClick={handleListen}>Start Listening</button>
      <p>{transcript}</p>
      <button onClick={handleSend}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default App;