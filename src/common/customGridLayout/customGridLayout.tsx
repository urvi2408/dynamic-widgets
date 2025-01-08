import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Toolbox from "../toolbox/toolbox";
import "./customGridLayout.css";
import widgetConfigs from "../../components/dashboard/widgetConfig";
import { useGridLayout } from "./useCustomGridLayout";

const CustomGridLayout = () => {
  const {
    layout,
    toolboxItems,
    handleDragStart,
    handleDropItem,
    handleRemove,
    handleDragOver,
  } = useGridLayout();

  return (
    <div style={{ display: "flex", gap:"24px" }} onClick={(e) => e.stopPropagation()}>
      <div
        className="layout-container"
        onClick={(e) => e.stopPropagation()}
        onDragOver={handleDragOver}
        onDrop={handleDropItem}
      >
        <GridLayout
          className="layout"
          layout={layout}
          // cols={12}
          // rowHeight={50}
          // width={1000}
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
                onClick={(e) => e.stopPropagation()}
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
