# Survey-app-apiary

> View and complete surveys.

## Table of Contents

- [Preview](#preview)
- [Installation](#installation)
- [Requirements](#requirements)
- [Technical-features](#Technical-features)
- [Support](#support)

## Preview

URL: https://survey-app-mock.netlify.com

## Installation

Install [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/) and then:

```sh
git clone https://github.com/antekai/ct-dal-survey-mock.git survey-app-mock
cd survey-app-mock
yarn install
yarn start
```

## Requirements

1. The user sees all the available surveys
2. The user clicks on one survey
3. The user can complete the questions of the clicked survey
4. The answers are sent to the backend
5. A message is shown to the User: "Thanks for answering the survey!"
6. The User can go back to point 1.

## Technical-features

- [x] UI: ant-design and css modules
- [x] Local state management (React.js)
- [x] Client-side routing with react-router v4
- [x] Survey form validation
- [x] Type checking (prop-types)
- [x] Continuous Deployment (Netlify CD)
- [ ] Integration, End to end(E2E) tests (cypress.io)
- [ ] Unit, integration tests (jest, enzyme, wallaby)

### Application structure

```sh
src/
├── __mocks__/ ### LOCAL DATA FOR TESTING ###
│   ├── defaults.js # cloned apiary data
│   └── fixtures.js # custom fixtures
├── components/ ### COMPONENTS ###
│   ├── Breadcrumbs.js # secondary navigation
│   ├── Navigation.js # main navigation
│   └── Survey.js # survey questions form --localSTATE--GET/POST
├── layout/ ### LAYOUT COMPONENTS ###
│   ├── Main.js # content wrapper (children: <Breadcrumbs/>,<Approutes/>)
│   ├── Sider.js # sidebar wrapper (children: <Navigation/>)
├── routes/ ### ROUTING ###
│   └── AppRoutes.js # application routes (children: <Survey/>, placeholder pages: Home,Surveys,404page)
├── App.js # application wrapper --localSTATE--GET (children: <Main/>,<Sider/>)
└── axios.js # HTTP requests management (apiaryInstance, mockedInstance)
```

### Component tree visualization

```sh
                               +----------------+
                        +------> <Breadcrumbs/> |
              +---------|      +----------------+
       +----->| <Main/> +      +----------------+    +-----------+
  +----+---+  +---------+----->| <AppRoutes/>   |+-->| <Survey/> |xx
  | <App/> |                   +----------------+    +-----------+ x
  +----+---+                                            x          x
    x  |      +---------+      +----------------+       x          x
    x  +----->| <Sider/>|+---> | <Navigation/>  |       x          x
    x         +---------+      +----------------+       x          x
  +-----+                                            +-----+  +------+
  | GET |                                            | GET |  | POST |
  |-----|                                            |-----|  |------|
  +-----+                                            +-----+  +------+
```

## Support

Please [open an issue](https://github.com/antekai/ct-dal-survey-mock/issues/new) for support.
