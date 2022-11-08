import React from "react";

function ProjectDetails({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <label htmlFor="mainContact">Main Contact</label>
      <input
        id="mainContact"
        type="text"
        placeholder="Main Contact..."
        value={formData.mainContact}
        onChange={(event) =>
          setFormData({ ...formData, mainContact: event.target.value })
        }
      />

      <label htmlFor="otherInfo">Other Information</label>
      <textarea
        id="otherInfo"
        placeholder="Other Information..."
        value={formData.otherInfo}
        onChange={(event) =>
          setFormData({ ...formData, otherInfo: event.target.value })
        }
      />
     
    </div>
  );
}

export default ProjectDetails;
