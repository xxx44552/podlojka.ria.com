function getFromChromeStorage(str) {
  return new Promise(resolve => {
    chrome.storage.sync.get(str, function(result) {
      if(result) {
        resolve(result[str])
      }
    });
  })
}


function sendMess(mess) {
  console.log(mess);
  document.getElementById('textmsg').value = mess;
  document.querySelector('.chatBtn2_1').click();
}


getFromChromeStorage('message').then(mess => {
  sendMess(mess);
  getFromChromeStorage('timeMessage').then(time => {
    setInterval(function () {
      getFromChromeStorage('messageStop').then(res => {
        if(!res) {
          console.log(res)
          sendMess(mess);
        }
      })

    }, time);
  })
});


