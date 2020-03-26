function textcount(){
    var text = document.forms.contact.text.value;
    var words = text.length;
    console.log(words);
    if(words===0){
        window.alert('入力文字数０：入力してください');
    }else if (words<=10){
        document.getElementById('sub').innerHTML = '<input type="submit" name="submit" value="送信する">'
    }else{
        var los = words - 10 ;
        window.alert('入力文字数'+words+'：'+los+'字オーバー');
    };
};

var aside = document.getElementById('aside');
var btn = document.getElementById('nav-toggle');
btn.addEventListener('click',function(){
    this.classList.toggle('fa-times');
    aside.classList.toggle('aside-none');
}, false);