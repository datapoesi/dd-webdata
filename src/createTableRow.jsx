function createTableRow(props) {
    return <tr>
        <td>{props.data.name}</td>
        {
            unavailableFeature(props.data.value) ?
                <td className="unavailableFeature">This feature is unavailable for your browser or device.</td> :
                <td>{props.data.value}</td>
        }
    </tr>
}

function unavailableFeature(value) {
    return value === null || value === undefined || value === false
}

export default createTableRow