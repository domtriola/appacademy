console.log("Hello from the JavaScript console!");

// Your AJAX request here
let req = () => {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
    type: "GET",
    success(response) {
      console.log(response);
      console.log("Request returned: ", Date.now());
    }
  });
};

function sendRequest(request) {
  console.log("Sending request: ", Date.now());
  request();
}

sendRequest(req);

// Add another console log here, outside your AJAX request
console.log("Log from after ajax request declared: ", Date.now());
