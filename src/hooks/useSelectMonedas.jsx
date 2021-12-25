import { useState } from 'react'
import { Label, Select } from '../styled/select';

export const useSelectMonedas = (label, opcciones = []) => {

    const [state, setState] = useState('');

    const handleChange = ({target}) =>{
        setState(target.value);
    }
    
    const SelectMonedas = () =>(
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={handleChange}
            >
                <option value="">Seleccione</option>
                {
                    opcciones.map(opcion =>(
                        <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                    ))
                }
            </Select>
        </>
    )

    return [ state, SelectMonedas ];

}

