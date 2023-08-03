
import './App.css';
import {Header} from './MyComponents/Header'
import {Main} from './MyComponents/Main'
import {Footer} from './MyComponents/Footer'
import { Reviews } from './MyComponents/Reviews'
import {Apply} from './MyComponents/Apply'

function App() {
  return (
    <>
    <Header />
    <Main />
    <Reviews/>
    <Apply/>
    <Footer/>
    </>
  );
}

export default App;
