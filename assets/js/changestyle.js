function changesytle() {
    let element = document.getElementById('dark_mode');
    document.getElementById('mystyle').remove()
    if(element.checked == true){
        document.getElementById('head_all').insertAdjacentHTML('afterbegin','<link rel="stylesheet" href="assets/css/style_question3_changes.css" id="mystyle">')
        console.log('on')
    }else{
        document.getElementById('head_all').insertAdjacentHTML('afterbegin','<link rel="stylesheet" href="assets/css/style_question.css" id="mystyle">')
        console.log('off')
    }
 }