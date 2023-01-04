export default function Timespan(props) {
    return (
        <h5
            className={props.selected ? 'selected' : null}
            id={props.id}
            onClick={props.toggle}
        >
            {props.text}
        </h5>
    )
}