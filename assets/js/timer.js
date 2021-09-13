var sec = 3600;
 
var dt = new Date();
var startDt = dt;
console.log("Start: ", dt);
var endDt = new Date(dt.getTime() + sec * 1000);
console.log("End : ", endDt);

var i = 0;
var timer_stop = false;
function Textform(){
  var ans = document.getElementById('textbox').value;
  var aa = 'ここに答え';
  var ss = 'U2FsdGVkX1/0IpPcqsWAyEt5j8hGJV1y1rbSaWSdX02KMJBWhwYH80uFzT+NQU92tXibnvS290poZX0dxSjk4t9p+Gh4mToEe2+VS2hnhZ9KTiTlccDZu1wspys4z6IBHPebP+PQ7KJtEItPvec79S+QFEa9ooZWNRETrEvin1cDDwEQwZI/yceDAc5Fp1af'/**aes:I wrote that you must not look at the source code*/
  if(ans == aa){
      document.getElementById('time').innerHTML = 'clear';
      stageclear()
      timer_stop = true
      console.log('脱出成功')
  }else{
      document.getElementById('textbox').value = '';
      i++;
      console.log(i)
      console.log('脱出失敗')
  }
  /**27~58ボツ */
  if(ans == ss){
    document.getElementById('all').innerHTML ='';
    document.getElementById('html_all').style.backgroundColor = 'blue';
    document.getElementById('html_all').style.color = 'white';
    document.getElementById('html_all').style.fontSize = '25px'
    document.getElementById('all').insertAdjacentHTML('afterbegin','<ul id="clash"></ul>')
    var ul = document.getElementById('clash');
    var min = 500 ;
    var max = 10000000 ;
    for(k = 0;k<=21;k++){
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      var b = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      a = a.toString(2)
      b = b.toString(2)
      var li = document.createElement('li');
      var text = document.createTextNode(a+''+b);
      li.appendChild(text);
	    ul.appendChild(li);
    }
    setInterval(function(){
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      var b = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      a = a.toString(2)
      b = b.toString(2)
      var li = document.createElement('li');
      var text = document.createTextNode(a+''+b);
      li.appendChild(text);
	    ul.appendChild(li);
      document.getElementById('clash').removeChild(document.getElementById('clash').children[0])
    },10)
  }
}

var id = setInterval(function(){
  dt = new Date();
  timelag = endDt - dt - i*5*60*1000
  var r_min = Math.floor(timelag/60000),r_sec = Math.floor((timelag-r_min*60000)/1000),r_m_sec = timelag%1000
  document.getElementById("time").innerHTML =('00'+r_min).slice(-2)+':'+('00'+r_sec).slice(-2)+':'+('000'+r_m_sec).slice(-3)
  if(timelag<=0){
    clearInterval(id);
    console.log("Time up");
    document.getElementById("time").innerHTML = "time up";
    document.getElementById('textbox').disabled = true;
    document.getElementById('button').disabled = true;
    stagefailure()
  }else if(timer_stop == true) {
    clearInterval(id);
  }
}, 10);

function stageclear(){
  var cleartime = dt - startDt
  var clear_min = Math.floor(cleartime/60000),clear_sec = Math.floor((cleartime-clear_min*60000)/1000),clear_m_sec = timelag%1000
  cleartime = ('00'+clear_min).slice(-2)+':'+('00'+clear_sec).slice(-2)+':'+('000'+clear_m_sec).slice(-3)
  tweet_url ='https://aa667248.github.io/alfa-shinsaibashi-N/';
  tweet_text = '脱出成功!!%0D%0A記録は'+cleartime+'!!%0D%0Aあなたも挑戦してみよう!!%0D%0A';
  tweet_hashtags = 'リアル脱出ゲーム,パンドラの箱に感染しました,SCRAP,N・S高等学校';
  document.getElementById('marker').insertAdjacentHTML('afterbegin','<div id="clear"><h1>脱出成功</h1><p>あなたの記録は'+cleartime+'</p><a href="index.html" id="replay">もう一度遊ぶ</a><br><a href="https://twitter.com/share?url='+tweet_url+'&text='+tweet_text+'&hashtags='+tweet_hashtags+'&count=none&lang=ja" target="_blank" class="tweet_button"><i class="fab fa-twitter"></i>Twitter</a></div>')
}

function stagefailure(){
  tweet_url ='https://aa667248.github.io/alfa-shinsaibashi-N/';
  tweet_text = '脱出失敗%0D%0Aあなたも挑戦してみてみよう!!%0D%0A';
  tweet_hashtags = 'リアル脱出ゲーム,パンドラの箱に感染しました,SCRAP,N・S高等学校';
  document.getElementById('marker').insertAdjacentHTML('afterbegin','<div id="failure"><h1>脱出失敗</h1><p>制限時間内にクリアできなかった</p><a href="index.html" id="replay">もう一度遊ぶ</a><br><a href="https://twitter.com/share?url='+tweet_url+'&text='+tweet_text+'&hashtags='+tweet_hashtags+'&count=none&lang=ja" target="_blank" class="tweet_button"><i class="fab fa-twitter"></i>Twitter</a></div>')
}
