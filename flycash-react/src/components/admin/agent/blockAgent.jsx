import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
import TableRow from "../TableRow";

const BlockAgent = () => {
  const [agentList, setAllAgent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/admin/agentList").then((response) => {
      response.json().then((result) => {
        setAllAgent(result);
      });
    });
  }, []);

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
                    <h1 class="card-title" align="center">
                      {" "}
                      Agent List
                    </h1>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive-lg">
                      <table class="table tablesorter " id="">
                        <thead class=" text-primary">
                          <tr>
                            <th class="text-center">name</th>
                            <th class="text-center">Email</th>

                            <th class="text-center">Phone </th>
                            <th class="text-center">Nid</th>
                            <th class="text-center">Action</th>
                          </tr>
                        </thead>

                        {agentList.map((u) => {
                          return <TableRow key={u.id} {...u} />;
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default BlockAgent;
