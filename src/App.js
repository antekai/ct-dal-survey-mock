import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import styles from "./App.module.css";
import { Sider } from "./layout/Sider";
import { Main } from "./layout/Main";
import { mockedInstance } from "./axios";

class App extends Component {
  state = {
    collapsed: false,
    surveys: []
  };
  componentDidMount() {
    this.getSurveys();
  }

  getSurveys = () => {
    mockedInstance
      .get("")
      .then(res => this.setState({ surveys: res.data.surveys }));
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { surveys, collapsed } = this.state;

    return (
      <BrowserRouter>
        <Layout className={styles.fullHeight}>
          <Sider
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            surveysData={surveys}
          />

          <Layout>
            <Main surveysData={surveys} />
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
