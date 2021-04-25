const key='xmxgwJr6q6O1EpB7UtwJNAQhC9NJGRCc'

//get wheather infromation

const getWheather=async(id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/'
    const query=`${id}?apikey=${key}`;

    const response= await fetch(base+query);
    const data= await response.json();

    return data[0];
};




// getting city information
const getCity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search'
    const query=`?apikey=${key}&q=${city}`

    const response= await fetch(base+query);
    const data = await response.json();
    return data[0];
};

getCity('mumbai')
        .then(data=> {
            return getWheather(data.Key)
        }
        ).then(data=>{
            console.log(data)
        })
        .catch(err=> console.log(err));