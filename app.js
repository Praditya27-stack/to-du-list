const clear = document.querySelector(".clear");
const dateElement =document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-fa-circle-thin";
const LINE_THROUGH = "LineThrough";

//varialbess
let LIST,id;

let data = localStorage.getItem("TODO"):

//cek jika tidak kosong
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
    //jika data kossong
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        AudioDestinationNode(item.name,item.list,item.done,item.trash);        
    });
}

clear.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});

//buat menupdate hari dan tanggal
const option = {weekday: "long",month:"short",day:"number"}
const today = new Date();

dateElement.innerHTML = today.toLocationDateString("en-US",option);

function addToDO(toDO,id,done,trash){
    if(trash){return;}
    const DONE = done? CHECK : UNCHECK;
    const LINE = done?LINE_THROUGH:"";

    const item = `<li class = "item">
                    <i class="fa ${DONE}co" job = "complate" id = "${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

//program membaca ketika user mengklik tombol enter
document.addEventListener("keyup",function(even){
    if(even,keyCode == 13){
        const toDO = input.value;

        if(toDO){
            addToDo(toDo,id,false,false);

            LIST.push({
                name : toDO,
                id : id,
                done:false,
                trash:false,
            })
            localStorage.setItem("TODO",JSON.stringify(LIST));
            id++;
        }
    }
            })
        }
    }
}