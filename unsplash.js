//Cities
const cities =[
    {
        name: 'AMSTERDAM',
        src: "img/city--1-min-min.jpg",
        },
    {
        name: 'ROME',
        src: "img/city--2-min-min.jpg"
        },
    {
        name: 'NEWYORK',
        src: "img/city--3-min-min.jpg"
        },
    {
        name: 'SINGAPORE',
        src: "img/city--4-min-min.jpg"
        },
    {
        name: 'PARIS',
        src: "img/city--5-min-min.jpg"
        }];
   
    //Getting Images
    const images = Array.from(document.querySelectorAll('.photograph'));
        
     const getImages = async function (){
        for (const city of cities) {
            const searchElement = await axios.get(`https://api.unsplash.com/search/photos?query=${city.name}&page=1&per_page=19&client_id=j1iIHjqR4rx028h9u6x-ptU8KwJnHn4YpNa7j2WjBrA`);
            city.images = searchElement.data.results;
                  //Setting element images with the default images
            for (let i = 0; i < images.length; i++) {
               
                images[i].src = cities[0].images[i].urls.raw;
                images[i].setAttribute('data-user-picture', cities[0].images[i].user.profile_image.medium) ;
                images[i].setAttribute('data-user-name', `${cities[0].images[i].user.first_name} ${cities[0].images[i].user.last_name}`) ;
               }
     
        }
        return 1;
       };
getImages();


 
      
     



       //Apply Images
       let indexCity = 0;
       const putImages = function (){
           for (let i = 0; i < images.length; i++) {
             images[i].src = cities[indexCity].images[i].urls.raw;
             images[i].setAttribute('data-user-picture', cities[indexCity].images[i].user.profile_image.medium) ;
             images[i].setAttribute('data-user-name', `${cities[indexCity].images[i].user.first_name} ${cities[indexCity].images[i].user.last_name}`) ;
           }
       };

