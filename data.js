const url = "https://semester02t7-00e2.restdb.io/rest/breathe-text?max=4";
const url1 = "https://semester02t7-00e2.restdb.io/rest/breathe-advice?max=4";

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
    handleData(data);
  })
  .catch((e) => {
    console.error("An Error Occured:", e.message);
  });

fetch(url1, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data1) => {
    //we have the data
    console.log(data1);
    //handle the data
    handleData1(data1);
  })
  .catch((e) => {
    console.error("An Error Occured:", e.message);
  });

function handleData(breathe) {
  breathe.forEach((emotion) => {
    console.log(emotion);
    //make a template
    //grab it
    const template = document.querySelector("template").content;
    //clone it
    const clone = template.cloneNode(true);
    //populate with data
    clone.querySelector("h1").textContent = emotion.category;
    clone.querySelector("h3").textContent = emotion.description;
    //append it
    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}

function handleData1(breathe) {
  breathe.forEach((emotion) => {
    console.log(emotion);
    //make a template
    //grab it
    //clone it
    //populate with data
    //append it
    //
  });
}

// TEXT: category description img
// ADVICE: category title advice_1 advice_2 advice_3 img
