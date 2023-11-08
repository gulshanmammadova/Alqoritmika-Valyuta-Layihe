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
let buttons = document.querySelectorAll(".btn-all-1 button");
let buttons2 = document.querySelectorAll(".btn-all-2 button");

buttons.forEach(button => {
  button.addEventListener('click', () => {
      buttons.forEach(btn => {
          btn.classList.remove('active');
      });

      button.classList.add('active');
      baseCurrency=button.innerHTML.trim();
          inp1.value=''
          inp2.value=''
  });
});

buttons2.forEach(button => {
  button.addEventListener('click', () => {
      buttons2.forEach(btn => {
          btn.classList.remove('active2');
      });

      button.classList.add('active2');
      targetCurrency=button.innerHTML.trim();
      console.log(targetCurrency)
          inp1.value=''
          inp2.value=''
  });
});
inp2.addEventListener('change',async (e)=>{
  if(parseFloat(inp2.value) === 0 ||inp2.value.trim() === ''){
    inp1.value=0
    oneFrom.innerHTML=baseCurrency;
    oneTo.innerHTML=data1.value/inp2.target.value;
    toValuta.innerHTML=targetCurrency;

  }
  else{
    const newApiUrl = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${e.target.value}`;

    await fetch(`${newApiUrl}`)
      .then(response => response.json())
      .then(data21 => {
        console.log(data21)

        inp1.value=data21.value.toFixed(4)
        const NewApiUrl1 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

         fetch(`${newApiUrl}`)
          .then(response => response.json())
          .then(data22 => {
            oneFrom.innerHTML=baseCurrency;
            oneTo.innerHTML=data22.value.toFixed(4);
            toValuta.innerHTML=targetCurrency;
           

          })
          .catch(error => {
            console.error('Error:', error);
          }); 
          const apiUrl22 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

          fetch(`${apiUrl22}`)
           .then(response => response.json())
           .then(data221 => {
            oneFrom2.innerHTML=targetCurrency;
            oneTo2.innerHTML=data221.value.toFixed(4);
            toValuta2.innerHTML=baseCurrency;
           

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

// 0 olanda islemir