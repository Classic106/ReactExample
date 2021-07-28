import { GetLocalStorage, SetLocalStorage } from '../helpers/helpers.js';

const initArr = GetLocalStorage('competitions');

const arr = [{
    id: "1627510053721",
    name: "run on 100 metres",
    status: "active",
    winner: null
  },{
    id: "1627510187912",
    name: "run on 60 meters",
    status: "finished",
    winner:{
      competitionId: "1627510187912",
      id: 1627510229603,
      name: "Igor",
      surname: "Igor",
      time: "00:00:08:124"
    }
  }]

const InitialState = {
  competitions: initArr.length ? initArr : (()=>{
    SetLocalStorage('competitions', arr);
    return arr;
  })(),
};

const reducer = function (state = InitialState, action){
  
    switch (action.type) {
        case "ADD_COMPETITION": {
          return { ...state, competitions: [...state.competitions, action.payload]};
        }
        case "SET_WINNER_COMPETITION": {
          const newCompetitions = [...state.competitions];

          for(let key in newCompetitions){
            if(newCompetitions[key].id === action.payload.id){
              newCompetitions[key].winner = action.payload.winner;
              newCompetitions[key].status = 'finished';
            }
          }
          
          return { ...state, competitions: newCompetitions}
        }
        default:
          return state;
    }
  };
  
export default reducer;