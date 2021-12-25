import { useState, useEffect } from 'react';
import { Contenedor, Heading, Imagen, } from './styled/app';
import { Formulario } from './components/Formulario';
import imagenCripto from './img/imagen-criptos.png'
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';

const App = () =>{

  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  const cotizarCriptomoneda = async(moneda, criptomoneda) => {
    setCargando(true);
    setCotizacion({});
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);

    setCargando(false);
  }

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const {moneda, criptomoneda} = monedas;
      cotizarCriptomoneda(moneda, criptomoneda);
    }
  },[monedas])

  return (
    <Contenedor>
      <Imagen src={imagenCripto} alt='imagen criptomonedas' />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner /> }
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  )
}

export default App;
