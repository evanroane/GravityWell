var baseURL = "http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?";

var xmlUrl = "http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=xml";

function start(url) {

  var request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var resp = this.response;
      console.log(resp);
    } else {
      console.log("We reached our target server, but it returned an error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
  }
