import Icon, {iconTypes} from "@components/icon";


export default function TableRow({ id, caption, date, status, likes, comments, share }) {
    return (
        <tr>
            <td>{caption}</td>
            <td>{date}</td>
            <td>{status}</td>
            <td>{likes}</td>
            <td>{comments}</td>
            <td>{share}</td>
            <td><button className="table-icon"><Icon type={iconTypes.more}/></button></td>
        </tr>
    );
}