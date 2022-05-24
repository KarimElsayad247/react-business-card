import './App.css';

import Content from './components/Content';
import Footer from './components/Footer';

import Iruma from "./images/iruma.png"

function App() {
    return (
        <div className="app">
            <img src={Iruma} alt="developer" className="picture" />
            <Content />
            <Footer />
        </div>
    )
}

export default App;
