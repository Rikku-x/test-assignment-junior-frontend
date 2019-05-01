const showModal = modalType => {
  document.querySelector(".shadow").style.display = "block";
  document.querySelector(modalType).style.display = "flex";
};

const hideModal = () => {
  document.querySelector(".shadow").style.display = "none";
  document.querySelector(".modalMonitor").style.display = "none";
  document.querySelector(".modalMobile").style.display = "none";
  document.querySelector(".modalDesktop").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modalMonitor").addEventListener("click", e => {
    e.stopPropagation();
  });
  document.querySelector(".modalMobile").addEventListener("click", e => {
    e.stopPropagation();
  });
  document.querySelector(".modalDesktop").addEventListener("click", e => {
    e.stopPropagation();
  });
});
