import { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import Layout from "../components/layout";

const Users = () => {
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
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={`Username: ${item.username}, Email: ${item.email}, Address: ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
              />
            </List.Item>
          );
        }}
      />
    </Layout>
  );
};

export default Users;
