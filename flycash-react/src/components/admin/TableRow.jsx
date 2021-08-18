//import "../../../black/css/black-dashboard.css";
// import "../../App.css";

import { Link } from "react-router-dom";

const TableRow = ({ name, email, phone, nid }) => {
  return (
    <tbody>
      <tr>
        <th>{name}</th>
        <th>{email}</th>
        <th className="text-center">{phone}</th>
        <th className="text-center">{nid}</th>
        <th className="btn btn-fill btn-primary">
          <Link to="/customer-dashboard">
            <i className="tim-icons icon-chart-pie-36"></i>
            <p>Details</p>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default TableRow;
