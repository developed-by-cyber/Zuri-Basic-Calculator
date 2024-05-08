function calculate(){

    let displayBox = document.querySelector('.displayBox');
    let buttons = document.querySelectorAll('.btn-num, .btn-opr');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.btn-equal');
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            displayBox.value += value;
        })
    })


    equal.addEventListener('click', function(e){
        if(displayBox.value === ''){
            displayBox.value = "";
        }else{
            let answer = eval(displayBox.value);
            displayBox.value = answer;
        }
    })

}; 
calculate()