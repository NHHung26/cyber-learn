import React from "react";
import { Col, Row } from "antd";

const Header = () => {
  return (
    <>
      <Row>
        <Col span={24} style={{ backgroundColor: "#ff7875", height: "50px" }}>
          Header
        </Col>
      </Row>
      <Row>
        <Col span={5} style={{ backgroundColor: "#bae637", height: "350px" }}>
          Silde Bar
        </Col>
        <Col
          span={19}
          style={{ backgroundColor: "#4096ff", height: "350px" }}
        ></Col>
      </Row>
      <Row>
        <Col span={24} style={{ backgroundColor: "#ff7875", height: "50px" }}>
          Footer
        </Col>
      </Row>
    </>
  );
};
export default Header;
