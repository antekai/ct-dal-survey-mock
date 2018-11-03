import React from "react";
import { Form, Button, Radio, Divider, message, Icon } from "antd";
import { mockedInstance } from "../axios";

export const withFormSurvey = Form.create()(
  class Survey extends React.Component {
    state = { surveyId: null, questions: [] };

    componentDidMount() {
      this.setState({ surveyId: this.props.match.params.id }, () =>
        this.getQuestions()
      );
    }
    componentDidUpdate(prevProps) {
      if (this.props.match.params.id !== prevProps.match.params.id) {
        this.setState({ surveyId: this.props.match.params.id }, () =>
          this.getQuestions()
        );
      }
    }

    getQuestions = () => {
      mockedInstance
        .get(`/${this.state.surveyId}`)
        .then(res => this.setState({ questions: res.data.survey.questions }));
    };

    postCompletion = arr => {
      mockedInstance
        .post(`/${this.state.surveyId}/completions`, { completion: arr })
        .then(res => {
          console.log(res);
          res.status === 200
            ? message.success("Thanks for answering the survey!")
            : message.error("hoppla...sth is wrong");
        });
    };

    // onChange = (e, id) => {
    //   console.log("radio checked", e.target.value, id);
    //   // this.setState({
    //   //   [id]: e.target.value
    //   // });
    // };
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const questionsID = this.state.questions.map(q => q.id);
          const completionArr = questionsID.map((qID, index) => ({
            [qID]: Object.values(values)[index]
          }));
          console.log("Values for post request: ", completionArr);
          this.setState({ [this.state.surveyId]: completionArr }, () => {
            this.postCompletion(completionArr);
          });
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      const { questions } = this.state;

      const questionList = questions.map((question, index) => (
        <React.Fragment key={question.id}>
          {this.state[this.state.surveyId] && (
            <div>
              <Icon
                type="check-circle"
                theme="twoTone"
                twoToneColor="#52c41a"
              />
              <span style={{ marginLeft: "10px" }}>Completed</span>
            </div>
          )}
          <Form.Item label={`${index + 1}. ${question.title}`}>
            {getFieldDecorator(question.title, {
              rules: [
                {
                  required: true,
                  message: "Please choose an option"
                }
              ],
              initialValue: null
            })(
              <Radio.Group>
                {/* onChange={e => this.onChange(e, question.id)}> */}
                {question.options.map(opt => (
                  <Radio
                    key={opt}
                    value={opt}
                    // disabled={this.state[this.state.surveyId]}
                  >
                    {opt}
                  </Radio>
                ))}
              </Radio.Group>
            )}
          </Form.Item>
          <Divider />
        </React.Fragment>
      ));

      return (
        <Form onSubmit={this.handleSubmit}>
          {questionList}

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      );
    }
  }
);
