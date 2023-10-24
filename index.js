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
