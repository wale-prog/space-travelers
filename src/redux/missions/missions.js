import fetchApi from '../../components/api/MissionApi';

const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';

export const getMission = (data) => ({
  type: GET_MISSIONS,
  payload: data,

});

export const missionDispatcher = () => async (dispatch) => {
  const fetchMission = await fetchApi();
  dispatch(getMission(fetchMission));
};

const missionReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { missions: action.payload };
    default:
      return state;
  }
};
export default missionReducer;
