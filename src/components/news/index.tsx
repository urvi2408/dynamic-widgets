import { Card } from "antd";

const newsData = [
  {
    title: "Breaking News: Stock Market Hits Record High",
    description:
      "The stock market reached an all-time high today. Analysts are optimistic about the future.",
    source: "CNN",
    url: "#",
  },
  {
    title: "Technology Advancements in AI",
    description:
      "New breakthroughs in AI technology are revolutionizing industries like never before.",
    source: "TechCrunch",
    url: "#",
  },
  {
    title: "Global Warming and its Impact on Oceans",
    description:
      "New research shows that oceans are warming at an alarming rate, with serious environmental consequences.",
    source: "BBC News",
    url: "#",
  },
  {
    title: "NASA's New Space Mission Launched",
    description:
      "NASA successfully launched a new mission aimed at exploring distant planets.",
    source: "NASA",
    url: "#",
  },
];


const NewsWidget = () => {
  return (
    <Card
      title="Latest News Widget"
      bordered
      style={{
        width: 500,
        boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)",
      }}
    >     
      {newsData.map((news, _index) => (
        <Card
          title={news.title}
          bordered={false}
          style={{
            borderRadius: "6px",
            boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)",
          }}
          extra={
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          }
        >
          <p>{news.description}</p>
          <p>
            <i>Source: {news.source}</i>
          </p>
        </Card>
      ))}
    </Card>
  );
};

export default NewsWidget;
