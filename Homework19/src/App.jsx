import { Button, Form, Input, Typography, Card, Flex } from "antd";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [desSub, setDesSub] = useState("");
  const [nameSub, setNameSub] = useState("");
  const [sub, setSub] = useState(false);

  function handleSubmit() {
    setDesSub(des);
    setNameSub(name);
    setName("");
    setDes("");
    setSub(true);
  }

  function handleOff() {
    setNameSub("");
    setDesSub("");
  }

  return (
    <Flex
      style={{
        width: "500px",
        margin: "0 auto",
        padding: "30px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
        border: "2px solid black",
        borderRadius: "12px",
      }}
    >
      <Typography.Title level={3}>
        Форма с использованием Ant Design
      </Typography.Title>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Form.Item label="Название" layout="vertical">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Описание" layout="vertical" m>
          <Input.TextArea
            placeholder="Description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </Form.Item>
        <Button
          onClick={handleSubmit}
          typeof="submit"
          type="primary"
          style={{
            width: "100px",
          }}
        >
          Отправить
        </Button>
      </Form>
      <Card style={{ width: "100%" }}>
        <Typography.Title level={3}>Отправленные данные:</Typography.Title>
        <p style={{ overflowWrap: "anywhere" }}>
          Имя: {sub ? nameSub : undefined}
        </p>

        <p style={{ overflowWrap: "anywhere" }}>
          Описание: {sub ? desSub : undefined}
        </p>
        <Button type="primary" onClick={handleOff}>
          Очистить
        </Button>
      </Card>
    </Flex>
  );
}

export default App;
