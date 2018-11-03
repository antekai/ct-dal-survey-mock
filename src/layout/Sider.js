import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Navigation } from "../components/Navigation";
import styles from "./Sider.module.css";

export const Sider = ({ collapsed, onCollapse, surveysData }) => (
  <Layout.Sider
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
    breakpoint="lg"
  >
    <div className={styles.logo} />
    <Navigation surveysData={surveysData} />
  </Layout.Sider>
);

Sider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onCollapse: PropTypes.func.isRequired,
  surveysData: PropTypes.array.isRequired
};
