import { GetLocalStorage, SetLocalStorage  } from '../helpers/helpers.js';

const initArr = GetLocalStorage('participants');

const arr = [{
    competitionId: "1627510187912",
    id: 1627510229603,
    name: "Igor",
    surname: "Igor",
    time: "00:00:10:244"
  },
  {
    competitionId: "1627510187912",
    id: 1627510449603,
    name: "Oleg",
    surname: "Oleg",
    time: "00:00:08:124"
  },
  {
    competitionId: "1627510187912",
    id: 1627510559603,
    name: "Maxim",
    surname: "Maxim",
    time: "00:00:12:422"
  },
  {
    competitionId: "1627510053721",
    id: 1628510559603,
    name: "Egor",
    surname: "Egor",
    time: "00:00:15:422"
  },
  {
    competitionId: "1627510053721",
    id: 1628510559603,
    name: "Pavel",
    surname: "Pavel",
    time: "00:00:12:422"
  },
  {
    competitionId: "1627510053721",
    id: 1628510559603,
    name: "Oleg",
    surname: "Oleg",
    time: "00:00:11:422"
  }
]

const InitialState = {
  participants: initArr.length ? initArr : (()=>{
    SetLocalStorage('participants', arr);
    return arr;
  })()
};

const reducer = function(state = InitialState, action) {

    switch (action.type) {
      case "ADD_PARTICIPANT": {
        if(state.participants.find((item)=>{
          if(item.id === action.payload.id) return true;
          return false;
        })) return state;

        const newParticipants = [...state.participants, action.payload];
        return {...state, participants: newParticipants};
      }
      case "REMOVE_PARTICIPANT": {
        let newParticipants = [...state.participants].filter((item)=>{
            if(item.id !== +action.payload) return item;
            return false;
          });
        return {...state, participants: newParticipants};
      }
      default: return state;
    }
  }

export default reducer;