export default function Timespan(props) {
    return (
        <h5
            className={props.selectID === props.id ? 'selected' : null}
            id={props.id}
            onClick={props.handleClick}
        >
            {props.children}
        </h5>
    )
}