const validator = () => {
    const inputs = document.querySelector('.calc-block').querySelectorAll('input[type=text]');
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, ''); //- только числа
        });
    });

    const nameF1 = document.getElementById('form1').querySelector('.form-name');
    const emailF1 = document.getElementById('form1').querySelector('.form-email');
    const telF1 = document.getElementById('form1').querySelector('.form-phone');

    const nameF3 = document.getElementById('form3').querySelector('.form-name');
    const emailF3 = document.getElementById('form3').querySelector('.form-email');
    const telF3 = document.getElementById('form3').querySelector('.form-phone');

    const nameF2 = document.getElementById('form2').querySelector('.top-form');
    const emailF2 = document.getElementById('form2').querySelector('.form-email');
    const telF2 = document.getElementById('form2').querySelector('.form-phone');
    const messageF2 = document.getElementById('form2').querySelector('.mess');

    const validationName = (e) => {
        console.log('name');
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^а-яА-Я -]/, '');
    };

    const validationEmail = (e) => {
        console.log('email');
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/, '');
    };

    const validationTel = (e) => {
        console.log('tel');
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^\+()-\d]/, '');
    };

    nameF1.addEventListener('input', validationName);
    emailF1.addEventListener('input', validationEmail);
    telF1.addEventListener('input', validationTel);

    nameF3.addEventListener('input', validationName);
    emailF3.addEventListener('input', validationEmail);
    telF3.addEventListener('input', validationTel);

    nameF2.addEventListener('input', validationName);
    messageF2.addEventListener('input', validationName);
    emailF2.addEventListener('input', validationEmail);
    telF2.addEventListener('input', validationTel);

};

export default validator;

