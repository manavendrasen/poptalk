const getUrlButton =document.getElementById("getDataUrl");
const BASE_URL = 'http://localhost:5000/api/v1/user';

getUrlButton.addEventListener('click',async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    const response = await fetch(`${BASE_URL}/e5b609e9-2f1e-4088-a404-3dceef5d7325/bucket/1/post`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url:tab.url
        })
    });
    console.log(response);

})
