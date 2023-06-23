import React, { useState } from "react";
import { Form, Input, Button, Tabs } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SolutionOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const StudentRegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Make API call to register student using the provided API endpoint
    // Replace 'apiEndpoint' with the actual API endpoint for student registration
    fetch("apiEndpoint", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Registration successful
          console.log("Registration successful");
          // Additional actions after successful registration
        } else {
          // Registration failed
          console.error("Registration failed");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setLoading(false);
      });
  };

  return (
    <div className="student-register-page">
      <div className="student-register-page__header">
        <h2 className="student-register-page__title">Student Registration</h2>
      </div>
      <Tabs
        className="student-register-page__tabs"
        defaultActiveKey="login"
        centered
      >
        <TabPane tab="Login" key="login">
          <Form
            className="student-register-page__form"
            name="student-login-form"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              className="student-register-page__form-item"
              label="Reg No"
              name="regNo"
              rules={[
                {
                  required: true,
                  message: "Please enter your regNo",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item
              className="student-register-page__form-item"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="student-register-page__button"
                type="primary"
                htmlType="submit"
                loading={loading}
                block
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Register" key="register">
          <Form
            className="student-register-page__form"
            name="student-register-form"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              className="student-register-page__form-item"
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item
              className="student-register-page__form-item"
              label="Registration Number"
              name="regNo"
              rules={[
                {
                  required: true,
                  message: "Please enter your registration number",
                },
              ]}
            >
              <Input
                prefix={<SolutionOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item
              className="student-register-page__form-item"
              label="Room Details"
              name="roomDetails"
              rules={[
                {
                  required: true,
                  message: "Please enter your room details",
                },
              ]}
            >
              <Input
                prefix={<HomeOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item
              className="student-register-page__form-item"
              label="Hostel Block Name"
              name="hostelBlockName"
              rules={[
                {
                  required: true,
                  message: "Please enter your hostel block name",
                },
              ]}
            >
              <Input
                prefix={<HomeOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item
              className="student-register-page__form-item"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter a password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                className="student-register-page__input"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="student-register-page__button"
                type="primary"
                htmlType="submit"
                loading={loading}
                block
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default StudentRegisterPage;
