import axios from "axios";

const fetch = () => axios.get("/tasks");

const show = slug => axios.get(`/tasks/${slug}`);

const update = ({ slug, payload }) =>
  axios.put(`/tasks/${slug}`, { task: payload });

const create = payload => axios.post("/tasks", { task: payload });

const destroy = slug => axios.delete(`/tasks/${slug}`);

const tasksApi = { fetch, show, update, create, destroy };

export default tasksApi;
