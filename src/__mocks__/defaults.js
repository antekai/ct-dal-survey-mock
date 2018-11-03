// these mocks resemble actual response from apiary endpoints
// unfortunately all endpoints to specific surveys "001,002,009,014,023" respond with the same data of survey 001

export const surveys = [
  {
    id: "001",
    title: "Opinion Poll",
    tagline: "Tell us about your favorite things"
  },
  {
    id: "002",
    title: "This is about Politics",
    tagline: "They want to change … what?"
  },
  {
    id: "009",
    title: "Product Review",
    tagline: "What do you think about these cars?"
  },
  {
    id: "014",
    title: "Personality Quiz",
    tagline: "Are you a frequent mobile shopper?"
  },
  {
    id: "023",
    title: "Brand Review",
    tagline: "Do you know these chocolate brands?"
  }
];

export const survey001 = {
  id: "001",
  title: "Opinion Poll",
  tagline: "Tell us about your favorite things",
  questions: [
    {
      id: "Q868b4b",
      title: "What is the best soccer team in the world?",
      options: [
        "BVB",
        "Bayern Munich",
        "Manchester United",
        "FC Barcelona",
        "Some other team"
      ]
    },
    {
      id: "Q115b31",
      title: "Who is the better musician?",
      options: [
        "Lady Gaga",
        "Beyonce",
        "Both are great",
        "Don’t know/don’t care"
      ]
    },
    {
      id: "Qba23cb",
      title: "Who is the better actor?",
      options: [
        "Leonardo diCaprio",
        "Brad Pitt",
        "Both are great",
        "Don’t know/don’t care"
      ]
    },
    {
      id: "Q240b83",
      title: "Which car brand is the best?",
      options: ["BMW", "Mercedes", "Audi", "None of the above"]
    },
    {
      id: "Q5578ff",
      title: "Berlin or Hamburg?",
      options: [
        "Berlin",
        "Hamburg",
        "Both are great",
        "Don’t know either ... my city is the best!"
      ]
    },
    {
      id: "Q1eef92",
      title: "Steak or tofu?",
      options: [
        "What a question, steak!!!",
        "Tofu tastes great and is better for animals and the environment, so tofu.",
        "Not sure, both a delicious."
      ]
    },
    {
      id: "Q84ce41",
      title: "Beer or wine?",
      options: [
        "Definitely beer",
        "Definitely wine",
        "I like both, it very much depends on the situation",
        "I don’t like either/don’t drink alcohol"
      ]
    },
    {
      id: "Q2cb0cf",
      title: "Apple of windows?",
      options: ["Apple", "Windows", "... what about Linux?!", "Don’t know"]
    },
    {
      id: "Q6eb198",
      title: "Burger King or McDonalds?",
      options: [
        "Burger King",
        "McDonalds",
        "Neither",
        "Both offer amazing and delicious food!",
        "Don’t know"
      ]
    }
  ]
};
