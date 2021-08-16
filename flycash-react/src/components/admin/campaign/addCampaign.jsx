import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";

import campaignPNG from "../../../black/img/admin/campaign.png";

const AddCampaign = (props) => {
  const [title, setTitle] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [image, setImage] = useState("");

  async function addCampaign() {
    console.warn(title, image, sdate, edate);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);

    formData.append("sdate", sdate);

    formData.append("edate", edate);
    let result = await fetch("http://localhost:8000/api/admin/addCampaign", {
      method: "POST",
      body: formData,
    });
    // alert(result.message);

    console.log(result.message);
    console.log(result.status);
  }

  return (
    <div className="wrapper">
      <AdminsSidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-body">
                  <p className="card-text">
                    <div className="author">
                      <div className="block block-one"></div>
                      <div className="block block-two"></div>
                      <div className="block block-three"></div>
                      <div className="block block-four"></div>

                      <a href="#">
                        <img
                          className="avatar"
                          src={campaignPNG}
                          alt="Campaign"
                        ></img>
                      </a>
                      <h3>Add Campaign</h3>
                    </div>
                  </p>

                  <label>{props.numberType} Campaign Title</label>
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    className="form-control"
                  ></input>

                  <label>Start Date</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-calendar-60"></i>
                      </div>
                    </div>
                    <input
                      type="date"
                      onChange={(e) => setSdate(e.target.value)}
                      name="sdate"
                      class="form-control"
                      placeholder="Start Date"
                    ></input>
                  </div>

                  <label>End Date</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-calendar-60"></i>
                      </div>
                    </div>
                    <input
                      type="date"
                      onChange={(e) => setEdate(e.target.value)}
                      name="edate"
                      class="form-control"
                      placeholder="End Date"
                    ></input>
                  </div>

                  <label>Add Image File</label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.image)}
                    className="form-control"
                  ></input>
                </div>

                <div class="card-footer">
                  <button
                    onClick={addCampaign}
                    type="submit"
                    className="btn btn-fill btn-primary"
                  >
                    Add
                  </button>
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

export default AddCampaign;
