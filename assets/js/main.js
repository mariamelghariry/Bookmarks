var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var invalidCard = document.getElementById("invalidCard")

var sitesList = [];

if(localStorage.getItem('bookmarList') !== null){
    sitesList = JSON.parse(localStorage.getItem('bookmarList'));
    displaySitesList();
}

function addSite() {
  if (validName() === "true" && validUrl() === "true") {
    var site = {
      name: siteName.value,
      url: siteUrl.value,
    };
    sitesList.push(site);
    localStorage.setItem('bookmarList' , JSON.stringify(sitesList));
    displaySitesList();
    clearInputs();
  } else {
    invalidCardAppear();
    clearInputs();
  }
}

function displaySitesList() {
  var cartona = "";

  for (var i = 0; i < sitesList.length; i++) {
    cartona += `<tr>
    <td>${i + 1}</td>
    <td>${sitesList[i].name}</td>
    <td>
      <a href="${sitesList[i].url}" target="_blank">
      <button class="btn btn-success visit" href>
        <i class="fa-solid fa-eye"></i>&nbsp;Visit
      </button>
      </a>
    </td>
    <td>
      <button class="btn btn-danger delete" onclick="deleteSite(${i})">
        <i class="fa-solid fa-trash"></i>&nbsp;Delete
      </button>
    </td>
  </tr>`;
    
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

function clearInputs() {
  siteName.value = "";
  siteUrl.value = "";
}

function deleteSite(index) {
  sitesList.splice(index, 1);
  displaySitesList();
}


  function validName() {
    var x = /[a-zA-Z]{3,}/;
    if (x.test(siteName.value) === true) {
      return "true";
    } else {
      return "false";
    }
  }
  function validUrl() {
    var y = /.\.(com)/;
    if (y.test(siteUrl.value) === true) {
        return "true";
    } else {
      return "false";
    }
  }
function invalidCardAppear(){
    invalidCard.classList.replace('d-none' , 'd-block')
}
function exit(){
    invalidCard.classList.replace('d-block' , 'd-none')
}