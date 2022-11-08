import React from "react";

function ProjectDetails({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <label htmlFor="projectName">Project Name</label>
      <input
        id="projectName"
        type="text"
        placeholder="Project Name..."
        value={formData.projectName}
        onChange={(event) =>
          setFormData({ ...formData, projectName: event.target.value })
        }
      />

      <label htmlFor="twitterLink">Twitter</label>
      <input
        id="twitterLink"
        type="text"
        placeholder="Twitter Link... "
        value={formData.twitterLink}
        onChange={(event) =>
          setFormData({ ...formData, twitterLink: event.target.value })
        }
      />

      <label htmlFor="discordLink">Discord </label>
      <input
        id="discordLink"
        type="text"
        placeholder="Discord Link..."
        value={formData.discordLink}
        onChange={(event) =>
          setFormData({ ...formData, discordLink: event.target.value })
        }
      />
    </div>
  );
}

export default ProjectDetails;
