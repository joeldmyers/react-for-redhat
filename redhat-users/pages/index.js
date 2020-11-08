import { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import Layout from "../components/layout";
import Link from "next/link";

const Home = () => {
  const [data, setData] = useState([]);
  const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

  const sortDataByNameDescending = (data) => {
    return data.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  };

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = sortDataByNameDescending(data);
        console.log(sortedData);
        setData(sortedData);
      });
  }, []);

  return (
    <Layout>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => {
          return (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Link href={`/users/${item.id}`}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </Link>
                }
                title={<Link href={`/users/${item.id}`}>{item.name}</Link>}
                description={`Username: ${item.username}, Email: ${item.email}, Address: ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
              />
              <Link href={`/users/${item.id}`}>See Details</Link>
            </List.Item>
          );
        }}
      />
    </Layout>
  );
};

export default Home;
