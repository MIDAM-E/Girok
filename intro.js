// 최근 일기 미리보기
document.addEventListener('DOMContentLoaded', () => {
    const diaryData = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const diaryPreview = document.getElementById('diary-preview');

    diaryData.slice(-4).reverse().forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry;
        diaryPreview.appendChild(li);
    });

    // 최근 갤러리 이미지 미리보기
    const galleryData = JSON.parse(localStorage.getItem('galleryImages')) || [];
    const galleryPreview = document.getElementById('gallery-preview');

    galleryData.slice(-6).reverse().forEach((imgSrc) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = '미리보기 이미지';
        galleryPreview.appendChild(img);
    });
});
