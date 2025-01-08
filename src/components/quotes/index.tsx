import { Image } from "antd";
import React from "react";
import quoteImg from "../../assets/images.jpeg";

const QuotesWidget: React.FC = () => {
  return <Image src={quoteImg} alt="Quote" />;
};

export default QuotesWidget;
