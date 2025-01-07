import React from "react";
import "./toolbox.css";
import widgetConfigs from "../../components/dashboard/widgetConfig";

const Toolbox: React.FC<{
  toolboxItems: typeof widgetConfigs;
  onDragStart: (item: (typeof widgetConfigs)[0]) => void;
}> = ({ toolboxItems, onDragStart }) => {
  return (
    <div className="toolbox">
      <h3>Toolbox</h3>
      {toolboxItems.map((item) => (
        <div
          key={item.key}
          className="toolbox-item"
          draggable
          onDragStart={() => onDragStart(item)}
        >
          {item.key}
        </div>
      ))}
    </div>
  );
};

export default Toolbox;
