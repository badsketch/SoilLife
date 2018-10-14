var sixfs = [
    {
        "icon": "sixfs-food.svg",
        "text": "eat food",
        "color": "#ee6a7c",
        "link": "food.html"
    },
    {
        "icon": "sixfs-filter.svg",
        "text": "breathe air",
        "color": "#195ba7",
        "link": "filter.html"
    },
    {
        "icon": "sixfs-filter.svg",
        "text": "drink water",
        "color": "#195ba7",
        "link": "filter.html"
    },
    {
        "icon": "sixfs-fiberfuel.svg",
        "text": "wear clothes",
        "color": "#fac718",
        "link": "fiber.html"
    },
    {
        "icon": "sixfs-foundation.svg",
        "text": "live in a shelter",
        "color": "#544d50",
        "link": "foundation.html"
    },
    {
        "icon": "sixfs-farmaceuticals.svg",
        "text": "use medicine",
        "color": "#fa6a33",
        "link": "farmaceuticals.html"
    },
    {
        "icon": "sixfs-fun.svg",
        "text": "enjoy the outdoors",
        "color": "#36ae99",
        "link": "fun.html"
    },
];

var index = 0;
var icon = document.getElementById('sixf-icon');
var text = document.getElementById('sixf-change-text');
var btn = document.getElementById('sixf-link');
setInterval(change, 3000);

function change() {
    icon.src = "/imgs/sixf/"+sixfs[index].icon;
    text.innerHTML = sixfs[index].text;
    text.style.color = sixfs[index].color;
    btn.style.backgroundColor = sixfs[index].color;
    btn.src = sixfs[index].link;
    index++;
    if (index >= sixfs.length) {
        index = 0;
    }
}