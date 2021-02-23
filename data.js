const url = "https://semester02t7-00e2.restdb.io/rest/breathe-text?max=4";

//The API-Key:

const options = {
  headers: {
    "x-apikey": "60352dbc5ad3610fb5bb658c",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data
    console.log(data);
    //handle the data
  })
  .catch((e) => {
    console.error("An Error Occured:", e.message);
  });
