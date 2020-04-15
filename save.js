var script = '';

var stl = '';

function str() {

  var inputBigBg = document.getElementById('big-bg').value;

  var inputSmallBg = document.getElementById('small-bg').value;

  var inputLink = document.getElementById('ad-link').value;

  var inputMideaRequest = document.getElementById('media-req').value;

  var bigBg = inputBigBg;

  var smallBg = inputSmallBg;

  var hide = document.querySelectorAll('.hide');

  var fixedBg = document.getElementById('fixed-bg');

  var counter = document.getElementById('counter').value;

  var counterWrap = '<img src="'+counter+'" style="position:fixed;visibility:hidden;" />'

  if(!counter) {
    counterWrap = '';
  }

  for(let i = 0; i < hide.length; i++) {
    hide[i].style.display = 'none';
  }

  if(inputSmallBg) {
    for(let i = 0; i < hide.length; i++) {
      hide[i].style.display = 'block';
    }
  }

  var fixedBg = document.getElementById('fixed');

  var fixedCss = 'background-attachment: fixed !important;';

  if(!fixedBg.checked) {
    fixedCss = '';
  }

  var media = '@media (max-width: '+inputMideaRequest+'px){body{background: url(' + smallBg + ')  center 0 no-repeat !important;'+ fixedCss +'}}'

  var link = inputLink;

  if(!smallBg) {
    media = '';
  }

  var styleStr = '<style type="text/css">@media (min-width: 769px){body.modal-open, body.modal-open .fixed-branding{background-position: calc(50% - 8px) 0 !important;}html{}body{background: url(' + bigBg + ')  center 0 no-repeat !important;'+ fixedCss +'}'+ media +'header{position: relative; z-index: 3; margin-bottom: 0}header + .container{background-color: #fff; padding: 0 10px 20px; z-index: 5; position: relative}header + .container .explore-search{margin-top: 0}footer{position: relative; z-index: 3 !important}.app-header{z-index: inherit}.app-head{position: relative; z-index: 6 !important}.panel-banner > div{margin-top: 0}nav.head-menu{height: 37px}.panel-banner{display: block !important; width: 100% !important; margin: 0 auto !important; padding: 0 !important}.fixed-banner-view, #adriver_banner{display: none}.fixed-branding{position: fixed; z-index: 1; margin: 0 !important; top: 0; overflow: hidden; left: 0; width: 50%; height: 100%; right: auto;}.fixed-branding.right{left: auto; right:0;}.branding_bmw_x{border: 0 none; position: absolute; top: 0; right: 0; z-index: 1; width: 100%; height: 100%}.container-body > .container, .container-main, .app-content, .container-header{position: relative; z-index: 3; padding-left: 10px; padding-right: 10px; background: #fff}.container-body > .container-header{padding: 0 !important;}.container-body > .container-main{padding-left: 10px !important; padding-right: 10px !important;}.fixed-addthis, .fixed-addthis .addthis_toolbox{display: none}.container{padding: 0}.container-header{padding: 16px 10px 14px !important; border: 0 none}.app-content{margin-top: 0}.app-header{box-shadow: none !important}.carousel-control.next::before, .showcase-main-offer .next{right: 0; border-radius: 5px 0 0 5px}.carousel-control.prev::before, .showcase-main-offer .prev{left: 0; border-radius: 0 5px 5px 0}.carousel-control.next::before, .showcase-main-offer .next{right: 0; border-radius: 5px 0 0 5px;}.carousel-control.prev::before, .showcase-main-offer .prev{left: 0; border-radius: 0 5px 5px 0;}.bannercode{display: none;}.feedback{display: none}.banner_plase_960px{width: 100%; margin: 0;}.container-footer{position: relative; z-index: 3;}}</style> <div class="fixed-branding"><a href="%%CLICK_URL_UNESC%%'+ link +'" target="_blank" class="branding_bmw_x"></a></div><div class="fixed-branding right"><a href="%%CLICK_URL_UNESC%%'+ link +'" target="_blank" class="branding_bmw_x"></a></div><a href="%%CLICK_URL_UNESC%%'+ link +'" target="_blank" class="banner_bmw"></a>'+ counterWrap;

  stl = styleStr;

  var fullString = '<script> <!--\n\nvar brandStyles =\''+styleStr+'\';\nvar head=window.top.document.getElementById("div728x90head");\nif (head ) {head.innerHTML=brandStyles; }\n\n//-->\n</script>';

  script = fullString;

  var liner = document.getElementById('show-code');

  liner.innerText = fullString;

  var copyBtn = document.getElementById('copy');

  copyBtn.style.backgroundColor = '';
  copyBtn.style.color = '';

  return fullString;
};

try {
  str()
} catch(e) {
  // statements
  console.log(e);
}

function test() {

  var btn = document.getElementById('test');

  btn.onclick = function () {
    window.open('ria.html');
    localStorage.setItem('str', stl)
  };
}

try {
  test();
} catch(e) {
  // statements
  console.log(e);
}



function setStyle() {
  var banner = document.getElementById('div728x90head');

  banner.innerHTML = localStorage.getItem('str');

}


try {
  setStyle();
} catch(e) {
  // statements
  console.log(e);
}


function copyScript() {

  var copyBtn = document.getElementById('copy');

  copyBtn.onclick = function () {
    navigator.clipboard.writeText(script)
        .then(() => {
          copyBtn.style.backgroundColor = 'green';
          copyBtn.style.color = 'white';
        })
        .catch(err => {
          console.log('упс..', err);
          alert('упс.. ' + err)
        });
  };
}

try {
  copyScript();
} catch(e) {
  // statements
  console.log(e);
}