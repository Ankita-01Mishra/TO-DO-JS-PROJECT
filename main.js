document.querySelector('#popup').style.display="none"
document.querySelector('#popup2').style.display="none"
document.querySelector('#headeroneDiv').style.display="none"
// document.querySelector('#oneMainDiv').style.display="none"

document.querySelector('.btn').addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log('clicked');
    document.querySelector('#blur').style.filter="blur(7px)"
    document.querySelector('#popup').style.display="block"
})

function closePopup1(){
    console.log('clicked');
    document.querySelector('#blur').style.filter="blur(0px)"
    document.querySelector('#my-para').style.display="none";
    document.querySelector('#popup').style.display="none"
}

// let main=document.createElement("main")
const taskList=[];
let itemCount=0;


//creating div box
function addBox(){
let cardTitle=document.getElementById("addTxt").value;
const tempObj={
    id:Date.now(),
    taskName:cardTitle
}
console.log(tempObj);
taskList.push(tempObj);
console.log(taskList);
document.querySelector('#popup').style.display="none";
document.querySelector('#my-para').style.display="none";
document.querySelector('#blur').style.filter="blur(0px)";
let notes=document.getElementById("notes");
notes.innerHTML += `<div class="noteCard card" id=${itemCount} style="width: 15rem;height:17rem; background-color:white; color:black; margin-right:10px; margin-bottom:20px; "><center><span style="font-size:25px;color: #7e3e06;font-family: cursive;" class="card-text" onclick="particularDiv(this)">${cardTitle}</span></center><hr><ul class="tasks" id="itemList${itemCount}" style="height:150px;font-size:10px "></ul><i class="fa-solid fa-plus" onclick="popup2(); idList(event)" id="add_btn_${itemCount++}" style="cursor: pointer;float:right;margin-top:5px;margin-right:5px;background-color:blue;border-radius:50%;color:white;font-size:25px "></i>
    <i  onclick="deleteNote(this) " class="fa-solid fa-trash-can dltBtn" style="cursor: pointer;float:right;margin-top:5px;margin-right:10px;border-radius:50%;font-size:25px;color:red; "></i>
</div>`
}

//Deleting the box
let deleteNote=(index)=>{
    index.parentElement.remove();
    taskList.splice(index.parentElement.id,1);
}



//calling 2nd popup
function popup2(){
    document.querySelector('#blur').style.filter="blur(7px)"
    document.querySelector('#popup2').style.display="block"
}
//closing popup for 2nd popup
function closePopup2(){
    console.log('clicked cp2');
    document.querySelector('#blur').style.filter="blur(0px)"
    document.querySelector('#my-para').style.display="none";
    document.querySelector('#popup2').style.display="none"
}



//Accessing ul's id through div's plus-icon onclick function
let createList='';
function idList(plusiconOfDiv){
    createList=plusiconOfDiv.target.previousSibling.id;
    console.log(createList,plusiconOfDiv);
    console.log(createList);
}

let listcount=1;
//Adding list into the created ul
let addItemLikeList=()=>{
    document.querySelector('#blur').style.filter="blur(0px)"
    document.querySelector('#popup2').style.display="none"
    console.log('clicked');
    let addTxt2=document.getElementById("addTxt2").value;
    console.log(addTxt2);
    let li=document.createElement("li");
    document.getElementById(createList).appendChild(li);
    li.id=`item_${listcount++}`
    // console.log(li.id,li,"li.id");
    li.style.listStyleType="none"
    li.innerHTML=`<span style="font-size:15px; padding-left:56px">${addTxt2}</span><button id="markDone" onclick="cutIfWorkDone(this)">Markdone</button>`
}

//Markdone function
let cutIfWorkDone=(index)=>{
    index.previousSibling.style.textDecoration="line-through"
    index.style.display="none"
}



let particularDiv=(specificDiv)=>{
    console.log('pd created');
    console.log(specificDiv.parentElement.parentElement.innerHTML);
    let specificDivValue=specificDiv.innerHTML
    console.log(specificDivValue);
    console.log(specificDiv.parentElement.nextSibling.nextSibling.innerHTML);
    console.log(specificDiv.parentElement.parentElement.id);
    document.querySelector('#blur').style.visibility="hidden"
    document.querySelector('#headeroneDiv').style.display="block"
    document.querySelector('#oneMainDiv').style.display="block"
    // specificDiv.parentElement.parentElement.id.style.visibility="visible"
    document.querySelector('#addParticularHeaderValue').innerHTML=specificDiv.innerHTML;
    document.querySelector('#headeroneDiv').style.color="white"
    document.querySelector('#headeroneDiv').style.display="flex"
    document.querySelector('#headeroneDiv').style.justifyContent="space-around"
    document.querySelector('#headeroneDiv').style.fontSize="31px"

    let oneMainDiv=document.getElementById('oneMainDiv')
    oneMainDiv.innerHTML +=`
    <div id="oneDiv">
    ${specificDiv.parentElement.parentElement.innerHTML}
    </div>
    `
}

function Back(){
    document.querySelector('#blur').style.visibility="visible"
    document.querySelector('#headeroneDiv').style.display="none"
    document.querySelector('#oneMainDiv').style.display="none"
}

document.querySelector('.btnLast').addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log('clicked');
    document.querySelector('#headeroneDiv').style.display="none"
    document.querySelector('#oneMainDiv').style.display="none"
    document.querySelector('#blur').style.visibility="visible"
    document.querySelector('#blur').style.filter="blur(7px)"
    document.querySelector('#popup').style.display="block"
})







// function addBox(){
//     console.log('clicked');
//     document.querySelector('#popup').style.display="none";
//     document.querySelector('#my-para').style.display="none";
//     document.querySelector('#blur').style.filter="blur(0px)"

//     div1=document.getElementById('notes')

//     text= document.querySelector('#addTxt').value;
//     console.log(text);

//     let createDiv=document.createElement('div')
//     createDiv.setAttribute('id','flex1');
//     div1.appendChild(createDiv);

//     let header=document.createElement('span')
//     header.setAttribute('id','heading');
//     createDiv.appendChild(header)

//     let header1=document.createElement('hr')
//     createDiv.appendChild(header1)
//     header.innerText=text;

//     let list=document.createElement('span')
//     list.setAttribute('id','my-list')
//     createDiv.appendChild(list)

//     // let list1=document.createElement('span')
//     // list.appendChild(list1)
//     let list2=document.createElement('span')
//     list.appendChild(list2)
//     // list1.setAttribute('id','list1')
//     // createDiv.appendChild(list1);

//    let createIconDiv = document.createElement('div')
//     // createIconDiv.setAttribute('id', 'deleteAddBtn')
//     createDiv.appendChild(createIconDiv)
//     createbuttonDelete = document.createElement('i')
//     createbuttonDelete.setAttribute('id', 'delete-icon')
//     createbuttonDelete.setAttribute('class', 'fa-solid fa-trash-can')

//     var createbuttonplus = document.createElement('i')
//     createbuttonplus.setAttribute('id', 'box-plus-icon')
//     createbuttonplus.setAttribute('class', 'fa-solid fa-circle-plus')
//     createIconDiv.appendChild(createbuttonplus)
//     createIconDiv.appendChild(createbuttonDelete)


//     createbuttonDelete.addEventListener('click',()=> {
//         createDiv.style.display = "none"
//     })


//     createbuttonplus.addEventListener('click',()=>{
//         console.log('clicked');
//         document.querySelector('#blur').style.filter="blur(7px)"
//         document.querySelector('#popup2').style.display="block"
//     })
// }

// createMarkdone = document.createElement('span')
// let createMylist = document.createElement('span')
// createMarkdone.setAttribute('id','markDone')

//     document.querySelector('#popBtn_1').addEventListener('click',(e)=>{
//         e.preventDefault();
//         console.log('btn clked');
//         document.querySelector('#popup2').style.display="none";
//         document.querySelector('#my-para').style.display="none";
//         document.querySelector('#blur').style.filter="blur(0px)";

//         txtInp2=document.querySelector('.text-input2').value;
//         console.log(txtInp2);
//         // let list1=document.createElement('span')
//         // list.setAttribute('id','spanlist1')
//         // list.appendChild(list1)
//         // list.innerHTML=txtInp2;
//         let createMylist = document.createElement('span')
//         createMylist.setAttribute('id','listItem')
       
        
//         createMarkdone = document.createElement('span')
//         createMarkdone.setAttribute('id','markDone')
//         document.getElementById('my-list').appendChild(createMylist)
//         document.getElementById('my-list').appendChild(createMarkdone)
//         document.getElementById('my-list').style.textAlign='center'
//         document.getElementById('my-list').style.display='block'
        
//         createMylist.textContent = txtInp2;
//         createMarkdone.textContent = "MarkDone"
   

//     document.getElementById('markDone').addEventListener('click',()=>{
//         e.preventDefault()
//         console.log('clicked');
//         document.getElementById('listItem').style.textDecoration="line-through"
//     })
// })
    
// document.getElementById('markDone').addEventListener('click',()=>{
//     e.preventDefault()
//     console.log('clicked');
//     document.getElementById('listItem').style.textDecoration="line-through"
// })
    // let arr=[]
    // function addBox2(value){
    //     console.log('click');
    //     document.querySelector('#popup2').style.display="none";
    //     document.querySelector('#my-para').style.display="none";
    //     document.querySelector('#blur').style.filter="blur(0px)";

    //     txtInp2=document.querySelector('.#addTxt2').value;
    //     console.log(txtInp2);
    //     let newObj={
    //         "addTxt2":txtInp2
    //     }
    //     arr.push(newObj);
    //     console.log(arr);
    // }

    




























    // createItem= document.createElement('div');
    // createItem.setAttribute('class','item-1');
    // var createddiv = document.createElement('div')
    // createddiv.setAttribute('id', 'para-list')

    // document.querySelector('#notes').appendChild=createItem;
    
    // var createddiv = document.createElement('div')
    // createddiv.setAttribute('id', 'para-list')

    // createheading = document.createElement('h1')
    // createheading.setAttribute('id', 'adding-item')

    // createhr = document.createElement('hr')

    // createicondiv = document.createElement('div')
    // createicondiv.setAttribute('class', 'delete-add')

    
    // createbuttondelete = document.createElement('i')
    // createbuttondelete.setAttribute('id', 'delete-icon')
    // createbuttondelete.setAttribute('class', 'fa-solid fa-trash-can')
    // // createbuttondelete.setAttribute('onclick', 'deletebyicon()')


    // var createbuttonplus = document.createElement('i')
    // createbuttonplus.setAttribute('id', 'below-plus-icon')
    // createbuttonplus.setAttribute('class', 'fa-solid fa-circle-plus')

    // text.appendChild(createItem)

    // createitem.appendChild(createddiv)
    // createitem.appendChild(createicondiv)

    // createddiv.appendChild(createheading)
    // createddiv.appendChild(createhr)

    // createicondiv.appendChild(createbuttondelete)
    // createicondiv.appendChild(createbuttonplus)


    // createheading.textContent = inputvalue
// }
