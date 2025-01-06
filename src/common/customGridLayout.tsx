import { Card } from "antd";
import React from "react";
import GridLayout, { Layout } from "react-grid-layout";

type GridItem = Layout;

type CustomGridLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  layout: GridItem[];
  cols: number;
  rowHeight: number;
  width: number;
};

const CustomGridLayout: React.FC<CustomGridLayoutProps> = ({
  children,
  className,
  layout,
  cols,
  rowHeight,
  width,
}) => {
  const childArray = React.Children.toArray(children);

  return (
    <GridLayout
      className={className}
      layout={layout}
      cols={cols}
      rowHeight={rowHeight}
      width={width}
      isResizable // Enable resizing
      isDraggable // Enable dragging
          >
      {childArray.map((item, index) => (
        <div key={layout[index]?.i || index.toString()} data-grid={layout[index]}>  
          {item}
        </div>
      ))}
    </GridLayout>
  );
};

export default CustomGridLayout;
