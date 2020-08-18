function encrypt() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var hide = document.getElementById('hide').value;
  if (pass == "") {
    document.getElementById('err').innerHTML = 'Error:Password is missing';
    return false;
  }
  else {
    document.getElementById("hide").value = document.getElementById("password").value;
    var hash = CryptoJS.MD5(pass);
    document.getElementById('password').value = hash;
    let myKeyVals = {
      email: email,
      password: hash
    }
    $.ajax({
      url: "url", type: 'POST', data: myKeyVals, success: function (result) {
        //Navigate to respected url
      }
    });

    return true;
  }
}