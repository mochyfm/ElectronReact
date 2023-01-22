import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

const getActorById = async (id) => {
  const response = await axios.get(`${API_URL}/actors/${id}`);
  return response.data.data;
}

const getAll = async () => {
  const response = await axios.get(`${API_URL}/actors`);
  const actors = response.data;

  // console.log('getAll: ', actors.data);

  return actors.data;
};

const createActor = async (data) => {
  await fetch(`${API_URL}/actors`, {
    method: 'POST',
    body: JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const editActor = async (data) => {
  await fetch(`${API_URL}/actors/${data.actor_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const deleteActor = async (id) => {
  await axios.delete(`${API_URL}/actors/${id}`)
};

const ActorService = {
  getAll,
  getActorById,
  createActor,
  editActor,
  deleteActor,
};

export default ActorService;
