
async function display(){
    const url="https://imdb-api.com/API/AdvancedSearch/k_vth4hwh2?user_rating=9.0,10&release_date=2021-12-01,2022-01-01&countries=in&languages=te"
    const response=await fetch(url);
    var data=await response.json();
    return Promise.resolve(data);
}
display().then(function(data){
    console.log(data)
    let{ results }=data;
    results.forEach(element => {
        let{ title,imDbRating }=element;
        console.log("movie name is "+title+" and imDbRating is "+imDbRating)
    },function (){
        console.log("not found");
})
});