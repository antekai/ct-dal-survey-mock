// import { createSpec, faker } from "@helpscout/helix";
// import update from "immutability-helper";

//create custom fixture manually with predictable and helpful values for testing
export const surveysFx = [];
//add surveys fixture data
for (let i = 0; i < 5; i++) {
  surveysFx.push({
    id: `S${i}`,
    title: `survey-title-${i}`,
    tagline: `descriptive tagline-${i}`,
    questions: []
  });
}
//add questions fixture data
for (let q = 0; q < 3; q++) {
  surveysFx.forEach(sur =>
    sur.questions.push({
      id: `${sur.id}-Q${q}`,
      title: `${sur.id}-Q${q}: Was,wo,wer,wie,warum?`,
      options: ["alpha", "beta", "gama", "delta"].map(
        x => `${sur.id}-Q${q}-` + x
      )
    })
  );
}

// const optionsSpec = createSpec({ opt: faker.random.word() });

// const questionsSpec = createSpec({
//   id: faker.random.uuid(),
//   title: faker.random.words(7),
//   options: optionsSpec.generate(4) //4x options per survey - issue
// });

// const surveysSpec = createSpec({
//   id: faker.random.number(),
//   title: faker.random.word(),
//   tagline: faker.random.words(4),
//   questions: questionsSpec.generate(4) //5x questions per survey
// });

// const surveysData = surveysSpec.generate(5); //5x survey fixtures
// // #001: cannot set array as Spec property with this package
// //Fix(#001): set manually same options for all surveys an array [1,2,3,4]
// //#002: router cannot work with random Id gererated on page refresh
// // Fix(#002): custom Id and replace the random
// //#003: questions repeat over surveys
// //Fix(): enough time lost playing with this package - let's make predictable custom data manually
// const customIds = [111, 222, 333, 444, 555];

// export const surveysFx = surveysData
//   .map(survey =>
//     update(survey, { questions: { 0: { options: { $set: [1, 2, 3, 4] } } } })
//   )
//   .map(survey =>
//     update(survey, { questions: { 1: { options: { $set: [1, 2, 3, 4] } } } })
//   )
//   .map(survey =>
//     update(survey, { questions: { 2: { options: { $set: [1, 2, 3, 4] } } } })
//   )
//   .map(survey =>
//     update(survey, { questions: { 3: { options: { $set: [1, 2, 3, 4] } } } })
//   )
//   .map((survey, index) => {
//     survey.id = customIds[index];
//     return survey;
//   });
