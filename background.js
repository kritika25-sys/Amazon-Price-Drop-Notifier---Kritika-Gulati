console.log('Background script is running.');
var jq = $.ajax({
    url:"http://localhost:8000/save-products",
    data:{test:"test data"},
    type:'POST',
    success: function(response){
        console.log('response:', response)
    },
    error: function(response){
        console.log('response:', response)
    }
});
chrome.runtime.onMessage.addListener(function(message,sender,sendresponse){
    console.log(message);
});