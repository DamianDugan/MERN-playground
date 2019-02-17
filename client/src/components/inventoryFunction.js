import axios from "axios";

export const getList = () => {
  return axios
    .get("http://localhost:8080:/products", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
  /*.then(data => {
      console.log(data);
    });*/
};

export const addToList = term => {
  return axios
    .post(
      "http://localhost:8080:/products/create",
      {
        title: term
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete(`http://localhost:8080:/products/delete/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      `http://localhost:8080/products/update/${id}`,
      {
        title: term
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
