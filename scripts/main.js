var app =new Vue({
el: '#app',
data: {
    input_name:'',
    input_price:'',
    input_amount:'',
    names:[],
    prices:[],
    amounts:[],
    total:0
},
methods: {
    addList:function(name,price,amount){

       if(name.trim()===''||price.trim()===''||amount.trim()==='')
        { 
          alert("請填入資料");
            return;
        }
        if(isNaN(parseInt(price,10))||isNaN(parseInt(amount,10)))
        {
            alert("應輸入數字");
            return;
        }
        this.names.push({content:'名稱:'+name+' 價格:'+price+' 數量:'+amount,completed:false});
        this.total+=price*amount;
        this.prices.push(price);
        this.amounts.push(amount);
    //   console.log("+加入")
    //   console.log("prices陣列元素個數:"+this.prices.length); 
    //   console.log("amounts陣列元素個數:"+this.amounts.length);
        this.cleartext();
    },
    delList: function(name){
        console.log("+刪除")
        var n_index=this.names.indexOf(name);
        this.total-=(this.prices[n_index])*(this.amounts[n_index]);
        this.names.splice(n_index,1);
        this.prices.splice(n_index,1);
        this.amounts.splice(n_index,1);
     //  console.log("prices陣列元素個數:"+this.prices.length);
     //  console.log("amounts陣列元素個數:"+this.amounts.length);
     //  console.log(this.prices);
  
      },
      cleartext: function(){ //清空text窗
          this.input_price='';
          this.input_name='';
          this.input_amount='';
      }

}

})
/*DOM 原js
var listtobuy = document.querySelector('.listtobuy');
var senddata = document.querySelector('.add_btn');
var dataBase = JSON.parse(localStorage.getItem('listItem')) || [];


senddata.addEventListener('click', addData) 
listtobuy.addEventListener('click', delData) 

function addData(e) {
    e.preventDefault(); 

    var name_txt = document.querySelector(".input_name");
    var pric_txt = document.querySelector(".input_price");
    var num_txt = document.querySelector(".amount");

    if (name_txt.value.trim() === "" || pric_txt.value.trim() === "" || num_txt.value.trim() === "")// ?T????(????????p?????N???????????a??_?禡)
    {
        alert("Value isn't exist")
        return;
    }


    var tr = document.createElement("li");
    tr.innerHTML = "<li id='{{id}}' class='buy_item'>{{num_txt}}.{{name}}<div class='price'>{{price}}</div><div data-del_id='{{id}}' class='del_btn' data-price='{{price}}' data-num='{{number}}'>X</div></li>";
    // tr.innerHTML =todo.value;
    document.getElementById("listtobuy").append(tr);


    //清空選單
    var x = document.querySelector('#input_name');
    x.value = "";

    x = document.querySelector('#input_price');
    x.value = "";

    x = document.querySelector('#amount');
    x.value = "";


}
//更新清單
function updateList(dataBase) {
    str = ''; //ataBase.length
    for (i = 0; i < dataBase.length; i++) {
        // str += "<li id='{{id}}' class='buy_item'>{{num}}.{{name}}<div class='price'>{{price}}</div><div data-del_id='{{id}}' class='del_btn' data-price='{{price}}' data-num='{{number}}'>X</div></li>";
        //str += '<li><a href="#" data-num=' + i + '>delete?@</a>' + (i + 1) + '. ' + dataBase[i].content + '</li>';
        //str +='<li><a href="#" data-num='+i+'>delete</a>'+(i+1)+ >   </li>'
        //str += '<li><span>' + items[i].content + '</span><i class="fas fa-trash-alt" data-listnum=' + i + ' ></i></li>';

    }
       listtobuy.innerHTML = str;
}



function delData(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'I') { return; }; 
    var num = e.target.dataset.num; 
    dataBase.splice(num, 1); 

    localStorage.setItem('listItem', JSON.stringify(dataBase));
    updateList(dataBase);
}*/