/*let shopList = [];
const addItem = (ev)=>{
    ev.preventDefault();
    let list = {
        listItem:document.getElementsByClassName('item').value,
        quant: document.getElementsByClassName('quant').value
    }
    function pustList(){
        shopList.push(list.value);
    }
    function printList(){
        let tk = document.getElementById('printList');
        tk.innerHTML=console.log(shopList)
    }

}*/
var Shoplist = [];
var Bench = [];
const item = document.getElementById("item");
const quant = document.getElementById("quant");


            
function add_element(){
    Shoplist.push({listitem: item.value,
    quanty : quant.value});
    }
function remove_elementE(){
    popped = Shoplist.pop({listitem: item.value,
    quanty : quant.value});
    Bench.push(popped);
}
function remove_elementB(){
    shifted = Shoplist.shift({listitem: item.value,
    quanty : quant.value});
    Bench.push(shifted);
}


function disp(){
    document.getElementById("printList").innerHTML='';
    for (var key in Shoplist){
        document.getElementById("printList").innerHTML += Shoplist[key].listitem+' '+Shoplist[key].quanty+'pieces' +'<br/>';
    }          
    
    console.log(Shoplist)
}

function disp1(){
    document.getElementById("printList1").innerHTML='';
    for (var key in Bench){
        document.getElementById("printList1").innerHTML += Bench[key].listitem+' '+Bench[key].quanty +'pieces'+'<br/>';
    }          
    
    console.log(Shoplist)
}

function replace(){
    Shoplist.splice(2, 1,{listitem: "Orange Juice",
        quanty : 17});
}
  