function getChat() {
  let chat = document.querySelectorAll('[id^="msg_"]');
  let arr = [];
  for(let i = 0; i < chat.length; i++) {
    console.log(chat[i].innerText)
    arr.push(chat[i].innerText)
  }
  return arr;
}

function findStr(find, str) {
  const strArr = find.split(',');
  const regArr = strArr.map(reg => new RegExp(reg, 'i'));
  const regexUser = /\[.+?\]/;
  let chat = document.querySelectorAll('[id^="msg_"]');
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    const text = str[i];
    const isMatch = regArr.every(rx => rx.test(text));
    if(isMatch) {
      const user = str[i].match(regexUser);
      arr.push(user)
    }
  }
  for(let i = 0; i < chat.length; i++) {
    if(regArr.every(rx => rx.test(chat[i].innerText))) {
      chat[i].style.backgroundColor = '#ffdddd';
    }
  }
  return arr;
}


function getFromChromeStorage(str) {
  return new Promise(resolve => {
    chrome.storage.sync.get(str, function(result) {
      if(result) {
        resolve(result[str])
      }
    });
  })
}

function find() {
  getFromChromeStorage('find').then(result => {
    var res = findStr(result, getChat());
    let list = [...new Set(res.map(el=>el[0]))];
    var responseMess;
    getFromChromeStorage('returnMess').then(res => responseMess = res);
    console.log(list, '---arr');
    for (let i = 0; i < list.length; i++) {
      (function(i) {
        setTimeout(function() {
          const str = `private ${list[i]} ${responseMess}`;
          console.log(str);
          document.getElementById('textmsg').value = str;
          document.querySelector('.chatBtn2_1').click();
        }, i * 3000);
      })(i);
    }
  });
}

function start(time) {

  find();

  setInterval(function () {
    getFromChromeStorage('chatStop').then(res => {
      if(!res) {
        find();
      }
    });
  }, time);
}

getFromChromeStorage('chatTime').then(res => start(res));


