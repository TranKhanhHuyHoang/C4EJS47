function editBook(book){
    let name = book.getElementsByClassName('name')[0].value;
    let price = book.getElementsByClassName('price')[0].value;
    let  amount= book.getElementsByClassName('amount')[0].value;
    let  NXB = book.getElementsByClassName('NXB')[0].value;
    let author = book.getElementsByClassName('author')[0].value;
    let isSale = book.getElementsByClassName('isSale')[0].value;
    let page = book.getElementsByClassName('page')[0].value;
    let year = book.getElementsByClassName('year')[0].value;
    let description = book.getElementsByClassName('description')[0].value;
    let Category = book.getElementsByClassName('Category')[0].value;
    let subCategory = book.getElementsByClassName('subCategory')[0].value;
    
   
    if (name == '' || price == '' || amount == '' || NXB == '' || author == '' || isSale == '' || page == '' || year == '' || description == '' || Category == '' || subCategory == '' ){
        alert("Nhap day du thong tin")
    }
    else{
        let index = Number(book.getAttribute('id'));
        listBooks[index].name = name
        listBooks[index].price = price
        listBooks[index].amount = amount
        listBooks[index].NXB = NXB
        listBooks[index].author = author
        listBooks[index].isSale = isSale
        listBooks[index].page = page
        listBooks[index].year = year
        listBooks[index].description = description
        listBooks[index].Category = Category
        listBooks[index].subCategory = subCategory

        localStorage.setItem("listBooksLocal",JSON.stringify(listBooks))

    } 
     
}

function deleteBook(book){
    let index = Number(book.getAttribute('id'));
    listBooks.splice(index,1)
    localStorage.setItem("listBooksLocal",JSON.stringify(listBooks))
    window.location = "show.html"

}

function addBook() {
    let isPassed = true;
    
    let errors = document.getElementsByClassName("error");
    for (let error of errors) {

        error.innerHTML = ''
    }
    let name = document.getElementById("name").value;
    if (name === ''){
        isPassed = false;
        document.getElementById("name-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let price = document.getElementById("price").value;
    if (price === ''){
        isPassed = false;
        document.getElementById("price-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let amount = document.getElementById("amount").value;
    if (amount === ''){
        isPassed = false;
        document.getElementById("amount-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let NXB = document.getElementById("NXB").value;
    if (NXB === ''){
        isPassed = false;
        document.getElementById("NXB-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let author = document.getElementById("author").value;
    if (author === ''){
        isPassed = false;
        document.getElementById("author-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let isSale = document.getElementById("isSale").value;
    if (isSale === ''){
        isPassed = false;
        document.getElementById("isSale-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let page = document.getElementById("page").value;
    if (page === ''){
        isPassed = false;
        document.getElementById("page-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let year = document.getElementById("year").value;
    if (year === ''){
        isPassed = false;
        document.getElementById("year-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let description = document.getElementById("description").value;
    if (description === ''){
        isPassed = false;
        document.getElementById("description-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let Category = document.getElementById("Category").value;
    if (Category === ''){
        isPassed = false;
        document.getElementById("Category-error").innerHTML = "Nhập vào hộ cái!!"
    }
    let subCategory = document.getElementById("subCategory").value;
    if (subCategory === ''){
        isPassed = false;
        document.getElementById("subCategory-error").innerHTML = "Nhập vào hộ cái!!"
    }
    if (isPassed){
        
        let newBook = {
            name: name,
            price: price,
            amount:  amount,
            NXB: NXB,
            author: author,
            isSale: isSale,
            page: page,
            year: year,
            description: description,
            Category: Category,
            subCategory: subCategory
            
        };
        // Lấy dữ liệu từ local
        let listBooks = JSON.parse(localStorage.getItem("listBooksLocal"))

        //Cập nhật dữ liệu: thêm mới
        listBooks.unshift(newBook)
        console.log(listBooks);

        //Lưu dữ liệu trở lại local
        localStorage.setItem("listBooksLocal",JSON.stringify(listBooks))
        window.location = "show.html"

    }
    

}