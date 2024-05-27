document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const firstSlide = document.querySelector('.slide:first-child');
    const lastSlide = document.querySelector('.slide:last-child');
    let currentIndex = 0;
    let isAnimating = false;

    // Clone first and last slides
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    // Append clones to the slides container
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, firstSlide);

    const updateSlidePosition = () => {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
    };

    const showNextSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex += 1;
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;

        slides.addEventListener('transitionend', () => {
            if (currentIndex >= slideCount) {
                currentIndex = 0;
                updateSlidePosition();
            }
            isAnimating = false;
        }, { once: true });
    };

    const showPrevSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex -= 1;
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;

        slides.addEventListener('transitionend', () => {
            if (currentIndex < 0) {
                currentIndex = slideCount - 1;
                updateSlidePosition();
            }
            isAnimating = false;
        }, { once: true });
    };

    setInterval(showNextSlide, 3000); // 3초마다 이미지 전환

    updateSlidePosition(); // Initial position
});

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    // 검색 버튼 클릭 시 이벤트 처리
    searchButton.addEventListener('click', () => {
        redirectToSearchUnsupportedPage();
    });

    // 엔터 키 입력 시 이벤트 처리
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            redirectToSearchUnsupportedPage();
        }
    });

    // 검색 기능 지원 안 하는 페이지로 이동하는 함수
    function redirectToSearchUnsupportedPage() {
        // 여기에는 실제로 페이지로 이동하는 코드가 들어갈 수 있습니다.
        // 예시로 경고창을 띄우는 코드를 작성했습니다.
        // alert('검색 기능 지원 안 하는데요');
        window.location.href = 'index_nosearch.html'; // 실제 페이지로 이동할 URL을 지정합니다.
    }
});
