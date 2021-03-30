import arrayRyM from "./rickandmorty.json"
import Tarjeta from "./components/Tarjeta"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Header/>

      <div className="container">
        {
          arrayRyM.map(function (tarjeta, idx) {
            return(
              <div key={idx} className="tarjeta">
              <Tarjeta datoTarjeta = {tarjeta}/>
              </div>
            )
          })
        }
      </div>

      <Footer/>

    </div>
  );
}

export default App;
