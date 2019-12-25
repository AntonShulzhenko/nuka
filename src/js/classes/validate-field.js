class Field {
  constructor(element) {
    this.field = element;
    this.parent = this.field.parentNode;
    this.message = this.parent.querySelector('.input-group__message');
    this.emailPattern = /^[\w+\d+._]+@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/;
    this.messages = {
      empty: 'This field is required',
      email: 'Please, enter valid email'
    };

    this.init();
  }

  getValue() {
    return this.field.value.trim();
  }

  setError() {
    this.parent.classList.add('has-error');
    this.field.type === 'email' // eslint-disable-line
      ? this.message.innerText = this.messages.email
      : this.message.innerText = this.messages.empty;
  }

  setSuccess() {
    this.parent.classList.remove('has-error');
    this.message.innerText = '';
  }

  empty() {
    this.getValue() === '' ? this.setError() : this.setSuccess(); // eslint-disable-line
  }

  email() {
    if (this.field.type === 'email') {
      (!this.emailPattern.test(this.getValue())) ? this.setError() : this.setSuccess(); // eslint-disable-line
    }
  }

  events() {
    this.field.addEventListener('blur', () => {
      this.empty();
      this.email();
    });

    this.field.addEventListener('input', () => {
      if(this.parent.classList.contains('has-error')) {
        this.empty();
        this.email();
      }
    });
  }

  init() {
    this.events();
  }
}

export default Field;
