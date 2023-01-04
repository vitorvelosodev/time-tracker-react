export default function Timespan() {
    return (
        <h5
            className={time.selected ? 'selected' : null}
            id={time.id}
            onClick={() => toggleTimeSelection(time.id)}
        >
            {time.text}
        </h5>
    )
}