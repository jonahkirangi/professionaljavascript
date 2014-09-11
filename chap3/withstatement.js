// Create location object
var location = {
  search: "Seattle",
  hostname: "Mike's Restaurant",
  href: "www.example.com"
};

// Location object is being used multiple times
// var qs = location.search.substring(1);
// var hostName = location.hostname;
// var url = location.href;


with(location) {
  var qs = search.substring(1);
  var hostName = hostname;
  var url = href;
}

console.log(url);
