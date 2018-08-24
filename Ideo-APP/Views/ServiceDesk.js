const url = "https://ideo-api.azurewebsites.net/";

export function getIdeas(callback) {
  fetch(url + "api/ideas")
    .then(function(response) {
      if (!response.ok) {
        const errormsg = {
          status: response.status,
          statusText: response.statusText,
          msg: "Listanhaku"
        };
        throw errormsg;
      }
      return response.json();
    })
    .then(function(list) {
      callback(list);
    });
}
export function sortIdeaswithVoteCounter(votecounter, callback)

{}export function addNewIdea (idea, callback) {
    fetch(url + "api/ideas/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(idea)
    })
    .then(function (response){
        callback(response.status);
    });
    }

export function getIdeaSpaces(callback) {
    fetch( url + "api/ideaspaces/")
    .then(function (response) {
      if (!response.ok) {
        const errormsg = {
          status: response.status,
          statusText: response.statusText,
          msg: "Ideaspacehaku"
        };
        throw errormsg;
      }
      return response.json();
    })
    .then(function (ideaspace) {
      callback(ideaspace);
    });
  }
  export function addNewIdeaspace(ideaspace, callback){
    fetch( Url + "api/ideaspaces/",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ideaspace)
    })
    .then(function (response){
      callback(response.status);
    });
  }
  export function getIdeaspace(name, password, callback) {
    fetch( Url + "api/ideaspaces/" + name + "/" + password)
    .then(function (response) {
      if (!response.ok) {
        const errormsg = {
          status: response.status,
          statusText: response.statusText,
          msg: "Ideaspacehaku"
        };
        throw errmsg;
      }
      return response.json();
    })
    .then(function (ideaspace) {
      callback(ideaspace);
    });
  }
  export function addComment(idea, callback){ 
    fetch( Url + "api/ideas/" + idea.IdeaId,{
      method: 'PUT', // vai POST? put metodia ei vielä apissa
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(idea)
    })
    .then(function (response){
      callback(response.status);
    });
  }