import { Link } from "react-router-dom";
//import "../../../black/css/black-dashboard.css";
import "../../../App.css";
import logo from "../../../black/img/flycash.png";
const customersSidebar = () => {
  return (
    <div className="sidebar" data="green">
      <div className="sidebar-wrapper ps ps--active-y">
        <div className="logo">
          <img src={logo} alt=""></img>
          <Link to="#" className="simple-text logo-normal">
            Dashboard
          </Link>
        </div>

        <ul className="nav">
          <li>
            <Link to="{{ route('customer_home'">
              <i className="tim-icons icon-chart-pie-36"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link data-toggle="collapse" aria-expanded="true">
              <i className="fab fa-laravel"></i>
              <span className="nav-link-text">Transactions</span>
              <b className="caret mt-1"></b>
            </Link>

            <div className="collapse show">
              <ul className="nav pl-4">
                <li>
                  <Link to="#">
                    <i className="tim-icons icon-coins"></i>

                    <p>Add Money</p>
                  </Link>
                </li>
                <li>
                  <Link to="{{ route('customer_sendmoney'">
                    <i className="tim-icons icon-send"></i>
                    <p>Send Money</p>
                  </Link>
                </li>
                <li>
                  <Link to="{{ route('customer_cashout'">
                    <i className="tim-icons icon-money-coins"></i>
                    <p>Cash out</p>
                  </Link>
                </li>
                <li>
                  <Link to="{{ route('customer_paybill'">
                    <i className="tim-icons icon-credit-card"></i>
                    <p>Bill pay</p>
                  </Link>
                </li>

                <li>
                  <Link to="{{ route('customer_recharge'">
                    <i className="tim-icons icon-mobile"></i>
                    <p>Mobile Recharge</p>
                  </Link>
                </li>
                <li>
                  <Link to="{{ route('customer_transfermoney'">
                    <i className="tim-icons icon-bank"></i>
                    <p>Transfer Money</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="tim-icons icon-bus-front-12"></i>
                    <p>buy tickets</p>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="{{ route('customer_profile_edit')  }}">
              <i className="tim-icons icon-single-02"></i>
              <p>User Profile</p>
            </Link>
          </li>

          <li>
            <Link to="{{ route('pages.icons'">
              <i className="tim-icons icon-atom"></i>
              <p>Icons</p>
            </Link>
          </li>
          <li>
            <Link to="{{ route('pages.maps'">
              <i className="tim-icons icon-pin"></i>
              <p>Maps</p>
            </Link>
          </li>
          <li>
            <Link to="{{ route('pages.notifications'">
              <i className="tim-icons icon-bell-55"></i>
              <p>Notifications</p>
            </Link>
          </li>
          <li>
            <Link to="{{ route('pages.transactionlist'">
              <i className="tim-icons icon-notes"></i>
              <p>Transaction List</p>
            </Link>
          </li>
          <li>
            <Link to="{{ route('pages.typography'">
              <i className="tim-icons icon-align-center"></i>
              <p>Typography</p>
            </Link>
          </li>

          <li className=" ">
            <Link to="{{ route('pages.upgrade'">
              <i className="tim-icons icon-spaceship"></i>
              <p>Upgrade to PRO</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default customersSidebar;
