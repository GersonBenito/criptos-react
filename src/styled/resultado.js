import styled from '@emotion/styled';
import { colores } from './color';

// todos los componentes pueden recibir props
export const Result = styled.div`
    color: ${ colores.white };
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

export const Imagen = styled.img`
    display: block;
    width: 120px;
`;

export const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`;

export const Texto = styled.p`
    font-size: 15px;
    span{
        font-weight: 700;
    }
`;