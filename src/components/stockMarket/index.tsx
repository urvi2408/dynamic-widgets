import { useState, useEffect } from "react";
import { Card, Table, Tag } from "antd";

const StockMarketWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock API call
    const fetchStockData = async () => {
      const response = [
        { symbol: "AAPL", company: "Apple Inc.", price: 150.75, change: 1.2 },
        {
          symbol: "GOOGL",
          company: "Alphabet Inc.",
          price: 2803.89,
          change: -0.5,
        },
        {
          symbol: "AMZN",
          company: "Amazon.com Inc.",
          price: 3456.78,
          change: 0.8,
        },
      ];
      setData(response);
    };

    fetchStockData();
  }, []);

  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a: any, b: any) => a.price - b.price,
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
      render: (change: number) => (
        <span style={{ color: change >= 0 ? "green" : "red" }}>
          {change > 0 ? "+" : ""}
          {change}%
        </span>
      ),
    },
  ];

  return (
    <Card
        title="Stock Market Widget"
        bordered
        style={{
          width: 500,
          borderRadius: "6px",
          boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Table
          dataSource={data}
          columns={columns}
          rowKey="symbol"
          pagination={{ pageSize: 5 }}
        />
      </Card>
  );
};

export default StockMarketWidget;
