
const colorSets = [
                ['#0000ff', '#87ceeb'],
                ['#ffff00', '#ffffe0'],
                ['#dc143c', '#ffc0cb'],
                ['#800080','#dda0dd'],
                ['#ff1493', '#ffc0cb'],
                ['#57ec52','#62f5ac']];
                
const randomNumberArray = [5];

function changeBackground(){

    let randomIndex = Math.floor(Math.random() * colorSets.length);
    let LastIndex= randomNumberArray.slice(-1)[0];

    if (randomNumberArray.length === colorSets.length) {
        randomNumberArray.splice(0, randomNumberArray.length - 1);
      }

    while (randomIndex === LastIndex){
        randomIndex = Math.floor(Math.random() * (colorSets.length));
    }
  
        randomNumberArray.push(randomIndex);
        console.log(randomNumberArray);
    
        document.body.style.background = "linear-gradient(135deg, "+ colorSets[randomIndex][0] + "," + colorSets[randomIndex][1] + ")";  
}
    
function changeButtons(){

    const buttons = document.getElementsByClassName("color-button");
    let LastIndex= randomNumberArray.slice(-1)[0];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = colorSets[LastIndex][0];
    }
}        

//inputの中身がゼロの時（やることを何も入力していないとき）、アラートをだす
document.querySelector('#push').onclick = function(){
    changeBackground();

//querySelectorは、指定されたセレクター（群）にある文書内の最初の要素を返す。ここでいうと、やることをかくところにある要素をさす。そしてそれがクリックされたときの関数をつくる    
    if(document.querySelector('#newtask input').
    value.length == 0){
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML+= `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete color-button">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        //current_tasksは、すべてのTodoListのdelete class button をもつ。そのdeleteの
        //ボタンがなくなるまで、iでcurrent_tasksの数（リストの数）を数えて、ループで[]arrayに入れていく。そして、指定されたiのリストのボタンに関数を与える。[]でarrayを指定している。そして、指定されたarrayの親ノードもすべて消される

        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value="";
    }

    changeButtons();
}

