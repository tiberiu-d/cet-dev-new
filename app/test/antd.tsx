"use client";

// components
import { Form, Input, Select } from "antd";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// icons
import { SaveAllIcon } from "lucide-react";

// types
type CustomerType = {
  label: string;
  value: string;
};

type ColorType = {
  label: string;
  value: string;
  code: string;
};

type AntdFormProps = {
  customers: CustomerType[];
  colors: ColorType[];
};

const AntdForm = ({ customers, colors }: AntdFormProps) => {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  // onSubmit()
  const onSubmit = (values: any) => {
    console.log(values);
    form.resetFields();
  };

  return (
    <Card className="px-2 py-4">
      <CardHeader className="pb-4 px-2 pt-0 text-lg font-bold">
        New Escalation Level v1
      </CardHeader>
      <Form
        form={form}
        layout="horizontal"
        size="middle"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 18 }}
        style={{ width: "450px" }}
        onFinish={onSubmit}
      >
        <Card className="p-4 shadow-lg bg-slate-50">
          <Form.Item
            label="Customer Group"
            name={["ESCALATION_LEVEL", "GROUP_ID"]}
          >
            <Select options={customers} />
          </Form.Item>
          <Form.Item
            label="Escalation Level"
            name={["ESCALATION_LEVEL", "VALUE"]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Color" name={["ESCALATION_LEVEL", "LABEL"]}>
            <Select allowClear options={colors} />
          </Form.Item>
          <Form.Item
            label="Additional Details"
            name={["ESCALATION_LEVEL", "EXPLANATION"]}
          >
            <TextArea
              rows={2}
              placeholder="some explanation about the code"
              maxLength={100}
              allowClear
            />
          </Form.Item>
        </Card>
        <Separator />
        <div className="pt-4 pb-1 px-4 flex items-center justify-between">
          <Badge variant="outline">step 1 of 1</Badge>
          <Button variant="default" type="submit" className="flex items-center">
            <SaveAllIcon className="h-4 w-4 mr-4" />
            Save All
          </Button>
        </div>
      </Form>
    </Card>
  );
};
export default AntdForm;
