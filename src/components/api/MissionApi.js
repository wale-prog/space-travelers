import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

const fetchApi = async () => {
  const getApi = await axios.get(apiUrl);
  const getdata = getApi.data;
  const missions = [];
  getdata.forEach((element) => {
    missions.push({
      missionid: element.mission_id,
      missionname: element.mission_name,
      description: element.description,
    });
  });
  return missions;
};

export default fetchApi;
