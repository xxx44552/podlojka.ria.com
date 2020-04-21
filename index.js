let range1 = document.getElementById('range1');
let range2 = document.getElementById('range2');
let range2Wrap = document.getElementById('range2-wrap');
let color = document.getElementById('color');
let btnBgColorNone = document.getElementById('bg-none');
let num1 = document.getElementById('num1');
let bg1 = document.getElementById('bg-1');
let bg2 = document.getElementById('bg-2');
let colorValue = document.getElementById('color-value');
let mediaQuery = document.getElementById('media-query');
let mediaNumber = document.getElementById('media-number');
let link = document.getElementById('link');
const copy = document.getElementById('copy');
let counter = document.getElementById('counter');
let linkPrefix = ''; //%%CLICK_URL_UNESC%%
const clear = document.getElementById('clear');
const start = document.getElementById('start');
let fix = document.getElementById('fix');

chrome.storage.local.get(['fixValue'], function(result) {
  if(result.fixValue) {
    if(result.fixValue === 'true') {
      fix.checked = true
    }else {
      fix.checked = false;
    }
  }
});

chrome.storage.local.get(['mt1'], function(result) {
  if(result.mt1) {
    num1.innerHTML = result.mt1;
    range1.value = result.mt1;
  }
});

chrome.storage.local.get(['bgColor'], function(result) {
  if(result.bgColor) {
    colorValue.innerHTML = 'none';
    color.value = result.bgColor;
  }
});

chrome.storage.local.get(['mt2'], function(result) {
  if(result.mt2) {
    num2.innerHTML = result.mt2;
    range2.value = result.mt2;
  }
});

chrome.storage.local.get(['mediaNum'], function(result) {
  if(result.mediaNum) mediaNumber.value = result.mediaNum;
});

chrome.storage.local.get(['bgi1'], function(result) {
  if(result.bgi1) bg1.value = result.bgi1;
});

chrome.storage.local.get(['counterValue'], function(result) {
  if(result.counterValue) counter.value = result.counterValue;
});

chrome.storage.local.get(['linkValue'], function(result) {
  if(result.linkValue) link.value = result.linkValue;
});

chrome.storage.local.get(['bgi2'], function(result) {
  if(result.bgi2) {
    bg2.value = result.bgi2;
    range2Wrap.style.display = 'block';
    mediaQuery.style.display = 'block';
  }
});

function show() {
  const fixedBg = fix.checked ? `background-attachment: fixed !important;` : '';
  const img = counter.value ? `<img src="${counter.value}" style="position:fixed;visibility:hidden;" />` : '';
  const media =  bg2.value === '' ? '' :`@media (max-width: ${mediaNumber.value}px){body{background: ${color.value === '#ffffff' ? '' : color.value} url("${bg2.value}")  center ${range2.value}px no-repeat !important;${fixedBg}}}`;
  const style = `<style type="text/css">@media (min-width: 769px){body.modal-open, body.modal-open .fixed-branding{background-position: calc(50% - 8px) 0 !important;}html{}body{background: ${color.value === '#ffffff' ? '' : color.value} url("${bg1.value}")  center ${range1.value}px no-repeat !important;${fixedBg}} ${media} header{position: relative; z-index: 3; margin-bottom: 0}header + .container{background-color: #fff; padding: 0 10px 20px; z-index: 5; position: relative}header + .container .explore-search{margin-top: 0}footer{position: relative; z-index: 3 !important}.app-header{z-index: inherit}.app-head{position: relative; z-index: 6 !important}.panel-banner > div{margin-top: 0}nav.head-menu{height: 37px}.panel-banner{display: block !important; width: 100% !important; margin: 0 auto !important; padding: 0 !important}.fixed-banner-view, #adriver_banner{display: none}.fixed-branding{position: fixed; z-index: 1; margin: 0 !important; top: 0; overflow: hidden; left: 0; width: 50%; height: 100%; right: auto;}.fixed-branding.right{left: auto; right:0;}.branding_bmw_x{border: 0 none; position: absolute; top: 0; right: 0; z-index: 1; width: 100%; height: 100%}.container-body > .container, .container-main, .app-content, .container-header{position: relative; z-index: 3; padding-left: 10px; padding-right: 10px; background: #fff}.container-body > .container-header{padding: 0 !important;}.container-body > .container-main{padding-left: 10px !important; padding-right: 10px !important;}.fixed-addthis, .fixed-addthis .addthis_toolbox{display: none}.container-header{padding: 15px 10px 14px !important; border: 0 none}.app-content{margin-top: 0}.app-header{box-shadow: none !important}.carousel-control.next::before, .showcase-main-offer .next{right: 0; border-radius: 5px 0 0 5px}.carousel-control.prev::before, .showcase-main-offer .prev{left: 0; border-radius: 0 5px 5px 0}.carousel-control.next::before, .showcase-main-offer .next{right: 0; border-radius: 5px 0 0 5px;}.carousel-control.prev::before, .showcase-main-offer .prev{left: 0; border-radius: 0 5px 5px 0;}.bannercode{display: none;}.feedback{display: none}.banner_plase_960px{width: 100%; margin: 0;}.container-footer{position: relative; z-index: 3;}}</style> <div class="fixed-branding"><a href="${linkPrefix + link.value}" target="_blank" class="branding_bmw_x"></a></div><div class="fixed-branding right"><a href="${linkPrefix + link.value}" target="_blank" class="branding_bmw_x"></a></div><a href="${linkPrefix + link.value}" target="_blank" class="banner_bmw"></a> ${img}`;
  return `document.getElementById("div728x90head").innerHTML = '${style}'`
}

bg2.addEventListener('input', function () {
  bg2.value === '' ? mediaQuery.style.display = 'none' : mediaQuery.style.display = 'block';
  bg2.value === '' ? range2Wrap.style.display = 'none' : range2Wrap.style.display = 'block';
  bg2.value === '' ? range2.style.display = 'none' : range2.style.display = 'block';
});


fix.addEventListener('change', function () {

  if(fix.checked === true) {
    chrome.storage.local.set({fixValue: 'true'}, function() {
      console.log('Value is set to ' + '1');
    });
  }else {
    chrome.storage.local.set({fixValue: 'false'}, function() {
      console.log('Value is set to ' + '');
    });
  }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

range1.addEventListener('input', function () {
  num1.innerHTML = range1.value;
  chrome.storage.local.set({mt1: range1.value}, function() {
    console.log('Value is set to ' + range1.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

range2.addEventListener('input', function () {
  num2.innerHTML = range2.value;
  chrome.storage.local.set({mt2: range2.value}, function() {
    console.log('Value is set to ' + range2.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

color.addEventListener('input', function () {
  colorValue.innerHTML = color.value;
  chrome.storage.local.set({bgColor: color.value}, function() {
    console.log('Value is set to ' + color.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

counter.addEventListener('input', function () {
  chrome.storage.local.set({counterValue: counter.value}, function() {
    console.log('Value is set to ' + counter.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

btnBgColorNone.addEventListener('click', function () {
  colorValue.innerHTML = 'none';
  color.value = '#ffffff';
  chrome.storage.local.set({bgColor: '#ffffff'}, function() {
    console.log('Value is set to ' + '#ffffff');
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

mediaNumber.addEventListener('input', function () {
  chrome.storage.local.set({mediaNum: mediaNumber.value}, function() {
    console.log('Value is set to ' + mediaNumber.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

bg1.addEventListener('input', function () {
  chrome.storage.local.set({bgi1: bg1.value}, function() {
    console.log('Value is set to ' + bg1.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

bg2.addEventListener('input', function () {
  chrome.storage.local.set({bgi2: bg2.value}, function() {
    console.log('Value is set to ' + bg2.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

link.addEventListener('input', function () {
  chrome.storage.local.set({linkValue: link.value}, function() {
    console.log('Value is set to ' + link.value);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

clear.addEventListener('click', function () {
  chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) console.error(error);
  });
  bg1.value = '';
  bg2.value = '';
  range1.value = '0';
  range2.value = '0';
  bg2.value = '';
  link.value = '';
  counter.value = '';
  num1.innerHTML = '0';
  num2.innerHTML = '0';
  color.value = '#ffffff';
  colorValue.innerHTML = 'none';
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementById("div728x90head").innerHTML = "";'});
  });
});

start.addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: show()});
  });
});

copy.addEventListener('click', function () {
  linkPrefix = '%%CLICK_URL_UNESC%%';
  const script = '<script> <!--\n\nvar brandStyles =\''+show().replace('document.getElementById("div728x90head").innerHTML = \'', '').replace(/.$/,"")+'\';\nvar head=window.top.document.getElementById("div728x90head");\nif (head ) {head.innerHTML=brandStyles; }\n\n//-->\n</script>';
  navigator.clipboard.writeText(script)
      .then(() => {
        copy.innerHTML = 'Скопировано!';
        setTimeout(() => {
          copy.innerHTML = 'Скопировать код';
        }, 3000)
      })
      .catch(err => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: `alert(${err})`});
        });
      });
})
