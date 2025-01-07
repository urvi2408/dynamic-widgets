import CustomGridLayout from "./common/customGridLayout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import CalenderWidget from "./components/calender";
import WeatherWidget from "./components/weather";
import styled from "styled-components";
import GoogleMapsWidget from "./components/googleMaps";
import NewsWidget from "./components/news";
import StockMarketWidget from "./components/stockMarket";
import QuotesWidget from "./components/quotes";

const App = () => {
  const GridItemWrapper = styled.div`
    background: #f5f5f5;
    height: 100%; /* Ensures it takes the full height of the grid item */
    display: flex; /* Ensures child content is properly aligned */
    justify-content: center;
    align-items: center;
    border-radius: 8px; /* Optional: Adds rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow for visual appeal */
  `;

  const GridItemContent = styled.div`
    padding: 8px;
    width: 100%;
    height: 100%; /* Matches the parent wrapper's height */
    display: flex; /* Ensures child content is properly aligned */
    justify-content: center;
    align-items: center;
  `;

  const Root = styled.div`
    padding: 16px;
  `;

  const widgetConfigs = [
    { key: "calenderWidget", component: <CalenderWidget />, x: 0, y: 0, w: 2, h: 2 },
    { key: "weatherWidget", component: <WeatherWidget />, x: 2, y: 0, w: 2, h: 2 },
    { key: "googleMapsWidget", component: <GoogleMapsWidget />, x: 4, y: 0, w: 2, h: 2 },
    { key: "newsWidget", component: <NewsWidget />, x: 0, y: 2, w: 2, h: 2 },
    { key: "stockMarketWidget", component: <StockMarketWidget />, x: 2, y: 2, w: 2, h: 2 },
    { key: "quotesWidget", component: <QuotesWidget />, x: 4, y: 2, w: 2, h: 2 },
  ];
  
  return (
    <Root>
    <CustomGridLayout
      className="layout"
      layout={widgetConfigs.map(({ key, x, y, w, h }) => ({ i: key, x, y, w, h }))}
      cols={12}
      rowHeight={30}
      width={1300}
    >
      {widgetConfigs.map(({ key, component }) => (
        <GridItemWrapper key={key}>
          <GridItemContent>{component}</GridItemContent>
        </GridItemWrapper>
      ))}
    </CustomGridLayout>
  </Root>
  );
};

export default App;
