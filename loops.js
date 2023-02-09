//1.1-For Loop

let request = new XMLHttpRequest();

request.open("GET", "https://62ab7590a62365888bdcdbee.mockapi.io/facebook");

request.onload = function () {
  let data = JSON.parse(this.response);
  console.log(request.statusText);
  console.log(request.status);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
}

request.send();

//1.2-For-Of Loop

let request1 = new XMLHttpRequest();

request1.open('GET', 'https://62ab7590a62365888bdcdbee.mockapi.io/facebook');

request1.onload = function () {
  let data = JSON.parse(this.response)
  console.log(request1.status);
  console.log(request1.statusText);
  for (let id of data) {
    console.log(id.id);
  }
}

request1.send();

//1.3 For-in-Loop

let request2 = new XMLHttpRequest();

request2.open('GET', 'https://62ab7590a62365888bdcdbee.mockapi.io/facebook');

request2.onload = function () {
  let data = JSON.parse(this.response);
  console.log(request2.status);
  console.log(request2.statusText);
  for (let avatar in data) {
    console.log(data[avatar].avatar);
  }
}

request2.send();

// ForEach Loop

let request3 = new XMLHttpRequest();

request3.open('GET', 'https://62ab7590a62365888bdcdbee.mockapi.io/facebook');

request3.onload = function () {
  let data = JSON.parse(this.response);
  console.log(request3.status);
  console.log(request3.statusText);
  data.forEach((time) => {
    console.log(time.createdAt);

  });
}

request3.send();
