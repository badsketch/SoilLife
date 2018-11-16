d3.csv('../mediahub.csv', function(error, data) {

    var CATEGORY = document.title;
    if (error) throw error;

    var a = [];

    data.forEach(function (row, i){

        a.push(row.Category);
    });

    var unique = a.filter(function(item, i, ar){ return ar.indexOf(item) === i; });


        var section = document.getElementById("flix-container");

        var title = document.createElement('h1');
        title.className = "title";
        title.innerHTML = "Media Hub";

        var row = document.createElement('div')
        row.className = `row bdr-${CATEGORY}`;

        var row_inner = document.createElement('div')
        row_inner.className = "row__inner";

        row.appendChild(row_inner);
        section.appendChild(title);

        data.forEach(function (row, i){

            if(row.Tags.includes(CATEGORY)) {
                    var url = row.URL;
                    var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                    
                    var tile = document.createElement('div')
                    tile.className = "tile";
                    
                    var link = document.createElement('a');
                    d3.select(link)
                        .attr('data-fancybox', 'videos')
                        .attr('data-small-btn', 'true')
                        .attr('href', row.URL);
                    tile.appendChild(link);

                    var tile_media = document.createElement('div')
                    tile_media.className = "tile__media";
                    
                    link.appendChild(tile_media);
                    
                    var image = document.createElement('img')
                    image.className = "tile__img"
                    if(videoid != null) {
                       var vimeoURL = row.URL;
                       var vimeoID = vimeoURL.substr(17);
                       image.src = "https://img.youtube.com/vi/" + videoid[1]+ "/0.jpg";
                    } else { 
                        image.src = './imgs/sixf/filler.jpg';
                    } 

                    link.appendChild(image);

                    var tile_details = document.createElement('div')
                    tile_details.className ="tile__details";

                    var play_button = document.createElement('img');
                    play_button.src = "./imgs/shared/play-button.svg";
                    play_button.className = "play-button";
                    tile_details.appendChild(play_button);
                    
                    var tile_title = document.createElement('div')
                    tile_title.className = "tile__title";
                    tile_title.innerHTML = row.Title;
                    tile_details.appendChild(tile_title);
                    
                    link.appendChild(tile_details);
                    
                    row_inner.appendChild(tile);
                
            }// row category is j 

        }); //data for each 
        section.appendChild(row);

}); //d3 