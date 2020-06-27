function getnumber(num)
{
    var result=document.getElementById("textbox");
    result.value+=num

}

function clearresult()
{
    var result=document.getElementById("textbox");
    result.value=""
}

function performoperation()
{
    var result=document.getElementById("textbox");
    result.value=eval(result.value)
}