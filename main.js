// Thay đổi nội dung búc thư ở đây
var letterContent =" 1 tuần có 7 ngày, 1 ngày có 24 giờ, 1 giờ có 60 phút, 1 phút có 60 giây.Không có một ngày hoặc giờ nào mà anh không nhớ em.Không có giây phút nào mà anh không nghĩ đến em.Tâm hồn và trái tim anh tràn ngập em.Dù em có giận, có im lặng, thì tình cảm anh vẫn không đổi thay.Nếu có điều gì khiến em buồn, thì hãy để anh là người đầu tiên sửa sai.Vì không có gì quan trọng hơn là được thấy em cười và không nơi nào khiến anh thấy yên lòng hơn là bên em.Em giận, anh không dám cười.Em buồn, anh chẳng thể vui.Em im lặng, cả thế giới của anh như ngừng lạiNên là… tha lỗi cho anh nha?Anh ở đây, với cả bầu trời thương em💗."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
