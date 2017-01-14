import quizList from '../tempdata/quizes';

const ACTION_LOAD_DUMMY_QUIZES = 'LOAD_DUMMY_QUIZES';
const ACTION_LOAD_QUIZES= 'LOAD_QUIZES';

// reducer function to load hobby chefs and related data
export function reducer(state = {}, action) {
  switch(action.type) {
    case ACTION_LOAD_DUMMY_QUIZES:
      return {...state, dummyQuizList: action.data};
    case ACTION_LOAD_QUIZES:
      return {...state, quizes: action.data};
    default:
      return state;
  }
}

export const getDummyQuiz = () => {
  return {
    type: ACTION_LOAD_DUMMY_QUIZES , data: quizList
  }
};

export const getQuiz = (value) => {
  return {
    type: ACTION_LOAD_QUIZES , data: value
  }
}

