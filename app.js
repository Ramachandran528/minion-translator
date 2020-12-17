const inputTxt=document.querySelector("#inputtxt");
const outputTxt=document.querySelector("#outputtxt");
const btnTranslate=document.querySelector("#btntranslate");
const url='https://api.funtranslations.com/translate/minion.json';

function createURL(text)
{
    return url+"?text="+text;
}

function errorHandler(error)
{
    alert("OOps An Server Error has occured please try again later");
}

// Adding click event listener
btnTranslate.addEventListener("click",function()
{
   fetch(createURL(inputTxt.value))
   .then(response => response.json())
   .then(data => outputTxt.innerHTML=data.contents.translated)
   .catch(errorHandler);//Handling Errors
})