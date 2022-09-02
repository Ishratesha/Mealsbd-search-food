const showCatagoris =()=>{
    url ='https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayec(data.categories.slice(0,12)))
}
displayec= catagorylist =>{
    const divcontainer =document.getElementById('divcate')
    const ul = document.getElementById('users-li')
    catagorylist.forEach(catagory => {
       
    
        const divcard =document.createElement('div')
        divcard.classList.add('col')
        divcard.innerHTML=`
        <div class="card h-75 w-100 border border-bottom-0 ">
        <img src="${catagory.strCategoryThumb}" class="card-img-top bg-black" alt="...">
        <div class="card-body bg-black">
          <h5 class="card-title text-center text-warning fs-4 fst-italic">${catagory.strCategory}</h5>
         
        </div>
        `
       ;
       divcontainer.appendChild(divcard)
    });
}
showCatagoris()