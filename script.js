const sections = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => observer.observe(section));

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

const counter = document.getElementById("counter");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

        lightbox.classList.add("active");

    });

});

function showImage(){


    lightboxImage.classList.remove("change");


    void lightboxImage.offsetWidth;


    lightboxImage.src =
        galleryImages[currentIndex].src;


    lightboxImage.classList.add("change");


    counter.textContent =
        `${currentIndex+1} / ${galleryImages.length}`;

}

nextBtn.onclick=()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage();

};

prevBtn.onclick=()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    showImage();

};

closeBtn.onclick=()=>{

    lightbox.classList.remove("active");

};

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});


document.getElementById("groomName").textContent =
    wedding.groom;

document.getElementById("brideName").textContent =
    wedding.bride;

const heroDate =
document.getElementById("heroDate");

if(heroDate){

    heroDate.textContent =
    wedding.date;

}

const weddingTime =
document.getElementById("weddingTime");

if(weddingTime){
    weddingTime.textContent = wedding.time;
}


const hall =
document.getElementById("hall");

if(hall){
    hall.textContent = wedding.hall;
}


const hallDetail =
document.getElementById("hallDetail");

if(hallDetail){
    hallDetail.textContent = wedding.hallDetail;
}


// ===========================
// MAP LINK
// ===========================

document
.getElementById("kakaoMapBtn")
.addEventListener("click", function(){

    window.open(
        wedding.kakaoMap,
        "_blank"
    );

});


document
.getElementById("naverMapBtn")
.addEventListener("click", function(){

    window.open(
        wedding.naverMap,
        "_blank"
    );

});

function createCalendar(){

    const date =
        new Date(wedding.date);


    const year =
        date.getFullYear();

    const month =
        date.getMonth();


    const weddingDay =
        date.getDate();


    document.getElementById(
        "calendarTitle"
    ).textContent =
        `${year}.${String(month+1).padStart(2,"0")}`;


    const firstDay =
        new Date(year,month,1)
        .getDay();


    const lastDate =
        new Date(year,month+1,0)
        .getDate();


    const calendar =
        document.getElementById(
            "calendarDays"
        );


    calendar.innerHTML="";


    for(let i=0;i<firstDay;i++){

        calendar.innerHTML +=
        "<span></span>";

    }


    for(let day=1;day<=lastDate;day++){

        if(day===weddingDay){

            calendar.innerHTML +=
            `<span class="today">
            ${day}
            </span>`;

        }else{

            calendar.innerHTML +=
            `<span>${day}</span>`;

        }

    }


    document.getElementById(
        "calendarDate"
    ).textContent =
    `${year}.${String(month+1).padStart(2,"0")}.${String(weddingDay).padStart(2,"0")}`;

}


createCalendar();

// ===========================
// KAKAO TALK SHARE
// ===========================

const kakaoShareBtn = document.getElementById("kakaoShareBtn");

if (kakaoShareBtn) {
    kakaoShareBtn.addEventListener("click", () => {
        if (typeof Kakao === "undefined") {
            alert("카카오톡 공유 기능을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
            return;
        }

        if (!Kakao.isInitialized()) {
            Kakao.init(KAKAO_JS_KEY);
        }

        Kakao.Share.sendCustom({
            templateId: KAKAO_TEMPLATE_ID
        });
    });
}

// ===========================
// MOBILE SWIPE GALLERY
// ===========================

let startX = 0;
let endX = 0;


lightboxImage.addEventListener(
    "touchstart",
    (e)=>{

        startX = e.changedTouches[0].screenX;

    }
);


lightboxImage.addEventListener(
    "touchend",
    (e)=>{

        endX = e.changedTouches[0].screenX;

        swipeGallery();

    }
);



function swipeGallery(){

    const distance = endX - startX;


    if(distance > 50){

        // 오른쪽 스와이프
        prevBtn.click();

    }


    if(distance < -50){

        // 왼쪽 스와이프
        nextBtn.click();

    }

}

// ===========================
// LOCATION INFO
// ===========================

const locationHall =
document.getElementById("locationHall");


const locationAddress =
document.getElementById("locationAddress");


if(locationHall){

    locationHall.textContent =
    wedding.hall;

}


if(locationAddress){

    locationAddress.textContent =
    wedding.address;

}

// ===========================
// ACCOUNT ACCORDION
// ===========================

const accountHeaders =
document.querySelectorAll(".account-header");

accountHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const card = header.parentElement;

        card.classList.toggle("active");

    });

});

const modal = document.getElementById("accountModal");

document.querySelectorAll(".gift-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        const id = btn.dataset.id;

        const info = accounts.find(a=>a.id===id);

        document.getElementById("modalBank").textContent = info.bank;
        document.getElementById("modalAccount").textContent = info.account;
        document.getElementById("modalOwner").textContent = "예금주 : " + info.owner;

        modal.classList.add("show");

    });

});

document.getElementById("modalClose").onclick=()=>{

    modal.classList.remove("show");

};

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

    }

};
document.getElementById("modalCopy").onclick=async()=>{

    const text =
    document.getElementById("modalAccount").textContent;

    await navigator.clipboard.writeText(text);

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },1800);

};

// ===========================
// ACCOUNT NAME
// ===========================

document.getElementById("groomNameText").textContent =
    accounts.find(a => a.id === "groom").name;

document.getElementById("groomFatherText").textContent =
    accounts.find(a => a.id === "groomFather").name;

document.getElementById("groomMotherText").textContent =
    accounts.find(a => a.id === "groomMother").name;

document.getElementById("brideNameText").textContent =
    accounts.find(a => a.id === "bride").name;

document.getElementById("brideFatherText").textContent =
    accounts.find(a => a.id === "brideFather").name;

document.getElementById("brideMotherText").textContent =
    accounts.find(a => a.id === "brideMother").name;

