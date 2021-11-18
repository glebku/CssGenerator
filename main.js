const rangeTl = document.getElementById('tlr'),
      rangeTr = document.getElementById('trr'),
      rangeBl = document.getElementById('blr'),
      rangeBr = document.getElementById('brr');

const resultTl = document.getElementById('result-tlr'),
      resultTr = document.getElementById('result-trr'),
      resultBl = document.getElementById('result-blr'),
      resultBr = document.getElementById('result-brr');

const inputs = document.querySelectorAll('.input');
const cube = document.getElementById('cube');
const btn = document.getElementById('btn');
const totalResult = document.getElementById('totalResult');


function changeRadius() {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;
    
    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px ';
}

for(input of inputs) {
    input.addEventListener('input', changeRadius);
}

btn.addEventListener('click', function(){
    totalResult.innerHTML = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px ';
});


