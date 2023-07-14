import React, { useEffect } from "react";
import { fabric } from "fabric";
import "./LayoutGenerator.css";

const LayoutGenerator = ({ officeData }) => {
    const { length, width, height, furniture } = officeData;
    const canvasRef = React.createRef();
  
    useEffect(() => {
      if (length && width && height && furniture.length > 0) {
        generateLayout();
      }
    }, [officeData]);
  
    const generateLayout = () => {
      const canvas = new fabric.Canvas(canvasRef.current);
  
      // Calculate the scale factor for the canvas
      const scaleFactor = Math.min(
        canvasRef.current.clientWidth / length,
        canvasRef.current.clientHeight / width
      );
  
      // Draw the office space
      const officeSpace = new fabric.Rect({
        left: 0,
        top: 0,
        width: length * scaleFactor,
        height: width * scaleFactor,
        fill: "white",
        strokeWidth: 2,
        stroke: "black",
      });
      canvas.add(officeSpace);
  
      // Create furniture objects and position them within the office space
      const furnitureDimensions = {
        desk: { width: 60, height: 30 },
        chair: { width: 20, height: 20 },
        cabinet: { width: 40, height: 20 },
      };
  
      let xPos = 10;
      let yPos = 10;
  
      furniture.forEach((item) => {
        const furnitureItem = new fabric.Rect({
          left: xPos * scaleFactor,
          top: yPos * scaleFactor,
          width: furnitureDimensions[item].width * scaleFactor,
          height: furnitureDimensions[item].height * scaleFactor,
          fill: "blue",
          strokeWidth: 1,
          stroke: "black",
          selectable: true,
        });
  
        canvas.add(furnitureItem);
  
        // Simple grid positioning algorithm
        xPos += furnitureDimensions[item].width + 10;
        if (xPos > length - furnitureDimensions[item].width) {
          xPos = 10;
          yPos += furnitureDimensions[item].height + 10;
        }
      });
    };
  
    return (
      <div className="layout-generator">
        <canvas ref={canvasRef} width="800" height="600" />
      </div>
    );
  };
  
  export default LayoutGenerator;
  