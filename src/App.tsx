import CustomGridLayout from "./common/customGridLayout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import CalenderWidget from "./components/calender";
import WeatherWidget from "./components/weather";
import styled from "styled-components";

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

  return (
    <Root>
      <CustomGridLayout
        className="layout"
        layout={[
          { i: "calenderWidget", x: 0, y: 0, w: 1, h: 1 },
          { i: "weatherWidget", x: 1, y: 0, w: 1, h: 1 },
        ]}
        cols={12}
        rowHeight={30}
        width={1000}
      >
        <GridItemWrapper key="calenderWidget">
          <GridItemContent>
            <CalenderWidget />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="weatherWidget">
          <GridItemContent>
            <WeatherWidget />
          </GridItemContent>
        </GridItemWrapper>
      </CustomGridLayout>
    </Root>
  );
};

export default App;
