import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CalenderWidget from "../../components/calender";
import WeatherWidget from "../../components/weather";
import GoogleMapsWidget from "../../components/googleMaps";
import NewsWidget from "../../components/news";
import StockMarketWidget from "../../components/stockMarket";
import QuotesWidget from "../../components/quotes";
import Toolbox from "../toolbox/toolbox";
import "./customGridLayout.css";

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
      <div
        className="layout-container"
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
                className="widget-container"
              >
                {widget?.component}
                <button
                  onClick={() => handleRemove(item.i)}
                  className="remove-button"
                >
                  &times;
                </button>
              </div>
            );
          })}
        </GridLayout>
      </div>
      <Toolbox toolboxItems={toolboxItems} onDragStart={handleDragStart} />
    </div>
  );
};

export default CustomGridLayout;
