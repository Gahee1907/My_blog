
 //hambuger menu
 $(document).ready(function() {
    $(".btn").click(function() {
      $("#menu,.page_cover,html").addClass("open");
      window.location.hash = "#open";
    })
})
    
  window.onhashchange = function() {
      if (location.hash != "#open") {
        $("#menu,.page_cover,html").removeClass("open");
      }
    };
    
 $(document).ready(function(){
    $("#menu ul.sub_mobile").hide();
    $("#menu ul.nav li").click(function(){
    $("ul",this).slideToggle("fast");
    })
})


// 테크노트 페이지 요소 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".note").forEach((note, index) => {
    gsap.from(note, {
      y: 50,              // 아래에서 위로
      opacity: 0,         // 투명 -> 보임
      duration: 0.8,
      delay: index * 0.2, // 순차 등장
      ease: "power2.out"
    });
  });
});


//main 홈화면 로고
 // DOM이 완전히 로드된 후 실행
window.addEventListener('DOMContentLoaded', () => {
  // SplitType으로 텍스트를 문자 단위로 분해
  const split = new SplitType('.text', { types: 'chars' });

  // 원래 텍스트 보이게 하기
  document.querySelector('.text').style.opacity = '1';

  // GSAP로 문자 하나씩 애니메이션
  gsap.from('.char', {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.05,
    ease: 'back.out(1.7)'
  });
});

//알고리즘 페이지 슬라이드
const mySwiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 10,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      }
    },
    1001: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      }
    }
  },
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".imple").forEach((note, index) => {
    gsap.from(note, {
      y: 50,              // 아래에서 위로
      opacity: 0,         // 투명 -> 보임
      duration: 0.8,
      delay: index * 0.2, // 순차 등장
      ease: "power2.out"
    });
  });
});

//project aos
AOS.init({
  duration: 2000,
})

//algorithm top button
function clickme() {
  window.scrollTo({top:0, left:0, behavior:"smooth"});
}




