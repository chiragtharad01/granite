import axios from "axios";

const fetch = () => axios.get("/tasks");

const show = slug => axios.get(`/tasks/${slug}`);

const update = ({ slug, payload }) =>
  axios.put(`/tasks/${slug}`, { task: payload });

const create = payload => axios.post("/tasks", { task: payload });

const tasksApi = { fetch, show, update, create };

export default tasksApi;
