function bclick(val){  
    document.getElementById("screen").value+=val
}
function cleardis(){
    document.getElementById("screen").value=""
}
function rclick(){
    var Text=document.getElementById("screen").value
    var result=eval(Text)
    document.getElementById('screen').value=result
}