const form = document.querySelector(".main");
const pages = document.querySelector(".pages");
const rangeInput = document.getElementById("range");
const priceContainer  = document.querySelector(".price");
const toggle  = document.querySelector(".toggle");
const dateContainer  = document.querySelector(".y-m");


console.log(toggle.checked)


console.log({form, pages, rangeInput})

const VIEWS_DATA = [
    {
        pageViews: '10k',
        monthlyCost: 8,
        leftPercentage: 0
    },
    {
        pageViews: '50k',
        monthlyCost: 12,
        leftPercentage: 25
    },
    {
        pageViews: '100k',
        monthlyCost: 16,
        leftPercentage: 50
    },
    {
        pageViews: '500k',
        monthlyCost: 24,
        leftPercentage: 75
    },
    {
        pageViews: '1M',
        monthlyCost: 36,
        leftPercentage: 100
    },
]


form.addEventListener("submit", (e) => e.preventDefault())

rangeInput.addEventListener("input", updateFormOnRangeInput)
toggle.addEventListener("input", updateCost)

function getData(){
    const currentValue = rangeInput.value;
    const index = currentValue - 1;
    return{pageViews, monthlyCost, leftPercentage} = VIEWS_DATA[index];
}


function  updateRangeInput(){
    const {leftPercentage}  = getData();
    form.style.setProperty('--left',leftPercentage)
}

function updatePageViews(){
    const {pageViews}  = getData();
    pages.textContent = `${pageViews} PAGEVIEWS`
}

function isAnnualFrequency(){ 
    return toggle.checked 
};

function updatePriceFrequency(isAnnual){
    if (isAnnual){
        dateContainer.textContent = '/ year'
    }else{ 
        dateContainer.textContent = '/ month' 
    }
}

function updateCost(){
    const {monthlyCost} = getData();
    const isAnnual = isAnnualFrequency()
    const price = isAnnual ? ((monthlyCost * 12) * 0.75) : monthlyCost
    priceContainer.textContent = `$${price.toFixed(2)}`
    updatePriceFrequency(isAnnual)
}


function updateFormOnRangeInput(){
    updateRangeInput()
    updatePageViews()
    updateCost()
}

// updateFormOnRangeInput()