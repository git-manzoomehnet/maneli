let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn[0].classList.add("activeFilterBtn")
filterBtn.forEach(element => {
    element.addEventListener("click", function (params) {
        filterBtn.forEach(element2 => {
            element2.classList.remove("activeFilterBtn")
        });
        element.classList.add("activeFilterBtn")

    })
});






function addSnaps() {

    const sections = document.querySelectorAll(".scrollSection");
    let currentIndex = 0;

    function updateFraction() {
        const fraction = document.querySelector(".fraction");
        fraction.innerHTML = `<p class="totalFraction">${sections.length}</p>/<p class="currentFraction">${currentIndex + 1}`;
    }

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;

        gsap.to(window, {
            duration: 1,
            scrollTo: sections[index],
            ease: "power4.out"
        });

        currentIndex = index;
        updateFraction();
    }

    document.querySelector(".next").addEventListener("click", () => {
        if (currentIndex < sections.length - 1) {
            scrollToSection(currentIndex + 1);
        }
    });

    document.querySelector(".prev").addEventListener("click", () => {
        if (currentIndex > 0) {
            scrollToSection(currentIndex - 1);
        }
    });

    updateFraction();  // Update fraction on load

    document.querySelectorAll(".scrollSection").forEach((element, index) => {
        ScrollTrigger.create({
            trigger: element,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            snap: {
                snapTo: [0.5],
                duration: 2,
                delay: 0,
            },

            onEnter: () => {
                currentIndex = index;
                updateFraction();
            },
            onEnterBack: () => {
                currentIndex = index;
                updateFraction();
            }




        })
    });
}







window.addEventListener("DOMContentLoaded", () => {
    const allProBoxes = Array.from(document.querySelectorAll(".proBox"));
    const container = document.querySelector(".section2");
  
    // حذف همه‌ی proBoxها
    allProBoxes.forEach(box => box.remove());
  
    // مرجع سکشنی که می‌خوای بعد از اون سکشن جدید رو اضافه کنی
    let lastSection = container;
  
    for (let i = 0; i < allProBoxes.length; i += 3) {
      const chunk = allProBoxes.slice(i, i + 3);
  
      if (i === 0) {
        const grid = container.querySelector(".grid");
        chunk.forEach(box => grid.appendChild(box));
      } else {
        const section = document.createElement("section");
        section.className =
          "section scrollSection w-80p mx-auto h-svh snap-start flex items-center justify-center";
  
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-3";
        chunk.forEach(box => grid.appendChild(box));
  
        section.appendChild(grid);
  
        // اضافه کردن به بعد از آخرین سکشن اضافه‌شده
        lastSection.insertAdjacentElement("afterend", section);
        lastSection = section; // آپدیت مرجع
      }
    }
  
    setTimeout(() => {
      addSnaps();
    }, 10);
  });
  

