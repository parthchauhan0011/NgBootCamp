const inp = document.querySelector('#newToDo');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#liList')

btn.addEventListener('click', function(e){
    e.preventDefault();
    const toDo = inp.value;
    const li = document.createElement('li');
     li.innerText = `- ${toDo}                  X`;

     li.onclick = function(e){
        e.target.remove();
     }

     liList.append(li);

     inp.value = "";
})
