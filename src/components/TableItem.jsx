import './TableItem.css';


function TableItem(props) {

    const {pictureUrl, name, popularity, wonOscar, wonEmmy} = props.contacts
    return (
        <tr>
            <td className="img-container"><img className="img" src={pictureUrl} alt="Contact"></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td>
                {wonOscar? '🏆' : ''}
            </td>
            <td>
                {wonEmmy? '🏆' : ''}
            </td>
        </tr>
    );
}

export default TableItem;