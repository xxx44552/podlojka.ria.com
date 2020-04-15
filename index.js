const range = document.getElementById('range');
const num = document.getElementById('num');

window.addEventListener('load', function (e) {
  chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
}, false);

range.addEventListener('input', function () {
  num.innerHTML = range.value;
  chrome.storage.local.set({key: range.value}, function() {
    console.log('Value is set to ' + range.value);
  });
});


chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
  if(result.key) num.innerHTML = result.key
});

