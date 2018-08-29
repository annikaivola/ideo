const url = "https://ideo-api.azurewebsites.net/";


export function getIdeas(id) {
  return fetch(url + "api/ideas/getideasbyideaspaceid?ideaspaceid=" + id)

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
      return list;
    });
}
export function sortIdeaswithVoteCounter(votecounter, callback)
{}

export function addNewIdea (idea, callback) {
    fetch(url + "api/ideas/postidea", {
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
  export function getIdeaspace(name, password) {
    return fetch( url + "api/ideaspaces/getideaspace?name=" + name + "&password=" + password)
    .then(function (response) {
      if (response === 401) {
        Alert.alert('', 'Login failed')
      }
      else if (!response.ok) {
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
      return ideaspace;
    });
  }

  export function addNewComment(comment, callback){
    fetch( url + "api/comments/postcomment",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    })
    .then(function (response){
      callback(response.status);
    });
  }
  // export function addComment(idea, callback){ 
  //   fetch( url + "api/ideas/" + idea.IdeaId,{
  //     method: 'PUT', // vai POST? put metodia ei vielä apissa
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(idea)
  //   })
  //   .then(function (response){
  //     callback(response.status);
  //   });
  // }
  