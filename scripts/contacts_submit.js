
window.onload = function() {
    document.getElementById("mf-ct-form-button-submit").disabled = false;
}
// Create the XHR object.
function createCORSRequest(method, url) 
{
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(jsonObject) 
{
    // This is a sample server that supports CORS.
    var url = 'http://milllymailer.azurewebsites.net/api/Submit/2';

    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    xhr.onerror = function(e) {
        console.dir(e);
        alert('Woops, there was an error making the request.');
    };

    // JSON message goes here
    // var requestBody = {"firstName":"firas","surname":"sfaxi","email":"f.sfaxi@almutmaina.com","tel":"+218944013886"};
    var bodyJSON=JSON.stringify(jsonObject);
    xhr.setRequestHeader(
    'Content-Type', 'application/json');
    xhr.send(bodyJSON);
}


if(document.getElementById("mfz-ct-form-container")){


        var form = document.getElementById("mfz-ct-form-container");

        form.addEventListener('submit',function(event){

            event.preventDefault();
            var jsonData = {
                "name":this.name.value,
                "telephone":this.telephone.value,
                "Email":this.email.value,
                "Company":this.company.value,
                "message":this.message.value
            };

            console.log(jsonData);
            makeCorsRequest(jsonData);
            document.getElementById("mf-ct-form-button-submit").disabled = true;

            
            });
}



