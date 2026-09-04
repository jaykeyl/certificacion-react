interface SaludoProps {
    name: string;
}

const Saludo = (props:SaludoProps) => {
    if(props.name === "Tati") {
        return <p> Hola {props.name}!! </p>
    }
    return <p> No eres Tati :o </p>
    
}

export default Saludo;