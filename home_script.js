let fetchResultEl = document.getElementById("fetchResult");

function getResults() {
    let requestUrl= "https://jsonplaceholder.typicode.com/comments";
    let options= {
        method: "GET"
    };

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let httpResponse = jsonData;

            for (let eachObj of httpResponse) {
                let cardEl = document.createElement("div");
                let titleEl = document.createElement("h4");
                let emailEl = document.createElement("p");
                let bodyEl = document.createElement("p");

                cardEl.classList.add("col-12", "col-md-6", "col-lg-4", "card-style");

                titleEl.textContent = eachObj.name;                
                bodyEl.textContent = eachObj.body;
                emailEl.textContent = eachObj.email;

                cardEl.appendChild(titleEl);
                cardEl.appendChild(bodyEl);
                cardEl.appendChild(emailEl);
                
                fetchResultEl.appendChild(cardEl);
            }
        });
}

document.addEventListener("DOMContentLoaded", function() {
    getResults();
});