const inputprice=document.getElementById('inputprice');
const confirmbtn=document.getElementById('confirmbtn');
const pay =document.getElementById('pay');

confirmbtn.addEventListener('click',function(){
    const realprice=parseFloat(inputprice.value);
    if(isNaN(realprice) || realprice<1){
        alert ('invalid Input');
        inputprice.value='';
        return;

    }
    const priceAfterdisc=realprice-(realprice*(30/100));
    pay.innerText=priceAfterdisc;
    inputprice.value='';
})