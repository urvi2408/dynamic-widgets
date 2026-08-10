import { useState } from "react";
import widgetConfigs from "../../components/dashboard/widgetConfig";
import { Layout } from "react-grid-layout";

type GridItem = Layout;

export const useGridLayout = () => {
  const [layout, setLayout] = useState<GridItem[]>([]);
  const [toolboxItems, setToolboxItems] = useState(widgetConfigs);

  const handleDragStart = (item: typeof widgetConfigs[0]) => {
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

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  return {
    layout,
    toolboxItems,
    handleDragStart,
    handleDropItem,
    handleRemove,
    handleDragOver,
    handleLayoutChange,
  };
};
