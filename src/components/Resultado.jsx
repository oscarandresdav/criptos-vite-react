import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 100px;
`;

const Detalles = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Detalles>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Detalles>
        <Detalles>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Detalles>
        <Detalles>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Detalles>
        <Detalles>
          Última actualización: <span>{LASTUPDATE}</span>
        </Detalles>
      </div>
    </Contenedor>
  );
};

export default Resultado;
