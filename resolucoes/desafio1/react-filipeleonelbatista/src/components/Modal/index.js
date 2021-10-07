import * as Styled from "./styles";
import SelectInput from "../SelectInput";
import Input from "../Input";

const Modal = ({ data, isShow, handleClose }) => {
  const tipoFilme = [
    { key: "3D", value: "3D" },
    { key: "2D", value: "2D" },
  ];

  const diaSemana = [
    { key: "Segunda", value: "Segunda" },
    { key: "Terça", value: "Terça" },
    { key: "Quarta", value: "Quarta" },
    { key: "Quinta", value: "Quinta" },
    { key: "Sexta", value: "Sexta" },
    { key: "Sábado", value: "Sábado" },
    { key: "Domingo", value: "Domingo" },
  ];

  const horarios = [
    { key: "16:00", value: "16:00" },
    { key: "18:00", value: "18:00" },
    { key: "20:00", value: "20:00" },
    { key: "22:00", value: "22:00" },
  ];

  function handleReservar() {
    //Validar os campos
    //Enviar os dados pelo zap
    //Colocar um alert na tela informando que foi reservado
    handleClose();
  }

  if (!isShow) return null;
  console.log(data);
  return (
    <Styled.Overlay>
      <Styled.Container>
        <Styled.Movie
          style={{
            backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${data.backdrop})`,
          }}
        />
        <Styled.InformationContainer>
          <Styled.Title>{data.title}</Styled.Title>
          <Styled.Description>
            <strong>Lançamento em:</strong>
            {" " + new Date(data.dtLancamento).toLocaleDateString("pt-BR")}
          </Styled.Description>
          <Styled.Description>{data.description}</Styled.Description>

          <SelectInput
            id="tipo_filme"
            label="Tipo de exibição"
            options={tipoFilme}
          />
          <SelectInput
            id="dia_semana"
            label="Dia da semana"
            options={diaSemana}
          />

          <SelectInput id="horario" label="Horarios" options={horarios} />
          <Input id="nome" label="Nome completo" />
          <Input id="whatsapp" label="WhatsApp" />
          <Styled.Description>
            Os dados referentes a sua reserva poderão ser salvos no seu
            WhatsApp. Basta enviar a mensagem após clicar em reserve já.
          </Styled.Description>

          <Styled.CTAButton onClick={handleReservar}>
            Reserve já!
          </Styled.CTAButton>
        </Styled.InformationContainer>
      </Styled.Container>
    </Styled.Overlay>
  );
};

export default Modal;
