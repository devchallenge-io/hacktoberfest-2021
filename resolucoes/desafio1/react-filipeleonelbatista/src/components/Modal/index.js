import { useState } from "react";
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

  const [tipoExibicao, setTipoExibicao] = useState("3D");
  const [diaDaSemana, setDiaDaSemana] = useState("Segunda");
  const [horario, setHorario] = useState("16:00");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [whatsApp, setWhatsApp] = useState("");

  function handleMaskPhoneNumber(value) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  }

  function handleReservar() {
    if (nomeCompleto === "" || whatsApp === "") {
      alert("Campos não preenchidos!");
      return;
    }

    let preco = 0.0;

    const precoNormalArray = ["Segunda", "Terça", "Quarta"];

    if (precoNormalArray.includes(diaDaSemana)) {
      preco = preco + 10.5;
    } else {
      preco = preco + 18.9;
    }

    if (tipoExibicao === "2D") {
      preco = preco + 5.5;
    } else {
      preco = preco + 10.1;
    }

    const uid = Math.random() * 1000000;

    const msg = `Olá ${nomeCompleto}!
    A reserva para o o filme *${data.title}* em ${tipoExibicao} foi efetuada com sucesso para ${diaDaSemana} às ${horario}hs.
    O preço do ingresso ficou em *${preco} R$* podendo ser pago em dinheiro ou cartão.
    Lembre-se de chegar 10 minutos antes e não perder o filme! ;-)

    O numero da sua reserva é *${uid}*. 

    Apresente junto ao caixa para confirmação.
    
    *Agradecemos a preferencia*.
    Em cartaz - Um cinema pertinho de você
    `;

    const url = `http://api.whatsapp.com/send?1=pt_br&phone=55${whatsApp.replace(
      /\D/g,
      ""
    )}&text=${encodeURI(msg)}`;

    window.open(url, "_blank");

    alert("Sua reserva foi efetuada com sucesso");
    handleClose();
  }

  if (!isShow) return null;
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
            value={tipoExibicao}
            onChange={(e) => setTipoExibicao(e.target.value)}
          />
          <SelectInput
            id="dia_semana"
            label="Dia da semana"
            options={diaSemana}
            value={diaDaSemana}
            onChange={(e) => setDiaDaSemana(e.target.value)}
          />

          <SelectInput
            id="horario"
            label="Horarios"
            options={horarios}
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
          <Input
            id="nome"
            label="Nome completo"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <Input
            id="whatsapp"
            label="WhatsApp"
            maxLength={15}
            value={whatsApp}
            onChange={(e) => setWhatsApp(handleMaskPhoneNumber(e.target.value))}
          />
          <Styled.Description>
            Os dados referentes a sua reserva poderão ser salvos no seu
            WhatsApp. Basta enviar a mensagem após clicar em reserve já.
          </Styled.Description>

          <Styled.CTAButton onClick={handleReservar}>
            Reserve já!
          </Styled.CTAButton>
          <Styled.CTAButton
            style={{ backgroundColor: "#666" }}
            onClick={handleClose}
          >
            Cancelar
          </Styled.CTAButton>
        </Styled.InformationContainer>
      </Styled.Container>
    </Styled.Overlay>
  );
};

export default Modal;
