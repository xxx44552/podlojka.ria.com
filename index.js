//window.addEventListener('load', () => chrome.storage.local.clear(), false);

const range = document.getElementById('range');
const num = document.getElementById('num');
const bg1 = document.getElementById('bg-1');
const bg2 = document.getElementById('bg-2');
const mediaQuery = document.getElementById('media-query');
const link = document.getElementById('link').value;
const copy = document.getElementById('copy');

const t = "document.getElementById('div728x90head').innerHTML='"

const fixedBg = 'background-attachment: fixed !important;';
const media = '@media (max-width: '+range.value+'px){body{background: url(' + bg2.value + ')  center 0 no-repeat !important;'+ fixedBg +'}}'
const counterUrl = document.getElementById('counter').value;
const counter = '<img src="'+counterUrl+'" style="position:fixed;visibility:hidden;" />'
const style = '<style type="text/css">@media (min-width: 769px){body.modal-open, body.modal-open .fixed-branding{background-position: calc(50% - 8px) 0 !important;}html{}body{background: url(' + bg1.value + ')  center 0 no-repeat !important;'+ fixedBg +'}'+ media +'header{position: relative; z-index: 3; margin-bottom: 0}header + .container{background-color: #fff; padding: 0 10px 20px; z-index: 5; position: relative}header + .container .explore-search{margin-top: 0}footer{position: relative; z-index: 3 !important}.app-header{z-index: inherit}.app-head{position: relative; z-index: 6 !important}.panel-banner > div{margin-top: 0}nav.head-menu{height: 37px}.panel-banner{display: block !important; width: 100% !important; margin: 0 auto !important; padding: 0 !important}.fixed-banner-view, #adriver_banner{display: none}.fixed-branding{position: fixed; z-index: 1; margin: 0 !important; top: 0; overflow: hidden; left: 0; width: 50%; height: 100%; right: auto;}.fixed-branding.right{left: auto; right:0;}.branding_bmw_x{border: 0 none; position: absolute; top: 0; right: 0; z-index: 1; width: 100%; height: 100%}.container-body > .container, .container-main, .app-content, .container-header{position: relative; z-index: 3; padding-left: 10px; padding-right: 10px; background: #fff}.container-body > .container-header{padding: 0 !important;}.container-body > .container-main{padding-left: 10px !important; padding-right: 10px !important;}.fixed-addthis, .fixed-addthis .addthis_toolbox{display: none}.container{padding: 0}.container-header{padding: 16px 10px 14px !important; border: 0 none}.app-content{margin-top: 0}.app-header{box-shadow: none !important}.carousel-control.next::before, .showcase-main-offer .next{right: 0; border-radius: 5px 0 0 5px}.carousel-control.prev::before, .showcase-main-offer .prev{left: 0; border-radius: 0 5px 5px 0}.carousel-control.next::before, .showcase-main-offer .next{right: 0; border-radius: 5px 0 0 5px;}.carousel-control.prev::before, .showcase-main-offer .prev{left: 0; border-radius: 0 5px 5px 0;}.bannercode{display: none;}.feedback{display: none}.banner_plase_960px{width: 100%; margin: 0;}.container-footer{position: relative; z-index: 3;}}</style> <div class="fixed-branding"><a href="%%CLICK_URL_UNESC%%'+ link +'" target="_blank" class="branding_bmw_x"></a></div><div class="fixed-branding right"><a href="%%CLICK_URL_UNESC%%'+ link +'" target="_blank" class="branding_bmw_x"></a></div><a href="%%CLICK_URL_UNESC%%'+ link +'" target="_blank" class="banner_bmw"></a>'+ counter;

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

copy.addEventListener('click', function () {
  console.log(bg1.value)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: t+String(style)+"'"});
  });
})