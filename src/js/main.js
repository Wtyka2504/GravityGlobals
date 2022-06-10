(function () {
  const popupShowBtns = document.querySelectorAll(".popup-show");
  const popupCloseBtns = document.querySelectorAll(".close-popup button.close");
  const popup = document.getElementById("popup");
  const popupCountViews = popup.querySelectorAll(".count");
  const resetCounterBtn = document.getElementById("reset-counter");
  let currentCount = count();

  popupShowBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let _count = count(++currentCount);

      if (_count > 5) resetCounterBtn.classList.add("active");

      popup.classList.add("active");
      popupCountViewsUpdate(_count);
    });
  });
  // Event for close popup
  popup.addEventListener("hide", function () {
    let animate = this.animate(
      [
        {
          opacity: parseInt(getComputedStyle(this).opacity),
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 400,
      }
    );
    animate.onfinish = () => {
      this.classList.remove("active");
    };
  });
  [popup, ...popupCloseBtns].forEach((el) => {
    el.addEventListener("click", function (e) {
      if (e.target !== e.currentTarget) return;
      popup.dispatchEvent(new Event("hide"));
    });
  });
  resetCounterBtn.addEventListener("click", function () {
    this.classList.remove("active");
    currentCount = count(0);
    popupCountViewsUpdate(currentCount);
  });

  // set count of displayed popup, null getting current count
  function count(value = null) {
    if (value === null) return localStorage.getItem("count") || 0;
    localStorage.setItem("count", value);
    return value;
  }
  function popupCountViewsUpdate(value = null) {
    let _count = value || count();
    popupCountViews.forEach((el) => (el.textContent = _count));
  }
})();
