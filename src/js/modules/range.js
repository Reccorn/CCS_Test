export function setRangeValue() {
    const range = document.querySelector('[type="range"]');
    const value = document.querySelector('.form__value');

    range.addEventListener('input', setValue);

    function setValue() {
        value.innerText = range.value + ' %';
    }

    setValue();
}