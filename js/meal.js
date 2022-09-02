//url

const loadmeal = (search)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
.then(res=>res.json())
.then(data=>displayMeals(data.meals))
}
const displayMeals = meals =>{
    // console.log(meals)
    const divcontainer =document.getElementById('meal-container')
    divcontainer.innerHTML=``;
    meals.forEach(meal => {
      console.log(meal)
      const divMeal =document.createElement('div')
        divMeal.classList.add('col')
        divMeal.innerHTML=`
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body bg-black">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text text-warning">${meal.strInstructions.slice(0,200)}</p>
   
        </div>
      </div>
        `;
        
        divcontainer.appendChild(divMeal)
    });
}
const searchFOOD =()=>{
    const inputsearch =document.getElementById('input-search')
    const searchText = inputsearch.value;
    loadmeal(searchText)
    inputsearch.value ='';
    
}
const displaymealdetails=()=>{
    console.log()
}
//loadmeal('sweet')
