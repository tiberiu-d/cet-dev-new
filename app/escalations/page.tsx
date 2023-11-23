import EscaTable from "@/components/common/table/table";
import theme from "@/styles/themeConfig";
import { ConfigProvider } from "antd";

const EscalationsPage = () => {
  return (
    <ConfigProvider theme={theme}>
      <div>8784 Waxwing Parkway</div>
      <EscaTable />
    </ConfigProvider>
  );
};
export default EscalationsPage;
