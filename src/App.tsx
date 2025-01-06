import { Card } from 'antd';
import './App.css';
import CustomGridLayout from './common/customGridLayout';

const App = () => {
  return (
    <>
      <CustomGridLayout
        className="custom-grid"
        layout={[
          { i: "a", x: 0, y: 0, w: 1, h: 2 },
          { i: "b", x: 1, y: 0, w: 3, h: 2 },
        ]}
        cols={12}
        rowHeight={30}
        width={1000}
      >
        <div key="a">Content A
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
          </Card>
        </div>
        <div key="b">Content B</div>
        <div key="c">Content C</div>
      </CustomGridLayout>
    </>
  );
};

export default App;
