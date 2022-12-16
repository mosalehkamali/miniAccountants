const $ = document;
const topPage = $.getElementById('topPage');
const topAddigButton = $.getElementById('topAddigButton');
const nameInput = $.getElementById('nameInput');
const numberInput = $.getElementById('numberInput');
const amountInput = $.getElementById('amountInput');
const dateYearInput = $.getElementById('dateYearInput');
const dateMonthInput = $.getElementById('dateMonthInput');
const dateDayInput = $.getElementById('dateDayInput');
const receiveYearInput = $.getElementById('receiveYearInput');
const receiveMonthInput = $.getElementById('receiveMonthInputt');
const receiveDayInput = $.getElementById('receiveDayInput');
const descriptionInput = $.getElementById('descriptionInput');
const bottomAddingButton = $.getElementById('bottomAddingButton');
const cancelButton = $.getElementById('cancelButton');
const addingForm = $.getElementById('addingForm');
const searchInput = $.getElementById('searchInput');
const searchbar = $.getElementById('searchbar');
const searchButton = $.getElementById('searchButton');


function listMaker() {
    let dataBase = [];
    for (let i = 0; i < localStorage.length; i++) {
        dataBase[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    dataBase.forEach(element => {
        let personItem = $.createElement('li');
        personItem.classList.add("peresonItemStyle");
        let nameText = $.createElement("span");
        let numberText = $.createElement('span');
        let amountText = $.createElement('span');
        let dateText = $.createElement('span');
        let receiveText = $.createElement('span');
        let descriptionText = $.createElement('span');
        let btnsDiv = $.createElement('div');
        let removebtn = $.createElement('button');
        personItem.append(nameText, numberText, amountText, dateText, receiveText, descriptionText,btnsDiv);
        btnsDiv.append(removebtn);
        btnsDiv.style = 'width : 100%';
        nameText.innerHTML = "نام : " + element.name;
        numberText.innerHTML = "شماره تلفن : "+element.phoneNumber;
        amountText.innerHTML = "مبلغ : "+element.amount;
        dateText.innerHTML = "تاریخ : "+element.dateYear + '/' + element.dateMonth + '/' + element.dateDay;
        receiveText.innerHTML = "تاریخ سر رسید : "+element.receiveYear + '/' + element.receiveMonth + '/' + element.receiveDay;
        descriptionText.innerHTML = "توضیحات : "+element.description;
        removebtn.innerHTML = "حذف";
        removebtn.classList.add("removebtnStyle");
        $.body.appendChild(personItem);
        removebtn.addEventListener("click", function(event){
            btnsDiv.parentElement.remove()
            localStorage.removeItem(element.name)
        })

    });
};
listMaker();


function topAddigBtn() {
    topAddigButton.style.visibility = 'hidden';
    topPage.style.height = 'auto';
    addingForm.style.visibility = 'visible';
};
function bottomAddingBtn() {
    if (nameInput.value) {
        let data = {
            name: nameInput.value,
            phoneNumber: numberInput.value,
            amount: amountInput.value,
            dateYear: dateYearInput.value,
            dateMonth: dateMonthInput.value,
            dateDay: dateDayInput.value,
            receiveYear: receiveYearInput.value,
            receiveMonth: receiveMonthInput.value,
            receiveDay: receiveDayInput.value,
            description: descriptionInput.value
        }
        let keyName = nameInput.value;
        localStorage.setItem(keyName, JSON.stringify(data))
    };
};
function cancelBtn() {
    nameInput.value = "";
    numberInput.value = "";
    amountInput.value = "";
    dateYearInput.value = "";
    dateMonthInput.value = "";
    dateDayInput.value = "";
    receiveYearInput.value = "";
    receiveMonthInput.value = "";
    receiveDayInput.value = "";
    descriptionInput.value = "";
    topAddigButton.style.visibility = 'visible';
    addingForm.style.visibility = 'hidden';
    topPage.style.height = '80px';
};
function searching(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        if (event.target.value) {
           if(searchbar.children[1]){
            searchbar.children[1].remove();
           };
           let element =  JSON.parse(localStorage.getItem(event.target.value));
           let personItem = $.createElement('li');
           personItem.classList.add("peresonItemStyle");
           let nameText = $.createElement("span");
           let numberText = $.createElement('span');
           let amountText = $.createElement('span');
           let dateText = $.createElement('span');
           let receiveText = $.createElement('span');
           let descriptionText = $.createElement('span');
           let btnsDiv = $.createElement('div');
           let removebtn = $.createElement('button');
           let closebtn = $.createElement('button');
           personItem.append(nameText, numberText, amountText, dateText, receiveText, descriptionText,btnsDiv);
           btnsDiv.append(closebtn , removebtn)
            btnsDiv.style = 'width : 100%';
           nameText.innerHTML = "نام : " + element.name;
           numberText.innerHTML = "شماره تلفن : "+element.phoneNumber;
           amountText.innerHTML = "مبلغ : "+element.amount;
           dateText.innerHTML = "تاریخ : "+element.dateYear + '/' + element.dateMonth + '/' + element.dateDay;
           receiveText.innerHTML = "تاریخ سر رسید : "+element.receiveYear + '/' + element.receiveMonth + '/' + element.receiveDay;
           descriptionText.innerHTML = "توضیحات : "+element.description;
           removebtn.innerHTML = "حذف";
           closebtn.innerHTML = "بستن"
           closebtn.style = "  background-color: rgb(220, 53, 69)", "color: width";
           removebtn.classList.add("removebtnStyle");
           closebtn.classList.add("removebtnStyle");
           searchbar.appendChild(personItem);
           removebtn.addEventListener("click", function(event){
            btnsDiv.parentElement.remove()
               localStorage.removeItem(element.name)
             });
            closebtn.addEventListener("click", function(event){
                btnsDiv.parentElement.remove()
            });
    };
};}

topAddigButton.addEventListener('click', topAddigBtn);
bottomAddingButton.addEventListener('click', bottomAddingBtn);
cancelButton.addEventListener('click', cancelBtn);
searchInput.addEventListener('keydown',searching);
searchButton.addEventListener('click',()=>{ if (searchInput.value) {
    if(searchbar.children[1]){
     searchbar.children[1].remove();
    };
    let element =  JSON.parse(localStorage.getItem(searchInput.value));
    let personItem = $.createElement('li');
    personItem.classList.add("peresonItemStyle");
    let nameText = $.createElement("span");
    let numberText = $.createElement('span');
    let amountText = $.createElement('span');
    let dateText = $.createElement('span');
    let receiveText = $.createElement('span');
    let descriptionText = $.createElement('span');
    let btnsDiv = $.createElement('div');
    let removebtn = $.createElement('button');
    let closebtn = $.createElement('button');
    personItem.append(nameText, numberText, amountText, dateText, receiveText, descriptionText,btnsDiv);
    btnsDiv.append(closebtn , removebtn)
     btnsDiv.style = 'width : 100%';
    nameText.innerHTML = "نام : " + element.name;
    numberText.innerHTML = "شماره تلفن : "+element.phoneNumber;
    amountText.innerHTML = "مبلغ : "+element.amount;
    dateText.innerHTML = "تاریخ : "+element.dateYear + '/' + element.dateMonth + '/' + element.dateDay;
    receiveText.innerHTML = "تاریخ سر رسید : "+element.receiveYear + '/' + element.receiveMonth + '/' + element.receiveDay;
    descriptionText.innerHTML = "توضیحات : "+element.description;
    removebtn.innerHTML = "حذف";
    closebtn.innerHTML = "بستن"
    closebtn.style = "  background-color: rgb(220, 53, 69)", "color: width";
    removebtn.classList.add("removebtnStyle");
    closebtn.classList.add("removebtnStyle");
    searchbar.appendChild(personItem);
    removebtn.addEventListener("click", function(event){
     btnsDiv.parentElement.remove()
        localStorage.removeItem(element.name)
      });
     closebtn.addEventListener("click", function(event){
         btnsDiv.parentElement.remove()
     });
};});