let url='this is a url'

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({url:url},()=>{
        console.log('url is '+url)
    })
})