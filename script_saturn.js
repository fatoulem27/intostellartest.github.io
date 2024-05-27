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
        window.location.href = 'nosearch.html'; // 실제 페이지로 이동할 URL을 지정합니다.
    }
});
