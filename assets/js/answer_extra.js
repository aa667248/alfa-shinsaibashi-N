function Textform(value){
    var aa = ['B','とうだいもとくらし','ペンギン','E','えくすとらかんぜんせいは']
    if(value == 0){
        var ans = document.getElementById('textbox1').value;
        if(ans==aa[0]){
            document.getElementById('stage1').style.display='none'
            document.getElementById('stage2').style.display='inline'
            console.log('stage1:clear')
        }else{
            gameover()
        }
    }
    if(value == 1){
        var ans = document.getElementById('textbox2').value;
        if(ans==aa[1]){
            document.getElementById('stage2').style.display='none'
            document.getElementById('stage3').style.display='inline'
            console.log('stage2:clear')
        }else{
            gameover()
        }
    }
    if(value == 2){
        var ans = document.getElementById('textbox3').value;
        if(ans==aa[2]){
            document.getElementById('stage3').style.display='none'
            document.getElementById('stage4').style.display='inline'
            console.log('stage3:clear')
        }else{
            gameover()
        }
    }
    if(value == 3){
        var ans = document.getElementById('textbox4').value;
        if(ans==aa[3]){
            document.getElementById('stage4').style.display='none'
            document.getElementById('stage5').style.display='inline'
            console.log('stage4:clear')
        }else{
            gameover()
        }
    }
    if(value == 4){
        var ans = document.getElementById('textbox5').value;
        if(ans==aa[4]){
            i = 2;
            document.getElementById('stage5').style.display='none'
            console.log('stage5:clear')
            document.getElementById('all').insertAdjacentHTML('afterbegin','<p>クリアおめでとう<br>こんな悪ノリで作った謎解きに付き合ってもらってありがとう<br>またこういうの作る機会があればまた遊んでほしい</p>')
        }else{
            gameover()
        }
    }
}
var i = 0;
function gameover(){
    document.getElementById('stage').style.display='none';
    console.log('gameover')
    i = 1;
    document.getElementById('all').insertAdjacentHTML('afterbegin','<p>また挑戦してね☆ミ</p>')
}

function timer(){
    document.getElementById('stage1').style.display='inline'
    document.getElementById('extra_int').style.display='none';
    var sec = 1200;
    
    var dt = new Date();
    var startDt = dt;
    console.log("Start: ", dt);
    var endDt = new Date(dt.getTime() + sec * 1000);
    console.log("End : ", endDt);

    var id = setInterval(function(){
            dt = new Date();
            timelag = endDt - dt;
            var r_min = Math.floor(timelag/60000),r_sec = Math.floor((timelag-r_min*60000)/1000),r_m_sec = timelag%1000
            document.getElementById("time").innerHTML =('00'+r_min).slice(-2)+':'+('00'+r_sec).slice(-2)+':'+('000'+r_m_sec).slice(-3)
            if(timelag<=0){
                clearInterval(id);
                document.getElementById('stage').style.display='none';
                console.log("Time up");
                document.getElementById("time").innerHTML = "time up";
                document.getElementById('all').insertAdjacentHTML('afterbegin','<p>また挑戦してね☆ミ</p>')
            }
            if(i==1){
                clearInterval(id);
                document.getElementById('time').innerHTML='gameover';
            }
            if(i==2){
                clearInterval(id);
            }
        }, 10);
}
