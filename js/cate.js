function getFinishElement(path,url,number,name) {
    let mya = document.createElement("a");
    mya.innerText = name + "(" + number.toString() + ")";
    mya.setAttribute("href",path + url);
    let myli = document.createElement("li");
    myli.appendChild(mya);
    return myli;
}
function changeCate(path){
    let mylist = document.getElementById("mylist");

    let DirectX_URL = "blog/DirectX/cate.html";
    let DirectX_Number = 1;
    let DirectX = getFinishElement(path,DirectX_URL,DirectX_Number,"DirectX");
    mylist.appendChild(DirectX);
}