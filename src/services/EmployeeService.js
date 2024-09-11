import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const createEmployee = (employee) =>  axios.post(REST_API_BASE_URL,employee);

export const getEmployee =(emloyeeId) => axios.get(REST_API_BASE_URL + '/' + emloyeeId);

export const updateEmployee = (emloyeeId,employee) => axios.put(REST_API_BASE_URL + '/' + emloyeeId,employee);

export const deleteEmployee = (emloyeeId) => axios.delete(REST_API_BASE_URL + '/' +emloyeeId);
