import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CalenderWidget from "../components/calender";
import WeatherWidget from "../components/weather";
import GoogleMapsWidget from "../components/googleMaps";
import NewsWidget from "../components/news";
import StockMarketWidget from "../components/stockMarket";
import QuotesWidget from "../components/quotes";

const widgetConfigs = [
  {
    key: "calenderWidget",
    component: <CalenderWidget />,
    x: 0,
    y: 0,
    w: 2,
    h: 2,
  },
  {
    key: "weatherWidget",
    component: <WeatherWidget />,
    x: 2,
    y: 0,
    w: 2,
    h: 2,
  },
  {
    key: "googleMapsWidget",
    component: <GoogleMapsWidget />,
    x: 2,
    y: 0,
    w: 2,
    h: 2,
  },
  {
    key: "newsWidget",
    component: <NewsWidget />,
    x: 2,
    y: 0,
    w: 2,
    h: 2,
  },
  {
    key: "stockMarketWidget",
    component: <StockMarketWidget />,
    x: 2,
    y: 0,
    w: 2,
    h: 2,
  },
  {
    key: "quotesWidget",
    component: <QuotesWidget />,
    x: 2,
    y: 0,
    w: 2,
    h: 2,
  },
];

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
          style={{
            padding: "10px",
            margin: "5px 0",
            border: "1px solid black",
            backgroundColor: "#f0f0f0",
            cursor: "grab",
          }}
        >
          {item.key}
        </div>
      ))}
    </div>
  );
};

const CustomGridLayout: React.FC = () => {
  const [layout, setLayout] = useState<GridItem[]>([]);
  const [toolboxItems, setToolboxItems] = useState(widgetConfigs);

  const handleDragStart = (item: (typeof widgetConfigs)[0]) => {
    window.localStorage.setItem("draggedWidget", JSON.stringify(item));
  };

  const handleDrop = (gridItem: GridItem) => {
    setLayout((prevLayout) => [...prevLayout, gridItem]);
    setToolboxItems((prevItems) =>
      prevItems.filter((toolboxItem) => toolboxItem.key !== gridItem.i)
    );
  };

  const handleRemove = (itemId: string) => {
    const removedItem = layout.find((item) => item.i === itemId);
    if (removedItem) {
      const widgetConfig = widgetConfigs.find(
        (config) => config.key === itemId
      );
      if (widgetConfig) {
        setToolboxItems((prevItems) => [...prevItems, widgetConfig]);
      }
    }
    setLayout((prevLayout) => prevLayout.filter((item) => item.i !== itemId));
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };
  const handleDropItem = (event: React.DragEvent) => {
    event.preventDefault();
    const itemData = window.localStorage.getItem("draggedWidget");
    if (itemData) {
      const item = JSON.parse(itemData);
      const gridItem = {
        i: item.key,
        x: Math.floor(event.clientX / (window.innerWidth / 12)),
        y: Math.floor(event.clientY / 50),
        w: item.w,
        h: item.h,
      };
      handleDrop(gridItem);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Toolbox toolboxItems={toolboxItems} onDragStart={handleDragStart} />
      <div
        style={{
          marginLeft: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          flexGrow: 1,
        }}
        onDragOver={handleDragOver}
        onDrop={handleDropItem}
      >
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={50}
          width={1000}
          isResizable
          isDraggable
        >
          {layout.map((item) => {
            const widget = widgetConfigs.find(
              (widget) => widget.key === item.i
            );
            return (
              <div
                key={item.i}
                data-grid={item}
                style={{
                  position: "relative",
                  border: "1px solid #ccc",
                  padding: "10px",
                  background: "#fafafa",
                  height: "100%",
                }}
              >
                {widget?.component}
                <button
                  onClick={() => handleRemove(item.i)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    background: "#fafafa",
                    color: "black",
                    border: "none",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>
              </div>
            );
          })}
        </GridLayout>
      </div>
    </div>
  );
};

export default CustomGridLayout;
