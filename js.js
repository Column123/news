import news from "./json_data.json" assert {type: 'json'};

const len = news.articles.length;

function date_converter(old_date)
{
    var new_date =  new Date(old_date);
    var year = new_date.getFullYear();
    var month = new_date.toLocaleString('default' ,{month: "long"});
    var date = new_date.getDate();
    new_date = month + " " + date + " " + year;
    return new_date;
}

for(var i=0; i<len; i++)
{
    var l = document.createElement('a');
    l.href = news.articles[i].url;
    l.target = "_blank";
    var newss = document.createElement('div');
    newss.id = `news${i}`
    newss.className = "news"
    document.body.appendChild(l);
    l.appendChild(newss);

    var image = document.createElement('img');
    image.src = news.articles[i].urlToImage;
    newss.appendChild(image);


    var title = document.createElement("h2");
    var link = document.createElement('a');
    link.href = news.articles[i].url;
    link.target="_blank"
    link.className = "title_link"
    title.id = `title${i}`;
    title.className = "title";
    link.textContent = news.articles[i].title;
    newss.appendChild(title);
    title.appendChild(link);

    if(news.articles[i].date)
    {
        var date = document.createElement("span");
    date.id = `date${i}`;
    date.className = "date";
    date.textContent = date_converter(news.articles[i].date);
    newss.appendChild(date);
    
    }
    var desc = document.createElement("span");
    desc.id = `description${i}`;
    desc.className = "description";
    desc.textContent = news.articles[i].description;
    newss.appendChild(desc);


}