document.addEventListener("DOMContentLoaded", function() {
  var emailBtn = document.getElementById("emailBtn");
  emailBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var subject = tabs[0].title;
      var body = tabs[0].url;
      var address = "natepuls@gmail.com";
      var url = "https://mail.google.com/mail/u/0/#compose?to=" + encodeURIComponent(address) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      chrome.tabs.create({url: url});
    });
  });
});
