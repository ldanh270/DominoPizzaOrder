const fullName = document.getElementById("fullName")
const mail = document.getElementById("mail")
const phone = document.getElementById("phone")
const address = document.getElementById("address")
const note = document.getElementById("note")
const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
    console.log("submit ok")
    event.preventDefault()
    let productValue = getCheckedProducts()
    if (fullName.value && mail.value && phone.value && address.value && productValue) {
        const data = {
            name: fullName.value,
            mail: mail.value,
            phone: phone.value,
            address: address.value,
            product: productValue,
            note: note.value,
        }
        postData(data)
    } else {
        actionRequire()
    }
})
function getCheckedProducts() {
    const checkbox = document.getElementsByName("product")
    var selectedProducts = ""
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            selectedProducts += " " + checkbox[i].value + " "
        }
    }
    return selectedProducts
}

function actionRequire() {
    const noticeRequire = document.querySelector(".require")
    noticeRequire.classList.remove("none")
}

async function postData(data) {
    //Get data form input form
    const formData = new FormData()
    formData.append("entry.370398972", data.name)
    formData.append("entry.999350632", data.mail)
    formData.append("entry.1422963717", data.phone)
    formData.append("entry.1994028706", data.address)
    formData.append("entry.214818534", data.product)
    formData.append("entry.1547702337", data.note)

    //Send data to server
    const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
        mode: "no-cors",
    }

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSc589AvQ9pFa-rzgtMkwfmxPCCLRCTh6ukTWPplJK_SBMtZzQ/formResponse", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            actionSuccess()
            console.log(result)
        })
}
function actionSuccess() {
    console.log("success ok")
    resetForm()
    const noticeSuccess = document.querySelector(".success")
    noticeSuccess.classList.remove("none")

    const noticeRequire = document.querySelector(".require")
    noticeRequire.classList.add("none")
}

function resetForm() {
    console.log("ok")
    fullName.value = ""
    mail.value = ""
    phone.value = ""
    address.value = ""
    note.value = ""
    document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
        checkbox.checked = false
    })
}
