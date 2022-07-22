import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/FireBaseConfig";

const BASE_URL = "http://localhost:8080/";
const projectCollectionRef = collection(db,"projects");
const queryCollectionRef = collection(db,"query");

export const getAllProjectDetails = () => {
  return axios.get(BASE_URL + "projects");
};

// export const saveProject = (project) => {
//   return axios.put(BASE_URL + "projects/save", project);
// };

export const deleteProject = (id) => {
  return axios.delete(BASE_URL + "projects/delete/" + id);
};

export const saveImg = (image) =>{
    return axios.put(BASE_URL+"projects/saveImg",image);
}

export const saveProject = (project) => {
  return addDoc(projectCollectionRef, project);
}

export const getProjects = () =>{

}
export const saveQuery = (query) => {
  return addDoc(queryCollectionRef,query)
}
