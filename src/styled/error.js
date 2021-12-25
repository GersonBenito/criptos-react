import styled from '@emotion/styled';
import { colores } from './color';

// todos los componentes pueden recibir props
export const Texto = styled.div`
    background-color: ${ colores.error };
    color: ${ colores.white };
    padding: 15px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`;