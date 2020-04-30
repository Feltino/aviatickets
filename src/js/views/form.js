import {
  getAutocompleteInstance,
  getDatepickersInstance,
} from "../plugins/materialize";

class FormUI {
  constructor(autocompleteInstance, datepickersInstance) {
    this._form = document.forms["locationControls"];
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-destination");
    this.depart = document.getElementById("datepicker-depart");
    this.return = document.getElementById("datepicker-return");
    this.originAutocomlete = autocompleteInstance(this.origin);
    this.destinationAutocomplete = autocompleteInstance(this.destination);
    this.depareDatePicker = datepickersInstance(this.depart);
    this.returnDatePicker = datepickersInstance(this.return);
  }

  get form() {
    return this._form;
  }

  get originValue() {
    return this.origin.value;
  }

  get destinationValue() {
    return this.destination.value;
  }

  get departDateValue() {
    return this.depareDatePicker.toString();
  }

  get returnDateValue() {
    return this.returnDatePicker.toString();
  }

  setAutocompleteData(data) {
    this.originAutocomlete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstance, getDatepickersInstance);

export default formUI;
