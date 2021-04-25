const key='xmxgwJr6q6O1EpB7UtwJNAQhC9NJGRCc'

const getCity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search'
    const query=`?apikey=${key}&q=${city}`

    const response= await fetch(base+query);
    const data = await response.json();
    console.log(data);
};

getCity('hyderabad')