import React from "react";
import { Container } from "../../components/shared";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logInRequesting } from "../../redux/actions";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const fieldStyle = css`
  border: none;
  outline: none;
  padding: 8px 16px;
  margin-bottom: 8px;
`;

const LogIn = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onFinish = (data) => {
    dispatch(logInRequesting(data.email, data.password));
  };

  return (
    <Container css={{ maxWidth: "400px" }}>
      <h1
        css={{
          fontFamily: "'Satisfy', cursive",
          textAlign: "center",
          marginBototm: "20px",
        }}
      >
        Log In
      </h1>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            css={fieldStyle}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            css={fieldStyle}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item css={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={auth.loading}
          >
            {auth.loading ? <Spin /> : "Log in"}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LogIn;
