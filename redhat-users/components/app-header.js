import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <Link href="/">Users Home</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
