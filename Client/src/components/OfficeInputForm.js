import React, { useState } from "react";
import "./OfficeInputForm.css";

const OfficeInputForm = ({ onSubmit }) => {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [furniture, setFurniture] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ length, width, height, furniture });
    };
  
    const handleFurnitureChange = (e) => {
      const selectedFurniture = e.target.value;
      if (furniture.includes(selectedFurniture)) {
        setFurniture(furniture.filter((item) => item !== selectedFurniture));
      } else {
        setFurniture([...furniture, selectedFurniture]);
      }
    };
  
    return (
      <form className="office-input-form" onSubmit={handleSubmit}>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <div className="furniture-selection">
          <label>
            <input
              type="checkbox"
              value="desk"
              onChange={handleFurnitureChange}
            />
            Desk
          </label>
          <label>
            <input
              type="checkbox"
              value="chair"
              onChange={handleFurnitureChange}
            />
            Chair
          </label>
          <label>
            <input
              type="checkbox"
              value="cabinet"
              onChange={handleFurnitureChange}
            />
            Cabinet
          </label>
        </div>
        <button type="submit">Generate Layout</button>
      </form>
    );
  };
  
  export default OfficeInputForm;
  