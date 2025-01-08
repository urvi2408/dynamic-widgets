import { Card, Image } from "antd";
import quoteImg from "../../assets/images.jpeg";

const QuotesWidget = () => {
  return (
    <Card
      title="Quotes Widget"
      bordered
      style={{
        width: 300,
        borderRadius: "6px",
        boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)",
      }}
    >
      <Image src={quoteImg} alt="Quote" />
    </Card>
  );
};

export default QuotesWidget;
