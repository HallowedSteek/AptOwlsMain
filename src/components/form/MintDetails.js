import React from "react";

function MintDetails({ formData, setFormData }) {
  const [checked, setChecked] = React.useState(false);

  function whitelist() {
    setChecked((prev) => !prev);
  }

  return (
    <div className="sign-up-container">
      <label htmlFor="supply">Supply</label>
      <input
        id="supply"
        type="text"
        placeholder="Supply..."
        value={formData.supply}
        onChange={(event) =>
          setFormData({ ...formData, supply: event.target.value })
        }
      />
      <label htmlFor="mintPrice">Mint Price</label>
      <input
        id="mintPrice"
        type="text"
        placeholder="Mint Price..."
        value={formData.mintPrice}
        onChange={(event) =>
          setFormData({ ...formData, mintPrice: event.target.value })
        }
      />

      <label htmlFor="mintDate">Mint Date</label>
      <input
        id="mintDate"
        type="text"
        placeholder="Mint Date..."
        value={formData.mintDate}
        onChange={(event) =>
          setFormData({ ...formData, mintDate: event.target.value })
        }
      />

      <label className="wlLabel" htmlFor="whitelist">
        whitelist
        <input
          id="whitelist"
          name="isWhitelist"
          type="checkbox"
          checked={checked}
          onClick={whitelist}
          onChange={(event) => {
            setFormData({ ...formData, whiteList: checked ? true : false });
          }}
        />
      </label>
    </div>
  );
}

export default MintDetails;
