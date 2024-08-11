chrome.runtime.onInstalled.addListener(() => {
     chrome.contextMenus.create({
       id: "sampleContextMenu",
       title: "Sample Context Menu",
       contexts: ["selection"]
     });
   });

   chrome.contextMenus.onClicked.addListener((info, tab) => {
     if (info.menuItemId === "sampleContextMenu") {
       chrome.tabs.sendMessage(tab.id, {
         type: "PERFORM_ACTION",
         payload: info.selectionText
       });
     }
   });
