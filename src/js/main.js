import { setMenu } from "./modules/menu";
import { setRangeValue } from "./modules/range";
import { Select } from "./modules/select";
import { setUpload } from "./modules/upload";

document.addEventListener('DOMContentLoaded', function () {
    setRangeValue();
    setUpload();

    const selects = document.querySelectorAll('.select__block');

    if (selects) {
        selects.forEach(item => {
            const selectItem = new Select(item);
        });
    }

    window.addEventListener('load', setMenu);
    window.addEventListener('resize', setMenu);
});