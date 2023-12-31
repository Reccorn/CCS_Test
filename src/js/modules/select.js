import 'simplebar'; 
import 'simplebar/dist/simplebar.css';
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

export class Select {
    constructor(obj) {
        this.obj = obj;
        this.select = this.obj.querySelector('select');
        this.options = obj.querySelectorAll('option');

        this.build();
    }

    build() {
        this.head = document.createElement('div');
        this.value = document.createElement('span');
        this.arrow = document.createElement('div');
        this.list = document.createElement('div');

        this.head.classList.add('select__head');
        this.value.classList.add('select__value');
        this.arrow.classList.add('select__arrow');
        this.list.classList.add('select__list');

        this.list.setAttribute('data-simplebar', true);

        this.options.forEach(value => {
            const option = document.createElement('div');
            option.classList.add('select__option');

            option.textContent = value.textContent;
            option.setAttribute('data-value', value.textContent);

            if (value.hidden || value.default) {
                this.value.textContent = value.textContent;
            } else {
                this.list.append(option);
            }

            option.addEventListener('click', () => {
                this.setValue(option);
            });
        });

        this.arrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M14.9337 8.51079C14.9337 8.43936 14.898 8.359 14.8445 8.30543L14.398 7.859C14.3445 7.80543 14.2641 7.76971 14.1927 7.76971C14.1212 7.76971 14.0409 7.80543 13.9873 7.859L10.4784 11.3679L6.96946 7.859C6.91589 7.80543 6.83553 7.76971 6.7641 7.76971C6.68375 7.76971 6.61232 7.80543 6.55875 7.859L6.11232 8.30543C6.05875 8.359 6.02303 8.43936 6.02303 8.51079C6.02303 8.58221 6.05875 8.66257 6.11232 8.71614L10.273 12.8769C10.3266 12.9304 10.407 12.9661 10.4784 12.9661C10.5498 12.9661 10.6302 12.9304 10.6837 12.8769L14.8445 8.71614C14.898 8.66257 14.9337 8.58221 14.9337 8.51079Z" fill="black"/></svg>';
        this.head.append(this.value, this.arrow);

        this.obj.append(this.head, this.list);

        this.setListeners();
    }

    setListeners() {
        document.addEventListener('click', e => {
            if (e.target !== this.head) {
                this.hide();
            } else {
                this.toggle();
            }
        });
    }

    toggle() {
        if (this.obj.classList.contains('select__block--active')) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.obj.classList.add('select__block--active');
    }

    hide() {
        this.obj.classList.remove('select__block--active');
    }

    setValue(option) {
        document.querySelectorAll('.select__option').forEach(item => {
            item.classList.remove('select__option--active');
        });

        let val = option.getAttribute('data-value');

        this.value.textContent = val;
        this.select.value = val;
        option.classList.add('select__option--active');
        this.hide();
    }
}