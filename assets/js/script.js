  
  alert("Hey! calculator ready To use!");
  const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.num;

    if (!isNaN(buttonValue) || buttonValue === '.') {
      screen.value += buttonValue;
    } else if (buttonValue === 'C') {
      screen.value = '';
    } else if (buttonValue === '=') {
      try {
        const result = eval(screen.value);
        if (isNaN(result)) {
          screen.value = 'Error';
        } else {
          screen.value = result;
        }
      } catch (error) {
        screen.value = 'Error';
      }
    } else {
      screen.value += ` ${buttonValue} `;
    }
  });
});
