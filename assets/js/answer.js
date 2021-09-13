function Textform(value){
    var aa = ['1','2','3','4']
    if(value == 0){
        var ans = document.getElementById('textbox1').value;
        if(ans==aa[0]){
            document.getElementById('stage1').style.display='none'
            document.getElementById('stage2').style.display='inline'}
            console.log('stage1:clear')
        }else{
            document.getElementById('textbox1').value = '';
    }
    if(value == 1){
        var ans = document.getElementById('textbox2').value;
        if(ans==aa[1]){
            document.getElementById('stage2').style.display='none'
            document.getElementById('stage3').style.display='inline'
            console.log('stage2:clear')
        }else{
            document.getElementById('textbox2').value = '';
        }
    }
    if(value == 2){
        var ans = document.getElementById('textbox3').value;
        if(ans==aa[2]){
            document.getElementById('stage3').style.display='none'
            document.getElementById('stage4').style.display='inline'
            console.log('stage3:clear')
        }else{
            document.getElementById('textbox3').value = '';
        }
    }
    if(value == 3){
        var ans = document.getElementById('textbox4').value;
        if(ans==aa[3]){
            document.getElementById('all').innerHTML='';
            document.getElementById('all').insertAdjacentHTML('afterbegin','<p>夜になればわかる<p>');
            document.getElementById('body_all').insertAdjacentHTML('afterbegin','<p id="password">password:<br>ここに答え</p>');
            document.getElementById('dark_mode').remove();
            document.getElementById('switch').insertAdjacentHTML('afterbegin','<input type="checkbox" id="dark_mode" onchange="changesytle()">');
            console.log('stage4:clear')
        }else{
            document.getElementById('textbox4').value = '';
        }
    }
}
