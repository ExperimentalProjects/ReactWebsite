import moviequiz from '../tempdata/quizes';

const LOAD_QUIZ_LIST = "LOAD_QUIZ_LIST";
const LOAD_SELECTED_QUIZ = "LOAD_SELECTED_QUIZ";

// reducer function to load hobby chefs and related data
export function reducer(state = {}, action) {
  switch(action.type) {
    case LOAD_QUIZ_LIST:
        return {...state, quizList: action.data};
    case LOAD_SELECTED_QUIZ:
      return {...state, selectedQuiz: action.data};
    default:
      return state;
  }
}

export const loadQuizList = () => {
   let quizList = [moviequiz];
   return {
      type: LOAD_QUIZ_LIST , data: quizList
   }
}

export const loadSelectedQuiz = (quiz) => {
  return {
    type: LOAD_SELECTED_QUIZ , data: quiz
  }
};



