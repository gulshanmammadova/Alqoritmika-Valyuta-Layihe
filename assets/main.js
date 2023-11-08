const apiKey = 'FZSRtaTpqQl54rMFau1Dg7o9rBgAgDnF';
const apiUrl1 = 'https://api.currencybeacon.com/v1/convert';
let inp1=document.querySelector('.inp1')
let inp2=document.querySelector('.inp2')
let oneTo=document.querySelector('span.one-to')
let toValuta=document.querySelector('span.to-valuta')
let oneFrom=document.querySelector('span.one-from')
let oneTo2=document.querySelector('span.one-to2')
let toValuta2=document.querySelector('span.to-valuta2')
let oneFrom2=document.querySelector('span.one-from2')
let b=document.querySelector('button.active')
let baseCurrency = 'RUB'; 
let targetCurrency = 'USD'; 
// const amount = 100; 
let buttonContainer = document.querySelectorAll(".btn-all-1 button");
let buttonContainer2 = document.querySelectorAll(".btn-all-2 button");

buttonContainer.forEach(f=>{

    
   
    f.addEventListener("click", function(event) {
      

        this.classList.add('click-btn')  
        this.classList.add('active')
        console.log(this.innerHTML.trim())
        
       f.classList.remove('active') 

        baseCurrency=this.innerHTML.trim();
        inp1.value=''
        inp2.value=''

    });
   
    
})
buttonContainer2.forEach(v=>{

    
   
    v.addEventListener("click", function(event) {
       let clickedButton2 = event.target;

        clickedButton2.classList.add('click-btn')
        clickedButton2.classList.add('click-btn')
        
        
        console.log(clickedButton2.innerHTML.trim())
        
       v.classList.remove('active') 
        clickedButton2.classList.add('active')

        targetCurrency=clickedButton2.innerHTML.trim();
        inp1.value=''
        inp2.value=''

    });
   
    
})
inp1.addEventListener('change',async (e)=>{
   

  if(parseFloat(inp1.value) === 0 ||inp1.value.trim() === ''){
    inp2.value=0
    oneFrom.innerHTML=baseCurrency;
    oneTo.innerHTML=data.value/inp1.target.value;
    toValuta.innerHTML=targetCurrency;

  }else{
    const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${e.target.value}`;

    await fetch(`${apiUrl}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        inp2.value=data.value.toFixed(4)
        const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

         fetch(`${apiUrl}`)
          .then(response => response.json())
          .then(data => {
            oneFrom2.innerHTML=baseCurrency;
            oneTo2.innerHTML=data.value.toFixed(4);
            toValuta2.innerHTML=targetCurrency;
           

          })
          .catch(error => {
            console.error('Error:', error);
          }); 
          const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

          fetch(`${apiUrl2}`)
           .then(response => response.json())
           .then(data1 => {
            oneFrom.innerHTML=targetCurrency;
            oneTo.innerHTML=data1.value.toFixed(4);
            toValuta.innerHTML=baseCurrency;
           

           })
           .catch(error => {
             console.error('Error:', error);
           }); 
      })
      .catch(error => {
        console.error('Error:', error);
      }); 

     
  }



})

