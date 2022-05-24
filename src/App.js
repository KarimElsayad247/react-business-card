import './App.css';

import Content from './components/Content';

import Iruma from "./images/iruma.png"

function App() {
    return (
        <div className="app">
            <img src={Iruma} alt="developer" className="picture" />
            <Content />
        </div>
    )
}

export default App;
