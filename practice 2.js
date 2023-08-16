const inputprice=document.getElementById('inputprice');
const confirmbtn=document.getElementById('confirmbtn');
const inputcoupne=document.getElementById('inputcoupne');
const pay =document.getElementById('pay');

confirmbtn.addEventListener('click',function(){
    const realprice=parseFloat(inputprice.value);
    if(isNaN(realprice) || realprice<1){
        alert ('invalid Input');
        inputprice.value='';
        inputcoupne.value=''
        return;

    }
    if(inputcoupne.value=='DISC30'){
        const priceAfterdisc=realprice-(realprice*(30/100));
    pay.innerText=priceAfterdisc;
    inputprice.value='';
    inputcoupne.value=''
    return
    }
    pay.innerText=realprice;
    inputprice.value='';
    inputcoupne.value=''
})