import styled from '@emotion/styled';
import { colores } from './color';

// todos los componentes pueden recibir props
export const InputSubmit = styled.input`
    background-color: ${ colores.primary };
    border: none;
    width: 100%;
    padding: 10px;
    color: ${ colores.white };
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;

    &:hover{
        background-color: ${ colores.secondary };
        cursor: pointer;
    }
`;
