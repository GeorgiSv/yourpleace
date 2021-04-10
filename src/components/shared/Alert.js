function Alert(props) {

    return (
        <div className={"alert " + props.status}>
            <h3>{props.message}</h3>
        </div>
    );
}

export default Alert