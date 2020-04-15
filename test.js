// const findStringValue = document.getElementById('find-regex');
// const returnStringValue = document.getElementById('return-mess');
// const hideChatBtn = document.getElementById('hide-chat');
// const selectTimeFindString = document.getElementById('time-find-string');
// const sendMessInput = document.getElementById('send-mess');
// const selectTimeSendMess = document.getElementById('time-send-mess');
//
// document.getElementById('save-find-string').onclick = function() {
//   chrome.storage.sync.set({find: findStringValue.value, returnMess: returnStringValue.value, chatTime: selectTimeFindString.value}, function() {
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'console.log("' + "Сохранено: " + findStringValue.value + "|" + returnStringValue.value + "|" + selectTimeFindString.value +'")'});
//     });
//   });
// };
//
// chrome.storage.sync.get('find', function(result) {
//   if(result) {
//     findStringValue.value = result['find'];
//   }
// });
//
// chrome.storage.sync.get('returnMess', function(result) {
//   if(result) {
//     returnStringValue.value = result['returnMess'];
//   }
// });
//
// chrome.storage.sync.get('chat', function(result) {
//
//   if(result['chat'] == false) {
//     hideChatBtn.checked = false;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'console.log("' + "Чат: " + hideChatBtn.checked +'");document.getElementById("touchmain").style.height="100vh";document.getElementById("main").style.height="100vh";document.getElementById("reline1").style.display="none";document.getElementById("reline2").style.display="none";'});
//     });
//   }
//   if(result['chat'] == true) {
//     hideChatBtn.checked = true;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'console.log("' + "Чат: " + hideChatBtn.checked +'");document.getElementById("touchmain").style.height="100%";document.getElementById("main").style.height="100%";document.getElementById("reline1").style.display="";document.getElementById("reline2").style.display="";'});
//     });
//   }
//
// });
//
// chrome.storage.sync.get('chatTime', function(result) {
//   if(result) {
//     selectTimeFindString.value = result['chatTime'];
//   }
// });
//
// chrome.storage.sync.get('timeMessage', function(result) {
//   if(result) {
//     selectTimeSendMess.value = result['timeMessage'];
//   }
// });
//
// chrome.storage.sync.get('message', function(result) {
//   if(result) {
//     sendMessInput.value = result['message'];
//   }
// });
//
// chrome.storage.sync.get('autobonus', function(result) {
//   if(result) {
//     document.getElementById('autobouns-status').checked = result['autobonus'];
//   }
// });
//
// document.getElementById('start-find-func').onclick = function() {
//   chrome.storage.sync.set({chatStop: false}, function() {
//     console.log('Chat: start');
//   });
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {file: '/func-find.js'});
//   });
// };
//
// document.getElementById('stop-find-func').onclick = function() {
//   chrome.storage.sync.set({chatStop: true}, function() {
//     console.log('Chat: stop');
//   });
// };
//
// hideChatBtn.onchange = function() {
//   if(hideChatBtn.checked){
//     chrome.storage.sync.set({chat: true}, function() {
//       console.log('Status chat: true');
//     });
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'console.log("' + "Чат: " + hideChatBtn.checked +'");document.getElementById("touchmain").style.height="100%";document.getElementById("main").style.height="100%";document.getElementById("reline1").style.display="";document.getElementById("reline2").style.display="";'});
//     });
//   }else {
//     chrome.storage.sync.set({chat: false}, function() {
//       console.log('Status chat: false');
//     });
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'console.log("' + "Чат: " + hideChatBtn.checked +'");document.getElementById("touchmain").style.height="100vh";document.getElementById("main").style.height="100vh";document.getElementById("reline1").style.display="none";document.getElementById("reline2").style.display="none";'});
//     });
//   }
// };
//
// document.getElementById('save-send-mess').onclick = function () {
//   chrome.storage.sync.set({message: sendMessInput.value, timeMessage: selectTimeSendMess.value}, function() {
//     console.log('Save message');
//   });
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'console.log("' + "Сообщение: " + sendMessInput.value + "|" + selectTimeSendMess.value +'")'});
//   });
// }
//
// document.getElementById('start-send-mess').onclick = function() {
//   chrome.storage.sync.set({messageStop: false}, function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {file: '/send-mess.js'});
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'console.log("' + "Спам!" +'")'});
//     });
//   });
// };
//
// document.getElementById('stop-send-mess').onclick = function() {
//   chrome.storage.sync.set({messageStop: true}, function() {
//     console.log('Chat: stop');
//   });
// };
//
// document.getElementById('autobonus').onclick = function() {
//   document.getElementById('autobonus').style.borderColor = 'green'
//   chrome.storage.sync.set({autobonus: true}, function() {
//     console.log('Autobonus: true');
//   });
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {file: '/autobonus.js'});
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'console.log("' + "Автобонус!" +'")'});
//   });
// };

