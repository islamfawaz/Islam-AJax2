import { Service } from './Service.js';


let service = new Service('https://jsonplaceholder.typicode.com/posts');

let data = await service.get();
console.log(data);
DisplayItem(data);  




 function DisplayItem(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
        cartona += `<div class="col-md-3">
                <div class="item">
                    <h2>${data[i].title}</h2>
                    <p>${data[i].body}</p>
                </div>
            </div>`;
    }
    document.getElementById('rowData').innerHTML = cartona;   
}

 