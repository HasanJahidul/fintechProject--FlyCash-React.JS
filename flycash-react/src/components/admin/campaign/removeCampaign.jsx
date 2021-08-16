import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";

import removePNG from "../../../black/img/admin/remove.png";
const RemoveCampaign = () => {
  return (
    <div>
      <div className="wrapper">
        <AdminsSidebar />
        <div className="main-panel ps">
          <NavBar />
          <div className="content">
            <div class="row" style={{ right: "500px" }}>
              <div class="col-md-12">
                <div class="card ">
                  <div class="card-header">
                    <img
                      align="center"
                      className="avatar"
                      src={removePNG}
                      alt="Campaign"
                    ></img>
                    <h1 class="card-title" align="center">
                      {" "}
                      Remove Campaign
                    </h1>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive-lg">
                      <table class="table tablesorter " id="">
                        <thead class=" text-primary">
                          <tr>
                            <th>Campaign ID</th>
                            <th class="text-center">Campaign Name</th>
                            <th class="text-center">Portfolio</th>
                            <th class="text-center">Action</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RemoveCampaign;
