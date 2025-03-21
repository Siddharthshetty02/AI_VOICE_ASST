# AI Voice Assistant 🎤🤖

A full-stack AI voice assistant project built with **React** (front-end) and **Node.js** (back-end). This assistant accepts voice input, processes it using natural language processing (NLP), and responds with text or speech. Perfect for learning full-stack development and AI integration!

---

## 🚀 Features

- **Voice Input**: Speak to the assistant using your microphone.
- **Text-to-Speech**: The assistant responds with voice output.
- **AI-Powered Responses**: Uses OpenAI's GPT model for intelligent responses.
- **Full-Stack Architecture**: Combines a React front-end with a Node.js back-end.

---

## 🛠️ Tech Stack

- **Front-End**: React.js
- **Back-End**: Node.js, Express.js
- **AI/NLP**: OpenAI GPT (or any other NLP service)
- **Voice Processing**: Web Speech API, `react-speech-recognition`, `react-speech-kit`
- **Database**: None (can be extended to use MongoDB or Firebase for user data)

---

## 📦 Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2. **npm**: Comes bundled with Node.js.
3. **OpenAI API Key**: Sign up at [OpenAI](https://openai.com/api/) and get your API key.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository


git clone https://github.com/your-username/ai-voice-assistant.git
cd ai-voice-assistant
2. Set Up the Back-End
Navigate to the server folder:

bash
Copy
cd server
Install dependencies:

bash
Copy
npm install
Create a .env file in the server folder and add your OpenAI API key:

env
Copy
OPENAI_API_KEY=your_openai_api_key_here
Start the server:

bash
Copy
npm start
The server will run on http://localhost:5000.

3. Set Up the Front-End
Navigate to the client folder:

bash
Copy
cd ../client
Install dependencies:

bash
Copy
npm install
Start the React app:

bash
Copy
npm start
The app will open in your browser at http://localhost:3000.

🗂️ Project Structure
Copy
ai-voice-assistant/
├── client/                      # React Front-End
│   ├── public/                  # Static assets (e.g., index.html)
│   ├── src/                     # React source code
│   │   ├── App.js               # Main React component
│   │   ├── index.js             # Entry point for React app
│   │   └── index.css            # Optional CSS file
│   └── package.json             # Front-end dependencies and scripts
├── server/                      # Node.js Back-End
│   ├── index.js                 # Back-end server code
│   └── package.json             # Back-end dependencies and scripts
└── README.md                    # Project documentation
## 🎮 Usage
Open the app in your browser (http://localhost:3000).

Click the Start Listening button to activate the microphone.

Speak into the microphone (e.g., "What is the weather today?").

Click Send to process your voice input.

The assistant will respond with text and voice output.

## 🛠️ Extending the Project
Here are some ideas to extend the functionality of the AI voice assistant:

Add a Database: Use MongoDB or Firebase to store user preferences or conversation history.

Integrate APIs: Add support for third-party APIs (e.g., weather, news, or calendar).

Multi-Language Support: Use a translation API to support multiple languages.

Authentication: Add user authentication to personalize the assistant.

## 🐛 Troubleshooting
Common Issues
npm Install Fails:

Use npm install --legacy-peer-deps to bypass peer dependency conflicts.

Delete node_modules and package-lock.json, then run npm install again.

Microphone Not Working:

Ensure your browser has permission to access the microphone.

Use Chrome or Firefox for best compatibility.

OpenAI API Errors:

Verify that your API key is correct and has sufficient credits.

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Submit a pull request.

## 🙏 Acknowledgments
OpenAI for providing the GPT API.

React Speech Recognition for voice input.

React Speech Kit for text-to-speech.

## 📧 Contact
For questions or feedback, feel free to reach out:

Name: Siddharth Raghunatha Shetty

Email: siddharthshetty2032005@gmail.com

GitHub: https://github.com/Siddharthshetty02

# Author & Developer
 SIDDHARTH RAGHUNATHA SHETTY
