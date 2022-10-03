const wrapper = document.querySelector('.wrapper')
const btn = document.getElementById('btn')
const qrInput = document.getElementById('qrInput')
qrImg = document.querySelector('.qr-code img')
const copyBtn = document.getElementById('copy')
const toasts = document.getElementById('toasts')

const message = "Copied To Clipboard"

copyBtn.addEventListener('click',()=>{
    copyToClipboard(qrImg.src)
    createNotification()
})

function createNotification(messagetext = message) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = messagetext
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },2500)
}

async function copyToClipboard(src) {
    const data = await fetch(src);
    const blob = await data.blob();

    try{
        await navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]: blob,
            })
        ])
        console.log("Success");
    }catch(e) {
        console.log(e);
    }

   
}

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

    btn.style.width = '84%';
    copyBtn.classList.add('active')
   
})

qrInput.addEventListener("keyup",()=>{
    if (!qrInput.value) {
        wrapper.classList.remove('active')
        btn.style.width = '100%';
        copyBtn.classList.remove('active')
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

        btn.style.width = '84%';
        copyBtn.classList.add('active')
    }
})