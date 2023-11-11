const apiKey = "FZSRtaTpqQl54rMFau1Dg7o9rBgAgDnF";
const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let oneTo = document.querySelector("span.one-to");
let toValuta = document.querySelector("span.to-valuta");
let oneFrom = document.querySelector("span.one-from");
let oneTo2 = document.querySelector("span.one-to2");
let toValuta2 = document.querySelector("span.to-valuta2");
let oneFrom2 = document.querySelector("span.one-from2");
let b = document.querySelector("button.active");
let baseCurrency = "RUB";
let targetCurrency = "USD";
let block = document.querySelector(".have .d-none");
let block2 = document.querySelector(".want-to-buy .d-none");

// const amount = 100;
let buttons = document.querySelectorAll(".btn-all-1 button");
let buttons2 = document.querySelectorAll(".btn-all-2 button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    baseCurrency = button.innerHTML.trim();
    inp1.value = 0;
    inp2.value = 0;
    const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((datax) => {
        oneFrom2.innerHTML = baseCurrency;
        oneTo2.innerHTML = datax.value.toFixed(4);
        toValuta2.innerHTML = targetCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

    fetch(`${apiUrl2}`)
      .then((response) => response.json())
      .then((data1) => {
        oneFrom.innerHTML = targetCurrency;
        oneTo.innerHTML = data1.value.toFixed(4);
        toValuta.innerHTML = baseCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

buttons2.forEach((button) => {
  button.addEventListener("click", () => {
    buttons2.forEach((btn) => {
      btn.classList.remove("active2");
    });

    button.classList.add("active2");
    targetCurrency = button.innerHTML.trim();
    console.log(targetCurrency);
    inp1.value = 0;
    inp2.value = 0;
    const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((datax) => {
        oneFrom2.innerHTML = baseCurrency;
        oneTo2.innerHTML = datax.value.toFixed(4);
        toValuta2.innerHTML = targetCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

    fetch(`${apiUrl2}`)
      .then((response) => response.json())
      .then((data1) => {
        oneFrom.innerHTML = targetCurrency;
        oneTo.innerHTML = data1.value.toFixed(4);
        toValuta.innerHTML = baseCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
    
  });


const onChange1 = async (e) => {
  block2.classList.remove("d-none");
  block.classList.remove("d-none");

  if (parseFloat(inp1.value) <= 0 || inp1.value.trim() === "") {
    const apiUrlForZero = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;
    inp2.value = 0;

    fetch(`${apiUrlForZero}`)
      .then((response) => response.json())
      .then((dataForZero) => {
        oneFrom2.innerHTML = baseCurrency;
        oneTo2.innerHTML = dataForZero.value.toFixed(4);
        toValuta2.innerHTML = targetCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const apiUrlForZero2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

    fetch(`${apiUrlForZero2}`)
      .then((response) => response.json())
      .then((dataForZero2) => {
        oneFrom.innerHTML = targetCurrency;
        oneTo.innerHTML = dataForZero2.value.toFixed(4);
        toValuta.innerHTML = baseCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${e.target.value}`;

    await fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        inp2.value = data.value.toFixed(4);
      })
      .catch((error) => {
        alert("Sorry, there is a problem with the internet. Please try again.");
      });
  }
};
const onChange2 = async (e) => {
  block2.classList.remove("d-none");
  block.classList.remove("d-none");

  if (parseFloat(inp2.value) <= 0 || inp2.value.trim() === "") {
    inp1.value = 0;
    const apiUrlForZero2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

    fetch(`${apiUrlForZero2}`)
      .then((response) => response.json())
      .then((dataForZero2) => {
        oneFrom.innerHTML = baseCurrency;
        oneTo.innerHTML = dataForZero2.value.toFixed(4);
        toValuta.innerHTML = targetCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const apiUrlForZero21 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

    fetch(`${apiUrlForZero21}`)
      .then((response) => response.json())
      .then((dataForZero2) => {
        oneFrom2.innerHTML = targetCurrency;
        oneTo2.innerHTML = dataForZero21.value.toFixed(4);
        toValuta2.innerHTML = baseCurrency;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    const apiUrlInp2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${e.target.value}`;

    await fetch(`${apiUrlInp2}`)
      .then((response) => response.json())
      .then((datai2) => {
        inp1.value = datai2.value.toFixed(4);
        const apiUrl21 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

        fetch(`${apiUrl21}`)
          .then((response) => response.json())
          .then((datax2) => {
            oneFrom.innerHTML = baseCurrency;
            oneTo.innerHTML = datax2.value.toFixed(4);
            toValuta.innerHTML = targetCurrency;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        const apiUrlinp2 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

        fetch(`${apiUrlinp2}`)
          .then((response) => response.json())
          .then((datainp22) => {
            oneFrom2.innerHTML = targetCurrency;
            oneTo2.innerHTML = datainp22.value.toFixed(4);
            toValuta2.innerHTML = baseCurrency;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        alert("Sorry, there is a problem with the internet. Please try again.");
      });
  }
};
// 1cide sagda 0 yaz+

//  defsultda asagini silmek duzdu?
//button  deyisende asagida qalan evvelkinin sozleri+
// 12 usd usd ye
