import CustomGridLayout from "./common/customGridLayout/customGridLayout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import CalenderWidget from "./components/calender";
import WeatherWidget from "./components/weather";
import "./App.css";
import GoogleMapsWidget from "./components/googleMaps";
import NewsWidget from "./components/news";
import StockMarketWidget from "./components/stockMarket";
import QuotesWidget from "./components/quotes";

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
        widgetConfigs={widgetConfigs}
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
