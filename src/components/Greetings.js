function Greetings(props) {
    const lang = props.lang;
    return (
        <div>
            {lang === "de" && <p>Hallo {props.children}</p>}
            {lang === "en" && <p>Hello {props.children}</p>}
            {lang === "es" && <p>Hola {props.children}</p>}
            {lang === "fr" && <p>Bonjour {props.children}</p>}

        </div>
    )
}

export default Greetings;