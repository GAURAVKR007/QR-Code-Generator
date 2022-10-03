const wrapper = document.querySelector('.wrapper')
const btn = document.getElementById('btn')
const qrInput = document.getElementById('qrInput')
qrImg = document.querySelector('.qr-code img')

console.log(qrImg.src);

btn.addEventListener('click',()=>{

    let qrValue = qrInput.value
    if(!qrValue) return;
    btn.innerText = "Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add('active')
        btn.innerText = "Generate QR Code"
    })
    wrapper.classList.add("active");
   
})

qrInput.addEventListener("keyup",()=>{
    if (!qrInput.value) {
        wrapper.classList.remove('active')
    }
})

qrInput.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        let qrValue = qrInput.value
        if(!qrValue) return;
        btn.innerText = "Generating QR Code..."
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
        
        qrImg.addEventListener("load",()=>{
            wrapper.classList.add('active')
            btn.innerText = "Generate QR Code"
        })
        wrapper.classList.add("active");
    }
})