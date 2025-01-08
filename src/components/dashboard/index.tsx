import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./dashboard.css";
import widgetConfigs from "./widgetConfig";
import CustomGridLayout from "../../common/customGridLayout/customGridLayout";

const Dashboard = () => {
  return (
    <CustomGridLayout
        className="layout"
        onClick={(e) => e.stopPropagation()}
        layout={widgetConfigs.map(({ key, x, y, w, h }) => ({
          i: key,
          x,
          y,
          w,
          h,
        }))}
        cols={12}
        rowHeight={30}
        width={1300}
        widgetConfigs={widgetConfigs}
      >
        {widgetConfigs.map(({ key, component }) => (
          <div className="grid-item-wrapper" key={key}>
            <div className="grid-item-content">{component}</div>
          </div>
        ))}
      </CustomGridLayout>
  );
};

export default Dashboard;
