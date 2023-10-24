const newsletterButton = document.getElementById("newsletter-button");
newsletterButton.addEventListener("click", () => {
   const subscribeModal = document.getElementById("subscribe-modal");
   if (subscribeModal) {
      const modal = new bootstrap.Modal(subscribeModal);
      modal.show();
   }
});

const subscribeButton = document.querySelector("#subscribe-button");
subscribeButton.addEventListener("click", () => {
   alert("You were subscribed.");
});
var slider_img=document.querySelector('.slider-img');
var images = ['file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/alash.png', 'file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/qyz.png', 'file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/identityAbay.png','file:///C:/Users/Lenovo/Desktop/Library/Library-site/mainPage-img/photo_2023-10-03_14-24-11.jpg'];
var i=0;
function prev(){
if(i<=0) {
   i = images.length;
}
i--;
   return setImg();

}
function next(){
   if(i>=images.length-1){
      i = -1;
   }
   i++;
   return setImg();
}

function setImg(){
   return slider_img.setAttribute('src',images[i]);
}
