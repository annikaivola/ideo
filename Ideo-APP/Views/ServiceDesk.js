const url = "https://ideo-api.azurewebsites.net/";

export function getIdeas(callback) {
  fetch(url + "api/ideas/getideasbyideaspaceid?ideaspaceid=" + id)
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

export function getAllIdeaSpaces(callback) {
    fetch( url + "api/ideaspaces/getideaspace")
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
    fetch( url + "api/ideaspaces/postideaspace",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ideaspace)
    })
    .then(function (response){
      callback(response.status);
    });
  }
  export function getIdeaspace(name, password, callback) {
    fetch( Url + "api/ideaspaces/getideaspace" + name + "/" + password)
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
  