function IdCard(props) {
    return (
        <div className="IdCard box">
            <img src={props.picture} alt="profile" />
            <div className="right">
            <strong>First name:</strong> {props.firstName} <br />
            <strong>Last name: </strong>{props.lastName} <br />
            <strong>Gender: </strong>{props.gender} <br />
            <strong>Height: </strong>{props.height} <br />
            <strong>Birth: </strong>{props.birth.toDateString()} <br />
            </div>
        </div>
    )
}

export default IdCard;