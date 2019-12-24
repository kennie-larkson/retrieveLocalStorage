var saveData = (ev)=>{
    ev.preventDefault();


    var data = {
        name : document.getElementById('name').value,
        gender :document.getElementById('gender').value

    }

    if(data.value != ""){

        var savedData = JSON.stringify(data);
        localStorage.setItem('myData', savedData);
        // console.log(JSON.stringify(data));
        // console.log(localStorage.length);
    }

    

    const getData = ()=>{
        const displayArea = document.getElementById('display');
        let list =  document.createElement('li');
        let retrievedData =JSON.parse(localStorage.getItem('myData')) ;
        console.log(retrievedData);
        console.log(localStorage.getItem('myData'));
        list.innerHTML =  "Retrieved data:" +"<br> Name: "+retrievedData.name+"<br>Gender: "+retrievedData.gender;
        displayArea.append(list);
        
    }

    getData();
}

// const getData = ()=>{
//     const displayArea = document.getElementById('display');
//     let list =  document.createElement('li');
//     let retrievedData =JSON.parse(localStorage.getItem('myData')) ;
//     console.log(retrievedData);
//     console.log(localStorage.getItem('myData'));
//     list.innerHTML =  "Retrieved data:" +"<br> Name: "+retrievedData.name+"<br>Gender: "+retrievedData.gender;
//     displayArea.append(list);
    
// }

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('btn').addEventListener('click',saveData);
});

// document.addEventListener('DOMContentLoaded',getData);