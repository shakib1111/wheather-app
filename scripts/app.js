const cityForm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');


const updatUI=(data)=>
{
    const cityDets=data.cityDets;
    const wheather=data.wheather;

    //update details template

    details.innerHTML=`
            <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${wheather.weatherText}</div>
            <div class="display-4 my-4">
              <span>${wheather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
    
    `
};




const updateCity=async(city)=>{

    const cityDets= await getCity(city);
    const wheather= await getwheather(cityDets.Key);

    return {
        cityDets: cityDets,
        wheather: wheather
    };
 
};

cityForm.addEventListener('submit',e=>{
    
    e.preventDefault();

    const city=cityForm.city.value.trim();
    cityForm.reset();


    updateCity(city)
    .then(data=> updatUI(data))
    .catch(err=> console.log(err));
});