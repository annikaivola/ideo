const url = "https://ideo-api.azurewebsites.net/"

export function getIdeas(callback) {
    fetch (url + "api/ideas")
    .then(function (response) {
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
