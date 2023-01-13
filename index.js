const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordBtn = document.querySelector(".generate-password-btn")
let randomPassword1 = document.querySelector(".password-btn1");
let randomPassword2 = document.querySelector(".password-btn2")
let passwordLimit = 15;

function randomPasswordGen() {
    let newPassword = " "
    for (let i = 0; i < passwordLimit; i++) {
        let randomChars = Math.floor(Math.random() * characters.length)
        newPassword += characters[randomChars]
    }
    return newPassword
}

generatePasswordBtn.addEventListener("click", function() {
    randomPassword1.textContent = " "
    randomPassword2.textContent = " "
    randomPassword1.textContent = randomPasswordGen()
    randomPassword2.textContent = randomPasswordGen() 
});




