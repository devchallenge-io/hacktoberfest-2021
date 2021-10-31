import "./styles.css";

export default function CurrentCard(props) {
    return (
        <div className="currentCard-container" >
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}