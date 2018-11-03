import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { surveysFx } from "./__mocks__/fixtures";
// Apiary instance


//Mocked instances

export const mockedInstance = axios.create();
const mock = new MockAdapter(mockedInstance);

mock.onGet("").reply(200, {
  surveys: surveysFx
});

for (let i in surveysFx) {
  mock.onGet(`/${surveysFx[i].id}`).reply(200, {
    survey: surveysFx[i]
  });
}
for (let i in surveysFx) {
  mock.onPost(`/${surveysFx[i].id}/completions`).reply(200);
}
