import news from "./json_data.json" assert {type: 'json'};

const len = news.articles.length;

function add_image(){
    for (let i = 0; i < len; i++) {
        var image = document.createElement('img');
        image.src = news.articles[i].urlToImage;
        if (image.src==null) {
            continue;
        }
        document.getElementById(`title${i}`).appendChild(image);
        
    }
}

function add_title(){
    for(let i=0; i<len; i++)
    {
        var link = document.createElement('a');
        link.href = news.articles[i].url;
        link.textContent = news.articles[i].title;
        link.target="_blank"
        document.getElementById(`title${i}`).appendChild(link);
    }

}


function add_date(){
    for(var i = 0; i<len; i++)
    {
        var dat = news.articles[i].publishedAt;
        dat = new Date(dat);
        var year = dat.getFullYear();
        var month = dat.toLocaleString('default', {month: 'long'});
        var date = dat.getDate();
        dat = month + " " + date + " " + year;
        var date = document.createElement("span");
        date.className="date";
        date.textContent = dat + "\n";
        document.getElementById(`description${i}`).append(date);
    }

}


function add_description()
{
    for(let i=0; i<len; i++)
    {
        if (news.articles[i].description==null) {
            continue;
        }
        document.getElementById(`description${i}`).append(news.articles[i].description);
    }

}




add_image();
add_title();
add_date();
add_description();