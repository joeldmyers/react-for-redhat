import { Layout, Menu, Breadcrumb } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import AppHeader from "./app-header";
import AppFooter from "./app-footer";

const { Header, Content } = Layout;

const AppLayout = ({ children }) => {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link href="/">Users</Link>
          </Breadcrumb.Item>
          {uid && <Breadcrumb.Item key="2">User {uid}</Breadcrumb.Item>}
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 800 }}
        >
          {children}
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
