$(document).ready(function () {
    // Smooth scrolling to sections
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 50,
            }, 500);
        }
    });

    // Add new diary entry
    $('#add-diary').on('click', function () {
        const diaryInput = $('#diary-input').val().trim();
        if (diaryInput) {
            const newDiary = $('<li>').text(diaryInput);
            $('#diary-list').append(newDiary);
            $('#diary-input').val(''); // Clear input
        }
    });
});
