
/*
function hello() {
  chrome.tabs.executeScript({
    file: 'scraper.js'
  }); 
}

document.getElementById('createCase').addEventListener('click', hello);
*/

$(function () {
    
    $('#createCase').click(function () {
        chrome.tabs.executeScript({
        file: 'C.S/scraper.js'
    });

    });
    
});

