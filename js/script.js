const input = document.querySelector("input")

/* swiper */
var swiperPopular = new Swiper (".swiper", {
    spaceBetween: 30,
    navigation: true,
    grabCursor: true,
    scrollbar: true,
    centeredSlides:true,
    autoplay:{
        delay: 2000,
        disableOninteraction:false,
    },
    breakpoints:{
        0: {
            slidesPerView: '1',
        },
        700: {
            slidesPerView: '2',
        },
        900: {
            slidesPerView: '2',
        },
    },
    loop:true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
          },
      pagination: {
        el: ".swiper-pagination",}
});

 function validateForm() {
        const from_name = document.getElementById("fromName").value;
   const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const nodisplay = document.querySelector(".nodisplay");
     const goldwatchtype = document.getElementById("goldwatchtype").value;
    const silverwatchtype = document.getElementById("silverwatchtype").value;
    const bluewatchtype = document.getElementById("bluewatchtype").value;
    const blackwatchtype = document.getElementById("blackwatchtype").value;
    if (goldwatchtype.checked == true) {
        temParams.push(goldwatchtype)
    }
        if (from_name == null || from_name == "")
        { alert("Please Fill All Required Field");
        return false;}
        else if  (address == null || address == ""){
            alert("Please Fill All Required Field");
            return false;
        }
        else if (number == null || number == ""){
            alert("Please Fill All Required Field");
            return false;
        }
        else if(number.length < 11){
            nodisplay.classList.toggle("display")
        }
         else if (email == null || email == "") {
          alert("Please Fill All Required Field");
          return false;}
        else{
function sendMail(params){
var tempParams ={
    from_name: document.getElementById("fromName").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
};
    emailjs.send("service_2a18hgp","template_h22glin",tempParams)
    .then(function(res){
        alert('Order Placed Successfuly, We will get back to you', res.text);
        console.log("sucess",res.status)
    })
    error => {
        alert( 'An error occured, Plese try again',error.text)
        }
    }
    return sendMail()
 }
}
