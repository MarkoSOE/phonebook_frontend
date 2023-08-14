import axios from "axios";

const baseURL = "https://phonebook-backend-b24s.onrender.com/api/persons/";

const create = (newObject) => {
	const request = axios.post(baseURL, newObject);
	return request.then((response) => response.data);
};

const getAll = () => {
	const request = axios.get(baseURL);
	return request.then((response) => response.data);
};

const deleteName = (personID) => {
	const request = axios.delete(`${baseURL}/${personID}`);
	return request.then((response) => response.data);
};

const replacePerson = (personID, personObject) => {
	const request = axios.put(`${baseURL}/${personID}`, personObject);
	return request.then((response) => response.data);
};

//have to export this as an object for it to be used in another js file
export default { create, getAll, deleteName, replacePerson };
