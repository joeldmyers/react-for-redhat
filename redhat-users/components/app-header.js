import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">home</Menu.Item>
        <Menu.Item key="2">users</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
