//window.addEventListener('load', () => chrome.storage.local.clear(), false);

const range = document.getElementById('range');
const num = document.getElementById('num');
const bg1 = document.getElementById('bg-1');
const bg2 = document.getElementById('bg-2');
const mediaQuery = document.getElementById('media-query');

bg2.addEventListener('input', function () {
  bg2.value === '' ? mediaQuery.style.display = 'none' : mediaQuery.style.display = 'block';
})

chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
  if(result.key) {
    num.innerHTML = result.key;
    range.value = result.key;
  }
});

range.addEventListener('input', function () {
  num.innerHTML = range.value;
  chrome.storage.local.set({key: range.value}, function() {
    console.log('Value is set to ' + range.value);
  });
});