let serial=0;
document.getElementById('tri-btn').addEventListener('click', function(){
    serial=serial+1;
   
    const data = getAllElementsById("tri-name", "tri-input1", "tri-input2");

    if(data.input1==='' || data.input2===''  || data.input1<=0 || data.input2<=0) {
       return alert('Please enter valid number greater than 0')
    }

    const total=(0.5*parseFloat(data.input1) * parseFloat(data.input2)).toFixed(2);
    getAllData(data.name,total);
    
})


document.getElementById('rect-btn').addEventListener('click',function(){
    serial=serial+1;
    
    const data = getAllElementsById("rect-name", "rect-input1", "rect-input2");

    if(data.input1==='' || data.input2===''  || data.input1<=0 || data.input2<=0) {
       return alert('Please enter valid number greater than 0')
    }

    const total=(parseFloat(data.input1) * parseFloat(data.input2)).toFixed(2);

    getAllData(data.name,total);
})

document.getElementById('para-btn').addEventListener('click',function(){
    serial=serial+1;
   
    const data = getAllElementsById("para-name", "para-input1", "para-input2");

    if(data.input1==='' || data.input2===''  || data.input1<=0 || data.input2<=0) {
       return alert('Please enter valid number greater than 0')
    }

    const total=(parseFloat(data.input1) * parseFloat(data.input2)).toFixed(2);

    getAllData(data.name,total);
})



document.getElementById('rhom-btn').addEventListener('click',function(){
    serial=serial+1;
   
    const data = getAllElementsById("rhom-name", "rhom-input1", "rhom-input2");

    if(data.input1==='' || data.input2===''  || data.input1<=0 || data.input2<=0) {
       return alert('Please enter valid number greater than 0')
    }

    const total=(0.5*parseFloat(data.input1) * parseFloat(data.input2)).toFixed(2);
    getAllData(data.name,total);
    
})

document.getElementById('penta-btn').addEventListener('click',function(){
    serial=serial+1;
  
    const data = getAllElementsById("penta-name", "penta-input1", "penta-input2");

    if(data.input1==='' || data.input2===''  || data.input1<=0 || data.input2<=0) {
       return alert('Please enter valid number greater than 0')
    }

    const total=(0.5*parseFloat(data.input1) * parseFloat(data.input2)).toFixed(2);
    getAllData(data.name,total);
})

document.getElementById('elli-btn').addEventListener('click',function(){
    serial=serial+1;
     
    const data = getAllElementsById("elli-name", "elli-input1", "elli-input2");
    if(data.input1==='' || data.input2===''  || data.input1<=0 || data.input2<=0) {
        return alert('Please enter valid number greater than 0')
     }
    const total=(3.1416*parseFloat(data.input1) * parseFloat(data.input2)).toFixed(2);
    
    getAllData(data.name,total);
})





function getAllElementsById(id1, id2, id3) {
   
    const name = document.getElementById(id1).innerText;
    const input1 = document.getElementById(id2).value;
    const input2 = document.getElementById(id3).value;
  
    const data = {
      name: name,
      input1: input1,
      input2: input2,
    };
    return data;
  }



function getAllData(name,total){
    const container=document.getElementById('area-calculation');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}.</td>
    <td>${name}</td>
    <td>${total} cm<sup>2</sup></td>
    <td><button class="btn btn-primary bg-sky-600 px-4 py-2 rounded-lg text-white">Covert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}















