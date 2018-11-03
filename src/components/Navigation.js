import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

export const Navigation = withRouter(props => {
  const { location, surveysData } = props;
  return (
    <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key="surveys"
        title={
          <span>
            <Icon type="pie-chart" />
            <span>Surveys</span>
          </span>
        }
      >
        {surveysData.map(obj => (
          <Menu.Item key={`/surveys/${obj.id}`}>
            <Link to={`/surveys/${obj.id}`}>Survey {obj.id}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
});
