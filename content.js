chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
     if (message.type === "PERFORM_ACTION") {
       alert(`You selected: ${message.payload}`);
     }
   });
