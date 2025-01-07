import React from "react";
import { Card, Col, Row, Typography } from "antd";

const newsData = [
  {
    title: "Breaking News: Stock Market Hits Record High",
    description: "The stock market reached an all-time high today. Analysts are optimistic about the future.",
    source: "CNN",
    url: "#",
  },
  {
    title: "Technology Advancements in AI",
    description: "New breakthroughs in AI technology are revolutionizing industries like never before.",
    source: "TechCrunch",
    url: "#",
  },
  {
    title: "Global Warming and its Impact on Oceans",
    description: "New research shows that oceans are warming at an alarming rate, with serious environmental consequences.",
    source: "BBC News",
    url: "#",
  },
  {
    title: "NASA's New Space Mission Launched",
    description: "NASA successfully launched a new mission aimed at exploring distant planets.",
    source: "NASA",
    url: "#",
  },
];

const { Title } = Typography;

const NewsWidget: React.FC = () => {
  return (
    <div>
      <Title level={4}>Latest News</Title>
      <Row gutter={[16, 16]}>
        {newsData.map((news, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              title={news.title}
              bordered={false}
              extra={<a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>}
            >
              <p>{news.description}</p>
              <p><i>Source: {news.source}</i></p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsWidget;
