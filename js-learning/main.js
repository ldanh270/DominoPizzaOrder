//Set variable values
const fullName = document.getElementById("fullName")
const mail = document.getElementById("mail")
const phone = document.getElementById("phone")
const address = document.getElementById("address")
const selectedProducts = Array.from(document.querySelectorAll("input[name=product]:checked")).map((checkbox) => checkbox.value)
const note = document.getElementById("note")
const submit = document.getElementById("submit")

//Submit button onClick event
submit.addEventListener("click", () => {
    if (fullName.value && mail.value && phone.value && address.value) {
        const data = {
            name: fullName.value,
            mail: mail.value,
            phone: phone.value,
            address: address.value,
            product: selectedProducts.join(", "),
            note: note.value,
        }
        postData(data)
    } else {
        alert("Vui lòng điền đầy đủ thông tin!")
    }
})

//Post data to seve
async function postData(data) {
    const formData = new FormData()
    formData.append("entry.370398972", data.name)
    formData.append("entry.999350632", data.mail)
    formData.append("entry.1422963717", data.phone)
    formData.append("entry.1994028706", data.address)
    formData.append("entry.214818534", data.product)
    formData.append("entry.1547702337", data.note)
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSc589AvQ9pFa-rzgtMkwfmxPCCLRCTh6ukTWPplJK_SBMtZzQ/formResponse"),
        {
            method: "POST",
            body: formData,
            mode: "no-cors",
        }
    alert("Đặt món thành công!")
}
