import CustomGridLayout from "./common/customGridLayout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import CalenderWidget from "./components/calender";
import WeatherWidget from "./components/weather";
import styled from "styled-components";

const App = () => {
  const GridItemWrapper = styled.div`
    background: #f5f5f5;
    height: 100%;
  `;

  const GridItemContent = styled.div`
    padding: 8px;
  `;

  const Root = styled.div`
    padding: 16px;
  `;

  return (
    <Root>
      <CustomGridLayout
        className="layout"
        layout={[
          { i: "a", x: 0, y: 0, w: 1, h: 1 },
          { i: "b", x: 1, y: 0, w: 1, h: 1 },
        ]}
        cols={2}
        rowHeight={50}
        width={2000}
      >
        <GridItemWrapper key="a">
          <GridItemContent>
            <CalenderWidget />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="b">
          <GridItemContent>
            <WeatherWidget />
          </GridItemContent>
        </GridItemWrapper>
      </CustomGridLayout>
    </Root>
  );
};

export default App;
