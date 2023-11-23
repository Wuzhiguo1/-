 // 全选按钮 获取值
 let cherAll = document.getElementById('cherAll');
 //找单个按钮和全选按钮保持一致 设置类名checkOne
 let ckONE = [...document.getElementsByClassName('checkOne')];
 cherAll.onclick = function () {
   ckONE.map((item) => {
     item.checked = this.checked;
     getTotlePrice();
   })
 };
 // 单个按钮点击事件
 ckONE.map((item) => {
   item.onclick = function () {
     // 全选按钮的状态
     cherAll.checked = ckONE.every((item) => {
       return item.checked;
     })
     getTotlePrice();
   }
 })

 //删除功能
 let delEs = [...document.getElementsByClassName('del')]
 //添加事件 事件内删除父亲节点
 delEs.map((item) => {
   item.onclick = function () {
     let sure = confirm('确定要删除吗');
     sure ? this.parentElement.remove() : "";
     getTotlePrice();
   }
 })

 //加减功能
 //增加功能
 let addEls = [...document.getElementsByClassName('plus')];
 addEls.map((item) => {
   item.onclick = function () {
     this.nextElementSibling.value++ < 4 ?
       this.nextElementSibling.value : alert('限购5台');
     getTotlePrice();
   }
 })
 //减少功能
 let backEls = [...document.getElementsByClassName('minus')];
 backEls.map((item) => {
   item.onclick = function () {
     if (this.previousElementSibling.value == 1) {
       let sureless = confirm('确定要删除吗');
       sureless ?
         item.parentElement.parentElement.remove() : "";
     } else {
       this.previousElementSibling.value--;
     }
     getTotlePrice();
   }

 })
 //计算总和
 function getTotlePrice() {
   let totle = 0;
   ckONE.map((item) => {
     if (item.checked) {// 输入框的值 第3个兄弟的二儿子
       let num = item.nextElementSibling
         .nextElementSibling.nextElementSibling;
       let inpValue = num.children[1].value; //数量
       console.log(inpValue);
       let price = num.nextElementSibling.children[0].innerText; //价格
       console.log(price);
       totle += inpValue * price//单个总价

     }
     document.querySelector('.totleP').innerHTML = totle;
   })
 }
 getTotlePrice();