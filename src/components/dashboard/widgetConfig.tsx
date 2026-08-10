import CalendarWidget from "../calender";
import GoogleMapsWidget from "../googleMaps";
import NewsWidget from "../news";
import QuotesWidget from "../quotes";
import StockMarketWidget from "../stockMarket";
import WeatherWidget from "../weather";

const widgetConfigs = [
  {
    key: "calenderWidget",
    component: <CalendarWidget />,
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
  // {
  //   key: "googleMapsWidget",
  //   component: <GoogleMapsWidget />,
  //   x: 2,
  //   y: 0,
  //   w: 2,
  //   h: 2,
  // },
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

export default widgetConfigs;
