import React from "react";
import "./PropertyManager.css";
export const LayerProperty = ({ setRarity, deleteLayer }) => {
  return (
    <div className="property_container layer_container">
      <div className="property_item">
        <p>Layer Name</p>
        <input type="text" placeholder="Layer Name" />
      </div>
      <button className="export_button" onClick={() => setRarity(true)}>
        Rarity Settings
      </button>
      <button className="setting_button" onClick={() => deleteLayer()}>
        Layer Settings&nbsp;&times;
      </button>
    </div>
  );
};
