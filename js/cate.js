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
    let 随笔_URL = "blog/随笔/cate.html";
    let 随笔_Number = 0;
    let 随笔 = getFinishElement(path,随笔_URL,随笔_Number,"随笔");

    mylist.appendChild(DirectX);
    mylist.appendChild(随笔);
}