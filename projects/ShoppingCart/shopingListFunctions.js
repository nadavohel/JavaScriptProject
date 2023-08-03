function addListProduct(nameOfArray, nameOfArrayItem) {

    const tbody = document.querySelector(".products tbody");
    let counter = "◾";
    for (let i = 0; i < nameOfArray.length; i++) {
        const tr = document.createElement("tr");
        if (nameOfArray[i].price == 212255) {
            tr.innerHTML = `
                        <td></td>
                        <td contenteditable="true" oninput="showSaveBtn(this)" class="name nameH2">${nameOfArray[i].name}</td>
                        <td contenteditable="true" oninput="showSaveBtn(this)" class="price"></td>
                        <td contenteditable="true" oninput="showSaveBtn(this)" class="discount"></td>
                        <td>
                            <button class="save" onclick="addToListProduct(${i},${nameOfArrayItem}, this)" style="visibility: visible;" >💾</button>
                            <button class="remove" onclick="removeFromListProduct(this)">❌</button>
                        </td>
                    `;
        } else {
            tr.innerHTML = `
                        <td>${counter}</td>
                        <td contenteditable="true" oninput="showSaveBtn(this)" class="name">${nameOfArray[i].name}</td>
                        <td contenteditable="true" oninput="showSaveBtn(this)" class="price">${nameOfArray[i].price}</td>
                        <td contenteditable="true" oninput="showSaveBtn(this)" class="discount">${nameOfArray[i].discount}</td>
                        <td>
                            <button class="save" onclick="addToListProduct(${i},${nameOfArrayItem}, this)" style="visibility: visible;" >💾</button>
                            <button class="remove" onclick="removeFromListProduct(this)">❌</button>
                        </td>
                    `;
        }
        tbody.appendChild(tr);
    }
}
function removeFromListProduct(bob) {
    bob.parentElement.parentElement.remove();
}
function addToListProduct(index, arrayName, bob) {
    const obj = {
        name: arrayName[index].name,
        price: +arrayName[index].price,
        discount: +arrayName[index].discount,
    };

    loader(true);

    fetch("https://api.shipap.co.il/products", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(data => {
            loader(false);
            snackbar("הפריט נוסף בהצלחה");
        });
    bob.style.visibility = "hidden";
}
function addHeaderToProduct() {
    const header = document.getElementById('anotherHeader')
    const obj = {
        name: header.value,
        price: 212255,
        discount: "",
    };

    header.value = '';
    loader(true);

    fetch("https://api.shipap.co.il/products", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(data => {
            getProducts();
            snackbar("הפריט נוסף בהצלחה");
        });


}