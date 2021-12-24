import { useState } from "react"
import styled from "@emotion/styled"
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

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;
