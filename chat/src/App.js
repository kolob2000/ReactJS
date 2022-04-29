import './App.scss';
import Message from "./components/Message";

const message = 'Super message!'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Message message={message}/>
            </header>
        </div>
    );
}

export default App;
