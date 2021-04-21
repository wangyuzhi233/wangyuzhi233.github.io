# wangyuzhi233.github.io

## 添加标签
1.更改js/cate.js当中的changeCate函数，需要添加四行代码。
```javascript
    let 标签名字_URL = "blog/标签名字/cate.html";
    let 标签名字_Number = 0;
    let 标签名字 = getFinishElement(path,标签名字_URL,标签名字_Number,"标签名字");
    mylist.appendChild(标签名字);
```
2.拷贝template/cate.html到blog/标签名字/。并将第五行的cate_name更改为标签名字。


## 添加文章。
1.更改js/cate.js当中的changeCate函数，需要改变 标签名字_Number 这个变量 +1
2.在js/blog.json添加新信息。
```javascript
    {
        "categories":"DirectX",
        "date":"2021.04.21",
        "url":"blog/DirectX/d12.html",
        "title":"DirectX12的一些小知识",
        "firstparagraph":"新接触了DX12，发现这种API真的威力无穷，但是随之而来的缺点就是API贴近硬件难以上手，文档不充分。避免遗忘就先在blog上记录一下。"
    }

```
3.拷贝template/d12.html到blog/标签名字/。并将第五行的index + 1。参考json的数量

