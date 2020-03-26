var aside = document.getElementById('aside');
var btn = document.getElementById('nav-toggle');
btn.addEventListener('click',function(){
    this.classList.toggle('fa-times');
    aside.classList.toggle('aside-none');
}, false);
//リクエストのパラメーターセット
const KEY = 'AIzaSyBhkSrte1Ho10X5Kf1jhYu4rdzC3fY7e78';
let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video'; //動画を検索する
url += '&part=snippet';//検索結果にすべてのプロパティを含む
url += '&q=養鶏場';//検索ワード
url += '&videoEmbeddable=true'; //ＷＥＢページに埋め込み可能な動画のみを検索
url += '&videoSyndicated=true';//Ｙｏｕｔｕｂｅ以外で再生できる動画のみに限定
url += '&maxResults=6';//最大動画取得件数
url += '&key=' + KEY; //API KEY
url += '&callback=hoge';

//console.log(url);
//スクリプト文作成
var span = document.createElement('script');
span.src=url;
document.body.appendChild(span);


//関数処理　ビデオ表示
function hoge(json){
    //console.log(json);
    //console.log(json.items);
    //console.log(json.items[0].id.videoId);
    var videoList = document.getElementById('video-list');
    var list ="";
    for(i = 0 ; i < 3 ; i++){
    list +='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+json.items[i].id.videoId+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    };
    videoList.innerHTML = list;
    /*var video = createElement('iframe');
    for(i = 0 ; i < 6 ; i++){
        console.log(json.items[i].id.videoId);
        video.setAttribute("width","560");
        video.setAttribute("height","315");
        video.setAttribute("frameborder","0");
        video.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        video.setAttribute("allowfullscreen","")

        video.src = 'https://www.youtube.com/embed/'+ json.items[i].id.videoId;
        document.videoList.appendChild(video);
    };*/
    //document.videoList.appendChild(p,null);

}


//HTMLが読み込まれてから実行する処理
/*
$(function(){
    //youtubeの動画を検索して取得
    $.ajax({
        url : url,
        dataType : 'jsonp'
    })
});
*/