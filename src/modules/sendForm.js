const sendForm = ({ formId, someElem = [] }) => {
    const modal = document.querySelector('.popup');
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';
    statusBlock.style.color = '#ffffff';

    const validate = (list) => {
        let success = true;
        let pattern;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name === 'user_phone') {
                pattern = /^\+?(?:[()-]*\d){4,11}[()-]*$/;
                if (!pattern.test(list[i].value)) {
                    success = false;
                    break;
                }
            }
            else if (list[i].name === 'user_name') {
                pattern = /^[а-яА-ЯЁ-ё][а-яА-ЯЁ-ё\s]{1,}$/;
                if (!pattern.test(list[i].value)) {
                    success = false;
                    break;
                }
            }
            else if (list[i].name === 'user_message') {
                pattern = /[^А-Яа-я0-9\?\.\,\!\-\s]/;
                if (pattern.test(list[i].value) || list[i].value == '') {
                    success = false;
                    break;
                }
            }
            else if (list[i].name === 'user_email') {
                if (list[i].value == '') {
                    success = false;
                    break;
                }
            }
        }
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};
        let flagCalc = false;

        statusBlock.textContent = '';



        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
                if (element.textContent == 0) flagCalc = true;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
                if (element.value == 0) flagCalc = true;
            }
        });

        statusBlock.classList.add('sk-pulse');
        form.append(statusBlock);
        if (validate(formElements)) {
            if (!flagCalc) {
                sendData(formBody).then(data => {
                    formElements.forEach(element => {
                        element.value = '';
                    });
                }).then(data => {
                    statusBlock.classList.remove('sk-pulse');
                    statusBlock.textContent = successText;
                    let promise = new Promise((resolve) => {
                        setTimeout(() => {
                            form.removeChild(statusBlock);
                            resolve();
                        }, 2000);
                    });
                    promise.then(
                        resolve => {
                            modal.style.display = 'none';
                        }
                    );
                })
                    .catch(error => {
                        statusBlock.classList.remove('sk-pulse');
                        statusBlock.textContent = errorText;
                        setTimeout(() => {
                            form.removeChild(statusBlock);
                        }, 3000);
                    });
            } else {
                statusBlock.classList.remove('sk-pulse');
                statusBlock.textContent = 'Воспользуйтесь калькулятором!';
                setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 3000);
            }

        } else {
            alert("Данные не валидны");
            statusBlock.classList.remove('sk-pulse');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;


/*setTimeout(() => {
    //Модальное окно после отправки данных закроется через 3 секунды.
               form.removeChild(statusBlock);
               if (modal.classList.contains('popup')) {
                  modal.style.display = 'none';
               }
            }, 3000);*/