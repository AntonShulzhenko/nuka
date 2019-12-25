import Field from './validate-field';

class SubmitForm {
  constructor(element) {
    this.form = element;
    this.fields = this.form.querySelectorAll('.input');
    this.requiredFields = this.form.querySelectorAll('.is-required');
    this.notify = this.form.querySelector('.contacts__success');

    this.init();
  }

  validateFields() {
    Array.prototype.forEach.call(this.requiredFields, (field) => {
      new Field(field); // eslint-disable-line
    });
  }

  validateFieldsOnSubmit() {
    Array.prototype.forEach.call(this.requiredFields, (field) => {
      new Field(field).empty();
    });
  }

  successNotify() {
    this.notify.classList.add('is-shown');

    setTimeout(() => {
      this.notify.classList.remove('is-shown');
    }, 3000);
  }

  success() {
    Array.prototype.forEach.call(this.fields, (field) => {
      field.value = ''; // eslint-disable-line
    });
  }

  events() {
    this.form.addEventListener('submit', (e) => {
      this.validateFieldsOnSubmit();

      const errors = this.form.querySelectorAll('.has-error');

      if(errors.length > 0) {
        e.preventDefault();
      } else {
        submitted = true; // eslint-disable-line

        this.successNotify();

        setTimeout(() => {
          this.success();
        }, 1000);
      }
    });
  }

  init() {
    this.validateFields();
    this.events();
  }
}

export default SubmitForm;
