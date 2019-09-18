class APIService {
    constructor(){
        this._baseURL = "https://newsapi.org/v2/top-headlines?country=";
        this._apiKey = "&apiKey=18f1c87e444741aca30db0a569bba999";
    }

   async getNews(country){
    const data = await fetch(`${this._baseURL}${country}${this._apiKey}`);

    if(!data.ok){
        throw new Error("Could not fatch data from API");
    }
    else{
     return await data.json();
    }
  }
}

let api = new APIService();
  api.getNews("de")
  .then(({status, totalResults, articles}) => {
    console.log("articles =>>> ", articles);
    console.log("status =>>> ", status);
    console.log("totalResult =>>> ", totalResults);
    //updateNews(news.articles);
  })
  .catch(err => console.log(err.message));


  const Person = {
      name: "Bill",
      age: 50
  };

  const {name, age } = Person;

  console.log("Name: ", name, " Age: ", age)