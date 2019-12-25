import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils';

const countryPhoneSelect = (id, inputGroupId) => {
  const input = document.querySelector(id);
  if(!input) return;

  const inputGroup = document.querySelector(inputGroupId);
  const errorMessageFiled = inputGroup.querySelector('.input-group__error');
  const errorMessages = {
    0: 'Не верный номер',
    1: 'Не верный код страны',
    2: 'Номер слишком короткий',
    3: 'Номер слишком длинный',
    4: 'Не верный номер',
  };

  const reset = () => {
    input.classList.remove('error');
    inputGroup.classList.remove('has-error');
    errorMessageFiled.innerHTML = '';
  };

  const iti = intlTelInput(input);

  input.addEventListener('blur', () => {
    reset();

    if (input.value.trim()) {
      if(!iti.isValidNumber()) {
        input.classList.add('error');

        const errorCode = iti.getValidationError();

        errorMessageFiled.innerHTML = errorMessages[errorCode];
        inputGroup.classList.add('has-error');
      }
    }
  });
};

export default countryPhoneSelect;
