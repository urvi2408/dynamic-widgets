import CustomGridLayout from "./common/customGridLayout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import CalenderWidget from "./components/calender";
import WeatherWidget from "./components/weather";
// import GoogleMapsWidget from "./components/googleMaps";
// import NewsWidget from "./components/news";
// import StockMarketWidget from "./components/stockMarket";
// import QuotesWidget from "./components/quotes";

import "./App.css";

const App = () => {
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
  ];

  return (
    <div className="root">
      <CustomGridLayout
        className="layout"
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
      >
        {widgetConfigs.map(({ key, component }) => (
          <div className="grid-item-wrapper" key={key}>
            <div className="grid-item-content">{component}</div>
          </div>
        ))}
      </CustomGridLayout>
    </div>
  );
};

export default App;
