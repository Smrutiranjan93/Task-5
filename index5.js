//get element by query selector
// var submit=document.querySelector('input[type="submit');
// submit.value="send";

// const item=document.querySelector('.list-group-item');
// item.style.color="green";

//making backgroundcolor of second item green

// const secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="green";

//making backgroundcolor of last item green
// const lastChild=document.querySelector('.list-group-item:nth-child(4)');
// lastChild.style.backgroundColor="green";

//make 3rd item invisible
// const thirdChild=document.querySelector('.list-group-item:nth-child(3)');
// thirdChild.style.visibility="hidden"

//using queryselectorall
const secondItem=document.querySelectorAll('.list-group-item')
secondItem[1].style.color="green";

// making odd one 
const oddItem=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<oddItem.length;i++){
oddItem[i].style.backgroundColor="green"
}



