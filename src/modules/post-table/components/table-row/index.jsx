import Icon, { iconTypes } from '@components/icon';

export default function TableRow({
  caption,
  date,
  status,
  likes,
  comments,
  share,
}) {
  const changeColorByStatusHandler = (status) => {
    switch (status) {
      case 'Published':
        return 'status-published';

      case 'Drafted':
        return 'status-drafted';

      default:
        return '';
    }
  };

  return (
    <tr>
      <td>{caption}</td>
      <td>{date}</td>
      <td className={changeColorByStatusHandler(status)}>{status}</td>
      <td>{likes}</td>
      <td>{comments}</td>
      <td>{share}</td>
      <td>
        <button className='table-icon'>
          <Icon type={iconTypes.more} />
        </button>
      </td>
    </tr>
  );
}
