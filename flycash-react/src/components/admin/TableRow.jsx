//import "../../../black/css/black-dashboard.css";
// import "../../App.css";

const TableRow = ({ name, email, phone, nid }) => {
  return (
    <tbody>
      <tr>
        <th>{name}</th>
        <th>{email}</th>
        <th className="text-center">{phone}</th>
        <th className="text-center">{nid}</th>
      </tr>
    </tbody>
  );
};

export default TableRow;
