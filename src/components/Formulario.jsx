import { useState, useEffect } from 'react';
import { InputSubmit } from '../styled/formulario';
import { monedas } from '../data/monedas';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import { Error } from './Error';

export const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    const consultarApi = async () =>{
        // uso de template string en la url, por si en el futuro se quiere hace dinamico el limite y la moneda
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`; 
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        const arrayCripto =  resultado.Data.map(cripto =>({ //usando retorno implicito
            id: cripto.CoinInfo.Name,
            nombre: cripto. CoinInfo.FullName
        }));

        setCriptos(arrayCripto);
    }

    useEffect(()=>{
        consultarApi();
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();

        if([moneda, criptomoneda].includes('')){
            setError(true);
            return 
        }

        setError(false);
        setMonedas({moneda, criptomoneda});
    }

    useEffect(()=>{
        if(moneda !== '' || criptomoneda !== ''){
            setError(false);
        }
    },[moneda, criptomoneda])

    return (
        <>
            { error && <Error>Todos los campos son obligatorios</Error> }  
            <form onSubmit={handleSubmit} >
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit 
                    type='submit'
                    value='Cotizar'
                />
            </form>
        </>
    )
}

