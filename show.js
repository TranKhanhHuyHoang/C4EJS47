//b1: Lấy dữ liệu từ local
let listBooks = JSON.parse(localStorage.getItem("listBooksLocal"));
//b2: Ghi dữ liệu vào bảng
let table = document.getElementById("data-table"); 
let index = 0;
for (let book of listBooks) {
    table.innerHTML += `
    <tr class="book" id="${index}">
        <td><input type="text" class="name" value="${book.name}"></td>
        <td><input type="text" class="price" value="${book.price}"></td>
        <td><input type="text" class="amount" value="${book.amount}"></td>
        <td><input type="text" class="NXB" value="${book.NXB}"></td>
        <td><input type="text" class="author" value="${book.author}"></td>
        <td><input type="text" class="isSale" value="${book.isSale}"></td>
        <td><input type="text" class="page" value="${book.page}"></td>
        <td><input type="text" class="year" value="${book.year}"></td>
        <td><textarea class="description">${book.description}</textarea></td>
        <td><input type="text" class="Category" value="${book.Category}"></td>
        <td><input type="text" class="subCategory" value="${book.subCategory}"></td>
        <td>
            <button type="button" onclick="editBook(this.parentNode.parentNode)" class="btn btn-primary">Sửa</button>
            <button type="button" onclick="deleteBook(this.parentNode.parentNode)" class="btn btn-danger">Xoá</button>
        </td>
    </tr>
    `
    index++
}