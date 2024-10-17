import Api from "./Api.js";
// import phoneS from "./Phone";
const api = new Api();
let dataSore = [];


let renderProduct = (producList) =>{
    let content ="";
    producList.forEach((capstone2,index) => {
        content +=`
        <tr>
            <td>${index}</td>
            <td>${capstone2.name}</td>
            <td>${capstone2.price}</td>
            <td>${capstone2.screen}</td>
            <td>${capstone2.backCamera}</td>
            <td>${capstone2.frontCamera}</td>
            <td><img width="150px" src="${capstone2.img}"></td>
            <td>${capstone2.desc}</td>
            <td>${capstone2.type}</td>
            <td>
            <button class="btn_edit"> Edit</button>
            <button class="delete mt-3">Delete</button>
            </td>
        </tr>
        `;
        
    });
    document.getElementById("tblDanhSachSP").innerHTML = content;
};
let showDataProduct = () =>{
    api
    .getListPhone()
    .then((res) =>{
        console.log("res",res.data);
        dataSore = res.data;
        renderProduct(res.data);
    })
    .catch((err) =>{
        console.log("error",err);
    });
};
showDataProduct();
