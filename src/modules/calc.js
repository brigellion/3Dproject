const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    const runNum = (num, increment) => {
        let interval = 0;
        if (increment) {
            let shift = Math.round((num - total.textContent) / 20);
            interval = setInterval(() => {
                if (+total.textContent + shift >= num) {
                    total.textContent = num;
                    clearInterval(interval);
                } else {
                    total.textContent = +total.textContent + shift;
                }
            }, 20);
        } else {
            let shift = Math.round((total.textContent - num) / 20);
            interval = setInterval(() => {
                if (+total.textContent - shift <= num) {
                    total.textContent = num;
                    clearInterval(interval);
                } else {
                    total.textContent = +total.textContent - shift;
                }
            }, 20);
        }

    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;
        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;
        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }
        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
        if (totalValue > 0) {
            if (total.textContent < totalValue) {
                runNum(+totalValue, true);
            } else {
                runNum(+totalValue, false);
            }
        }
    };

    function debounce(f, t) {
        return function (args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= t)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => f(args), t);
        };
    }

    calcBlock.addEventListener('input', debounce((e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    }, 500));

};

export default calc;