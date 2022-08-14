const colorBlock = document.querySelectorAll('.column__block');

for (let index = 0; index < colorBlock.length; index++) {
    const block = colorBlock[index];
    block.addEventListener('click', function(){
        block.classList.toggle('active')
    })
}