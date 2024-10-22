
import ProductPhone from "./product.js";
import Api from "../javascript/Api.js";
const api = new Api();
let listdata = [];

const deleteProduct = (id) => {
    console.log("id", id)
    axios({
        url: `https://670fd53ea85f4164ef2c1d34.mockapi.io/capstone2/${id}`,
        method: "DELETE",
      })
    .then((res) => {
        console.log("res", res)
        showProduct()
      })
      .catch((err) => {
        console.log("error", err)
      });
}

window.deleteProduct = deleteProduct;

let renderProduct = (listProduct) => {
  let content = "";
  listProduct.forEach((product, index) => {
    content += `
            <tr>
                <td>${index}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.screen}</td>
                <td>${product.backCamera}</td>
                <td>${product.frontCamera}</td>
                <td><img width="100px" src="${product.img}" alt=""></td>
                <td>${product.desc}</td>
                <td>${product.type}</td>
                <td>
                    <button class="btn_edit" >Edit</button>
                    <button class="delete mt-3" onclick="deleteProduct('${product.id}')">Delete</button>
                </td>
            </tr>
        `;
  });
  document.getElementById("tableDanhSach").innerHTML = content;
};

let showProduct = () => {
    axios({
        url: "https://670fd53ea85f4164ef2c1d34.mockapi.io/capstone2",
        method: "GET",
      })
    .then((res) => {
      listdata = res.data;
      renderProduct(res.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
showProduct();

const getEld = (id) => document.getElementById(id)

const addProduct = () => {
    const name = getEld("tensp").value ? getEld("tensp").value : 'sahdga'
    const price = getEld("price-gia").value
    const desc = getEld("desc-moTa").value
    const img = getEld("img-hinh").value
    const type = getEld("chonSanPham").value

    const product = new ProductPhone("", name, price, "plapla","hehehe","hohoho", img, desc, type)
    axios({
        url: `https://670fd53ea85f4164ef2c1d34.mockapi.io/capstone2`,
        method: "POST",
        data: product,
      })
      .then((result) => {
        console.log("result", result)
        showProduct()

      })
      .catch((error) => {
        console.log("error", error);
      })
}
window.addProduct = addProduct;