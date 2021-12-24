import styled from "@emotion/styled"
import { monedas } from "../data/monedas";
import { useSelectMonedas } from "../hooks/useSelectMonedas";

export const Formulario = () => {

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);

    console.log(moneda);
    return (
        <form>
            <SelectMonedas />
            <InputSubmit 
                type='submit'
                value='Cotizar'
            />
        </form>
    )
}

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;
