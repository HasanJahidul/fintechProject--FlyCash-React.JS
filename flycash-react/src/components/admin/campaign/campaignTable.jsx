//import "../../../black/css/black-dashboard.css";
// import "../../App.css";

const CampaignTable = ({ title, sdate, edate, image }) => {
  return (
    <tbody>
      <tr>
        <th>{title}</th>
        <th>{sdate}</th>
        <th className="text-center">{edate}</th>
        <th className="text-center">{image}</th>
      </tr>
    </tbody>
  );
};

export default CampaignTable;
