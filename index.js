let buttonn=document.getElementById("bttn");
let outputt=document.getElementById("output");

let result=()=>{
    let inputt= (document.getElementById("input").value);
    let percentt= (document.getElementById("selector").value);
    let person=(document.getElementById("input2").value);
    let eachh=document.getElementById("each");
    console.log(percentt)
if(inputt==="" || person==="") {
    outputt.style.display="none"
    alert("Please enter Valid Input")
    return; 
}
else {
    outputt.style.display="block"
}

    if (person==="1") {
        eachh.style.display="none"
    }
    else {
        eachh.style.display="block"
    }

    let total=(inputt*percentt)/person
    outputt.textContent="Rs. "+total

}

buttonn.addEventListener("click",result)

// || person===""