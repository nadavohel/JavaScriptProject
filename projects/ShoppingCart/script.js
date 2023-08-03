const productsContainer = document.querySelector('.products');
const logOutButton = document.getElementById('logOut');

// פונקציה הבודקת בהפעל האתר האם היוזר מחובר 
function loginStatus() {
    loader(true);

    fetch("https://api.shipap.co.il/login", { // קריאה לשרת
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
    })
        .then(res => res.json()) // ואז תחזיר לי בפורמט ג'ייסון
        .then(data => { // ואז אם הצליח שלך את היוזר לפונקציה ואם לא שלח בלי יוזר
            if (data.status == 'success') {
                logOutButton.style.display = 'block';
                handelUserData(data.user);
            } else {
                handelUserData();
            }
        });
}
function register() {
    const obj = {
        fullName: document.getElementById('fullNameRegisterId').value,
        email: document.getElementById('emailRegisterId').value,
        userName: document.getElementById('userNameRegisterId').value,
        password: document.getElementById('passwordRegisterId').value,
    };

    loader(true);

    // שליחה לשרת
    fetch("https://api.shipap.co.il/signup", {
        method: 'POST',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
        headers: {
            'Content-Type': 'application/json', // הגדרת סוג התוכן הנשלח לשרת
        },
        body: JSON.stringify(obj), // תוכן הקריאה לשרת
    })
        // קבלה מהשרת וטיפול בנתונים
        .then(res => res.json())
        // התוכן שהתקבל מהפונקציה הקודמת
        .then(data => {
            if (data.status == 'success') {
                productsContainer.style.display = 'block';
                logOutButton.style.display = 'block';
                handelUserData(data.user);
            } else {
                handelUserData();
                alert(data.message);
            }
        });
}
// פונקציה של התחברות יוזר לשרת
function login() {
    const obj = {
        userName: document.querySelector('#userNameLogin').value,
        password: document.querySelector('#passwordLogin').value,
    };

    loader(true);

    // שליחה לשרת
    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
        headers: {
            'Content-Type': 'application/json', // הגדרת סוג התוכן הנשלח לשרת
        },
        body: JSON.stringify(obj), // תוכן הקריאה לשרת
    })
        // קבלה מהשרת וטיפול בנתונים
        .then(res => res.json())
        // התוכן שהתקבל מהפונקציה הקודמת
        .then(data => {
            if (data.status == 'success') {
                productsContainer.style.display = 'block';
                logOutButton.style.display = 'block';
                handelUserData(data.user);
            } else {
                handelUserData();
                alert(data.message);
            }
        });
}
function logOut() {
    loader(true);
    // שליחה לשרת
    fetch("https://api.shipap.co.il/logout", {
        method: 'GET',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
    })
        // חזרה למסך הצתחברות
        .then(data => {
            if (data.status === 200) {
                logOutButton.style.display = 'none';
                productsContainer.style.display = 'none';
                handelUserData();
            }
        });
}

function handelUserData(user = null) { // פונקציה שמחליטה האם להציג מסך כניסה או מסך שכבר יש משתמש
    const divLogin = document.querySelector(".loginScreen");
    const divUser = document.querySelector(".userIn");

    if (user) {
        divLogin.style.display = 'none';
        divUser.style.display = 'block';
        divUser.innerHTML = `${user.fullName} מחובר!`;
        snackbar(`${user.fullName} מחובר!`);
        getProducts();
    } else {
        divLogin.style.display = 'block';
        divUser.style.display = 'none';
        snackbar(`יש להתחבר תחילה`);
        loader(false);
    }
}

function getProducts() {
    loader(true);

    fetch("https://api.shipap.co.il/products", {
        credentials: 'include',
    })
        .then(res => res.json())
        .then(data => {
            document.querySelector(".products").style.display = "block";
            const tbody = document.querySelector(".products tbody");
            tbody.innerHTML = '';

            data.forEach((p, i) => {
                const tr = document.createElement("tr");
                if (p.price == 212255) {
                    tr.innerHTML = `
                    <td></td>
                    <td contenteditable="true" oninput="showSaveBtn(this)" class="name nameH2">${p.name}</td>
                    <td contenteditable="true" oninput="showSaveBtn(this)" class="price"></td>
                    <td contenteditable="true" oninput="showSaveBtn(this)" class="discount"></td>
                    <td>
                        <button class="save" onclick="saveProduct(${p.id}, this)">💾</button>
                        <button class="remove" onclick="removeProduct(${p.id}, this)">❌</button>
                    </td>
                `;
                } else {
                    tr.innerHTML = `
                <td>${i + 1}</td>
                <td contenteditable="true" oninput="showSaveBtn(this)" class="name">${p.name}</td>
                <td contenteditable="true" oninput="showSaveBtn(this)" class="price">${p.price}</td>
                <td contenteditable="true" oninput="showSaveBtn(this)" class="discount">${p.discount}</td>
                <td>
                    <button class="save" onclick="saveProduct(${p.id}, this)">💾</button>
                    <button class="remove" onclick="removeProduct(${p.id}, this)">❌</button>
                </td>
            `;
                }


                tbody.appendChild(tr);
            });

            document.querySelector("tfoot td").innerHTML = data.length + 1;
            loader(false);
        });
}

function showSaveBtn(tdElem) {
    tdElem.closest('tr').querySelector('.save').style.visibility = 'visible';
}

function saveProduct(id, btnElem) {
    const tr = btnElem.closest('tr');

    const obj = {
        name: tr.querySelector('.name').innerText,
        price: +tr.querySelector('.price').innerText,
        discount: +tr.querySelector('.discount').innerText,
    };

    loader(true);

    fetch(`https://api.shipap.co.il/products/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(() => {
            btnElem.closest('tr').querySelector('.save').style.visibility = 'hidden';
            loader(false);
            snackbar("הפריט נשמר בהצלחה");
        });
}

function addProduct() {
    const name = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');

    const obj = {
        name: name.value,
        price: +price.value,
        discount: +discount.value,
    };

    name.value = '';
    price.value = '';
    discount.value = '';

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

function removeProduct(id, btnElem) {
    loader(true);

    fetch(`https://api.shipap.co.il/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
        .then(() => {
            btnElem.closest('tr').remove();
            loader(false);
            snackbar("הפריט נמחק בהצלחה");
        })
}

function loader(isShow) {
    const elem = document.querySelector('.loaderFrame');

    if (isShow) {
        elem.style.display = 'flex';
    } else {
        elem.style.display = 'none';
    }
}

function snackbar(text) { // שורת הערות
    const elem = document.querySelector("#snackbar");
    elem.innerHTML = text;
    elem.classList.add("show");

    setTimeout(() => elem.classList.remove("show"), 3 * 1000);
}