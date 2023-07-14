import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "./OfficeDesigner.css";

const OfficeDesigner = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [selectedFurniture, setSelectedFurniture] = useState([]);
  const [officeData, setOfficeData] = useState(null);

  const d3Container = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      length: parseFloat(length),
      width: parseFloat(width),
      height: parseFloat(height),
      furniture: selectedFurniture,
    };
    setOfficeData(formData);
    setLength("");
    setWidth("");
    setHeight("");
    setSelectedFurniture([]);
  };

  const handleFurnitureChange = (event) => {
    const { value } = event.target;
    setSelectedFurniture((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    if (officeData && d3Container.current) {
      const scaleFactor = Math.min(800 / officeData.length, 600 / officeData.width);

      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();

      const scaledWidth = officeData.length * scaleFactor;
      const scaledHeight = officeData.width * scaleFactor;

      svg.attr("width", scaledWidth).attr("height", scaledHeight);

      const furniture = generateLayout(scaleFactor);
      svg.selectAll("g").data(furniture).join("g").attr("transform", (d) => `translate(${d.x}, ${d.y})`).each(function (d) {
        d3.select(this).append("rect").attr("width", d.width).attr("height", d.height).attr("fill", d.fill);
      });
    }
  }, [officeData]);

  const generateLayout = (scaleFactor) => {
    if (!officeData) return [];

    const items = [];
    const gridWidth = Math.floor(officeData.length / 100);
    const gridHeight = Math.floor(officeData.width / 100);

    const deskWidth = 60;
    const deskHeight = 30;
    const chairWidth = 30;
    const chairHeight = 30;
    const cabinetWidth = 40;
    const cabinetHeight = 60;

    for (let i = 0; i < gridHeight; i++) {
      for (let j = 0; j < gridWidth; j++) {
        const x = j * 100 * scaleFactor;
        const y = i * 100 * scaleFactor;

        if (selectedFurniture.includes("desk")) {
          items.push({
            x: x + 10 * scaleFactor,
            y: y + 10 * scaleFactor,
            width: deskWidth * scaleFactor,
            height: deskHeight * scaleFactor,
            fill: "blue",
          });
        }
        if (selectedFurniture.includes("chair")) {
          items.push({
            x: x + (10 + deskWidth + 10) * scaleFactor,
            y: y + 10 * scaleFactor,
            width: chairWidth * scaleFactor,
            height: chairHeight * scaleFactor,
            fill:"green",
});
}
if (selectedFurniture.includes("cabinet")) {
items.push({
x: x + (10 + deskWidth + 10 + chairWidth + 10) * scaleFactor,
y: y + 10 * scaleFactor,
width: cabinetWidth * scaleFactor,
height: cabinetHeight * scaleFactor,
fill: "purple",
});
}
}
}
return items;
};

return (
<div className="office-designer">
<form className="office-input-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          type="number"
                placeholder="Width"
      value={width}
      onChange={(e) => setWidth(e.target.value)}
    />
    <input
      type="number"
      placeholder="Height"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
    />
    <div>
      <label>
        <input
          type="checkbox"
          value="desk"
          checked={selectedFurniture.includes("desk")}
          onChange={handleFurnitureChange}
        />
        Desk
      </label>
      <label>
        <input
          type="checkbox"
          value="chair"
          checked={selectedFurniture.includes("chair")}
          onChange={handleFurnitureChange}
        />
        Chair
      </label>
      <label>
        <input
          type="checkbox"
          value="cabinet"
          checked={selectedFurniture.includes("cabinet")}
          onChange={handleFurnitureChange}
        />
        Cabinet
      </label>
    </div>
    <button type="submit">Generate Layout</button>
  </form>
  {officeData && (
    <div className="layout-generator">
      <svg ref={d3Container}></svg>
    </div>
  )}
</div>
);
};

export default OfficeDesigner;
