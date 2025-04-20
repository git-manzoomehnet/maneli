
function addSnaps(params) {
    var myFullpage = new fullpage('#fullpage', {
        loopTop: true,
        scrollOverflow: false,

        loopBottom: true,
        onLeave: function (origin, destination, direction) {
            const totalSections = document.querySelectorAll('.fp-section').length;
            const currentSection = destination.index + 1;

            document.querySelector('.sectionFraction').textContent = `${currentSection}/${totalSections}`;
        },
        // Get your license at https://alvarotrigo.com/fullPage/pricing
        licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
    });


    const totalSections = document.querySelectorAll('.fp-section').length;
    const currentSection = 1;

    document.querySelector('.sectionFraction').textContent = `${currentSection}/${totalSections}`;
    document.querySelector(".prevSection").addEventListener("click", () => {
        fullpage_api.moveSectionUp();
    });

    document.querySelector(".nextSection").addEventListener("click", () => {
        fullpage_api.moveSectionDown();
    });

}


window.addEventListener("DOMContentLoaded", () => {
    addPro()

    setTimeout(() => {
        addSnaps();
    }, 10);




});

function addPro(params) {
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
                "section scrollSection h-svh snap-start flex items-center justify-center";

            const grid = document.createElement("div");
            grid.className = "grid grid-cols-3 w-80p mx-auto gap-x-10 ";
            chunk.forEach(box => grid.appendChild(box));

            section.appendChild(grid);

            // اضافه کردن به بعد از آخرین سکشن اضافه‌شده
            lastSection.insertAdjacentElement("afterend", section);
            lastSection = section; // آپدیت مرجع
        }
    }

    allProBoxes.forEach((box, i) => {
        box.addEventListener("mouseenter", function (params) {
            allProBoxes.forEach(pro => {
                pro.style.opacity = "0.5"
            });
            box.style.opacity = "1"
        })
        box.addEventListener("mouseout", function (params) {
            allProBoxes.forEach(pro => {
                pro.style.opacity = "1"
            });


        })
    }
    );

    
    const totalSections = document.querySelectorAll('.fp-section').length;
    const currentSection = 1;

    document.querySelector('.sectionFraction').textContent = `${currentSection}/${totalSections}`;

}
let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn[0].classList.add("activeFilterBtn")
filterBtn.forEach(element => {
    element.addEventListener("click", function (params) {
        filterBtn.forEach(element2 => {
            element2.classList.remove("activeFilterBtn")
        });
        element.classList.add("activeFilterBtn")




        let idMember = element.getAttribute("data-id")

        fetch(`/load-product.inc?id=${idMember}&refresh=true`)
            .then(response => response.text())

            .then(userData => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(userData, 'text/html');
                console.log("element", element);
                document.querySelector(".section2 .grid").innerHTML=""
                const socialInfo = document.querySelector(".section2 .grid")
                socialInfo.innerHTML = userData
                let sections = document.querySelectorAll(".section")
                sections.forEach(section => {
                    const hasBothClasses =
                    section.classList.contains("section2") ||
                    section.classList.contains("footerSection");
                console.log(hasBothClasses);
                console.log(section);
                
                  if (!hasBothClasses) {
                    section.remove(); // حذف سکشن‌هایی که هر دو کلاس رو ندارن
                  }
                });
                addPro()
            
            })
            .catch(error => {
                console.error('Error:', error);
            });



    })
});

