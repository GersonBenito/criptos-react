import styled from '@emotion/styled';
import { colores } from './color';

// todos los componentes pueden recibir props
export const Label = styled.label`
    color: ${ colores.white };
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

export const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;