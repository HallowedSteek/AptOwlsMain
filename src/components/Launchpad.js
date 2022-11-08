import "./form/form.css";

import { useEffect, useState } from "react";

import ContactDetails from "./form/ContactDetails";
import MintDetails from "./form/MintDetails";
import ProjectDetails from "./form/ProjectDetails";
import React from "react";
// import ky from "ky";

// eslint-disable-next-line

const Launchpad = () => {
  // const api = ky.create({
  //   prefixUrl: "http://localhost:5000",
  // });

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    projectName: "",
    supply: "",
    mintPrice: "",
    mintDate: "",
    whiteList: false,
    twitterLink: "",
    discordLink: "",
    mainContact: "",
    otherInfo: "",
  });

  // const sendData = async (event) => {
  //   event.preventDefault();
  //   const newData = {
  //     projectName: formData.projectName,
  //     supply: formData.supply,
  //     mintPrice: formData.mintPrice,
  //     mintDate: formData.mintDate,
  //     whiteList: formData.whiteList,
  //     twitterLink: formData.twitterLink,
  //     discordLink: formData.discordLink,
  //     mainContact: formData.mainContact,
  //     otherInfo: formData.otherInfo,
  //   };

  //   const response = await api
  //     .post("submit-data", {
  //       json: newData,
  //     })
  //     .json();
  //   return response;
  // };

  // const handleSubmit = (e) => {
  //   sendData(e);
  // };

  const validate =
    formData.projectName.length !== 0 &&
    formData.supply.length !== 0 &&
    formData.mintPrice.length !== 0 &&
    formData.mintDate.length !== 0 &&
    formData.twitterLink.length !== 0 &&
    formData.discordLink.length !== 0 &&
    formData.mainContact.length !== 0;

  const FormTitles = ["Project Details", "Mint Details", "Contact Details"];

  // useEffect(() => {
  //   console.log(formData.otherInfo);
  // }, [formData.otherInfo]);

  const PageDisplay = () => {
    if (page === 0) {
      return <ProjectDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <MintDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <ContactDetails formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          className="loading"
          style={{
            // eslint-disable-next-line eqeqeq
            width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1 className="title">[{FormTitles[page]}]</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            className={page === 0 ? "buttonPrevNo" : "buttonPrev"}
            // eslint-disable-next-line eqeqeq
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          ></button>
          <button
            className={
              page === FormTitles.length - 1 ? "buttonSubmit" : "buttonNext"
            }
            onClick={(e) => {
              if (page === FormTitles.length - 1) {
                if (validate) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                  // handleSubmit(e);
                } else {
                  alert("Please complete the form before submitting!");
                }
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {/* {page === FormTitles.length - 1 ? "Submit" : ""} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
