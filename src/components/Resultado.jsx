import styled from '@emotion/styled'
export const Resultado = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion;
    const url = `https://cryptocompare.com/${IMAGEURL}`;
    return (
        <Result>
            <Imagen src={url} alt="criptomoneda" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Result>
    )
}

const Result = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`;

const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`;

const Texto = styled.p`
    font-size: 15px;
    span{
        font-weight: 700;
    }
`;
