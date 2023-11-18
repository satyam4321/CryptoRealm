import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment/moment";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;
const imageArray = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvEo2cKClBykrgJ0m8izSb8usTFffla9N7w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5etruSPsBpxz7uH7Uwb7BACVE8XNJom62aA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHlSLcB_KEfoG3TIRq_pQus9oXdjh9ofnBQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuElC6NVd_sbvq5gfm0ohETkXVhkkcc6e4pw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgAH4z3KucxF9k4vMWY3FWenNgzMxsLk4Kg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiwUBIaVnjmndrYi5e6qoRGww7F1oidtlKA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTyr6njioHvwXYPfZwWRFNRlyIo-L4EK_Kg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWynzv7NDgwhhR7EhXzlbUbEUDuoFpMzvyYA&usqp=CAU",
];
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const count = simplified ? 4 : 8;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: count,
  });
  if (isFetching) return <Loader />;

  console.log(cryptoNews);
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews?.articles.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="blank" rel="noreferrer">
                <div className="news-image-container">
                  <img src={imageArray[i]} alt="demo-img" />
                </div>

                <Title level={4}>{news.title}</Title>
                <div className="provider-container">
                  <div>
                    <Text className="provider-name">
                      {news?.publisher?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.published_date).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
