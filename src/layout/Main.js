import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Breadcrumbs } from "../components/Breadcrumbs";
import styles from "./Main.module.css";
import { AppRoutes } from "../routes/AppRoutes";

export const Main = ({ surveysData }) => (
  <React.Fragment>
    <Layout.Content className={styles.mainContainer}>
      <Breadcrumbs surveysData={surveysData} />
      <div className={styles.routesContainer}>
        <AppRoutes />
      </div>
    </Layout.Content>

    <Layout.Footer className={styles.footerContainer}>
      Survey-app ©2018 Created by AT
    </Layout.Footer>
  </React.Fragment>
);

Main.propTypes = {
  surveysData: PropTypes.array.isRequired
};
