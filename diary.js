// 일기 추가 기능
document.getElementById('add-diary').addEventListener('click', () => {
    const input = document.getElementById('diary-input');
    const list = document.getElementById('diary-list');
    const diaryData = JSON.parse(localStorage.getItem('diaryEntries')) || [];

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            // 클릭된 일기 삭제
            const index = diaryData.indexOf(input.value);
            if (index > -1) {
                diaryData.splice(index, 1);
                localStorage.setItem('diaryEntries', JSON.stringify(diaryData));
                li.remove();  // 화면에서 삭제
            }
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        diaryData.push(input.value);
        localStorage.setItem('diaryEntries', JSON.stringify(diaryData));

        input.value = '';  // 입력 후 초기화
    } else {
        alert('일기를 입력해주세요.');
    }
});

// 페이지 로드 시 일기 기록 표시
document.addEventListener('DOMContentLoaded', () => {
    const diaryData = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const diaryList = document.getElementById('diary-list');

    // 저장된 모든 일기 데이터 표시
    diaryData.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry;

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            // 클릭된 일기 삭제
            const index = diaryData.indexOf(entry);
            if (index > -1) {
                diaryData.splice(index, 1);
                localStorage.setItem('diaryEntries', JSON.stringify(diaryData));
                li.remove();  // 화면에서 삭제
            }
        });

        li.appendChild(deleteButton);
        diaryList.appendChild(li);
    });
});
