export function setUpload() {
    const input = document.querySelector('[type="file"');
    const parent = input.closest('.form__file-upload');
    const text = parent.querySelector('span');

    input.addEventListener('change', function () {
        text.innerText = 'Загрузка...';
        parent.style.pointerEvents = 'none';
        fetch(input.files[0])
            .then(res => {
                if (res.ok) {
                    text.innerText = 'Загружено';
                }
            })
            .catch(err => {
                console.log(err);
                text.innerText = 'Ошибка!';
            })
            .then(() => {
                parent.style.pointerEvents = 'all';
            });
    });
}