import { throttle } from "lodash";

// import throttle from "lodash.throttle";
const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form textarea'),
    textarea: document.querySelector('.feedback-form input'),
};
const KEY_STORAGE = 'feedback-form-state';
const formData = {}
refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

populateFormData();

function onFormSubmit(e) {
    e.preventDefault();
    if (!formData[refs.input.name] || !formData[refs.textarea.name]) {
        console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)))
    }
    else {
    console.log(formData);
        console.log('Отправляем форму');
        e.currentTarget.reset();
        localStorage.removeItem(KEY_STORAGE);
        formData[refs.input.name] = '';
        formData[refs.textarea.name] = '';
    }
};

function onFormInput(evt) {
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
    };

    function populateFormData() {
        let savedData = localStorage.getItem(KEY_STORAGE);
        if (savedData) {
            savedData = JSON.parse(savedData);
            Object.entries(savedData).forEach(([name, value]) => {
                refs.feedbackForm.elements[name].value = value;
            })
        }
    }