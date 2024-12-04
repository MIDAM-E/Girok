// 이미지 업로드 기능
document.getElementById('add-image').addEventListener('click', () => {
    const input = document.getElementById('image-upload');
    const gallery = document.getElementById('gallery-images');
    const galleryData = JSON.parse(localStorage.getItem('galleryImages')) || [];

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = '업로드된 이미지';

            // 삭제 버튼 추가
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                // 클릭된 이미지 삭제
                const index = galleryData.indexOf(e.target.result);
                if (index > -1) {
                    galleryData.splice(index, 1);
                    localStorage.setItem('galleryImages', JSON.stringify(galleryData));
                    img.remove();  // 화면에서 삭제
                    deleteButton.remove();  // 삭제 버튼 제거
                }
            });

            gallery.appendChild(img);
            gallery.appendChild(deleteButton);

            galleryData.push(e.target.result);
            localStorage.setItem('galleryImages', JSON.stringify(galleryData));
        };

        reader.readAsDataURL(input.files[0]);
    }
});

// 페이지 로드 시 갤러리 이미지 표시
document.addEventListener('DOMContentLoaded', () => {
    const galleryData = JSON.parse(localStorage.getItem('galleryImages')) || [];
    const galleryImages = document.getElementById('gallery-images');

    // 저장된 모든 이미지 표시
    galleryData.forEach((imgSrc) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = '갤러리 이미지';

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            // 클릭된 이미지 삭제
            const index = galleryData.indexOf(imgSrc);
            if (index > -1) {
                galleryData.splice(index, 1);
                localStorage.setItem('galleryImages', JSON.stringify(galleryData));
                img.remove();  // 화면에서 삭제
                deleteButton.remove();  // 삭제 버튼 제거
            }
        });

        galleryImages.appendChild(img);
        galleryImages.appendChild(deleteButton);
    });
});
