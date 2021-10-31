import "./styles.css";
import { FaClock } from 'react-icons/fa';

export default function ProgramCard(props) {
    return (
        <div className="ProgramCard-container" >
            <div className="program-info">
                <img src={props.src} alt={props.alt}/>
                <span>
                    <FaClock />
                    14:00 - 15:00
                </span>
            </div>
            <div className="program-details">
                <h3>{props.titulo}</h3>
                <p>Sala: {props.sala}</p>
                <p>Idioma: Português</p>
                <p>{props.horario}</p>
                <p>{props.duracao}</p>
                <p>{props.classicacao}</p>
            </div>
        </div>
    );
}