import { Component, Prop, State, Watch, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cv-input',
  styleUrl: 'cv-input.scss',
  shadow: true,
})
export class CvInput {

  @State() value: string;
  @State() errorMessage: string;
  @Prop() disabled: boolean = false;
  @Prop() placeholder: string;

  @Event({
    eventName:'cvInputChange'
  }) cvInputChange: EventEmitter<string>;

  handleChange(event) {
    this.value = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    } else {
      this.cvInputChange.emit(this.value);
    }
  }

  @Watch('value')
  validateName(newValue: string, _oldValue: string) {
    this.errorMessage = '';
    const isBlank = typeof newValue !== 'string' || newValue === '';
    if (isBlank) {
      this.errorMessage = 'name cannot be empty';
    };
    // don't allow `thingToDo` to be a string with a length of 1
    const has2chars = typeof newValue === 'string' && newValue.length >= 2;
    if (!has2chars) {
       this.errorMessage = 'name must be more than 1 character'
    };
  }

  render() {
    return (
      <div>
        <input class="cv-input" type="text"
        disabled={this.disabled}
        placeholder={this.placeholder}
        value={this.value} onInput={(e) => this.handleChange(e)}
        ></input>
        <span class="cv-error">{this.errorMessage}</span>
      </div>
    );
  }

}
