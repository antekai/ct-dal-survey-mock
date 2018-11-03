import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";
import styles from "./Breadcrumbs.module.css";

export const Breadcrumbs = withRouter(props => {
  const { location, surveysData } = props;

  const pathSnippets = location.pathname.split("/").filter(i => i);
  const breadcrumbNameMap = { [`/surveys`]: "Surveys" };
  surveysData.forEach(survey => {
    breadcrumbNameMap[`/surveys/${survey.id}`] = `Survey ${survey.id}: ${
      survey.tagline
    }`;
  });

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb className={styles.bread}>{breadcrumbItems}</Breadcrumb>;
});

Breadcrumbs.propTypes = {
  surveysData: PropTypes.array.isRequired
};
