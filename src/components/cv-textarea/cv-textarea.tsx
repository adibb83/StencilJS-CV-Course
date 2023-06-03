import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'cv-textarea',
  styleUrl: 'cv-textarea.scss',
  shadow: true,
})
export class CvTextarea {

  @State() value: string;
  @Prop() rows: number;
  @Prop() disabled: boolean = false;
  @Prop() placeholder: string;



  @Event({
    eventName:'cvTextAreaChange'
  }) cvTextAreaChange: EventEmitter<string>;

  handleChange(event) {
    this.value = event.target.value;
  this.cvTextAreaChange.emit(this.value)
  }




  render() {
    return (
        <textarea class="cv-textarea" value={this.value} onInput={(e) => this.handleChange(e)} rows={this.rows} disabled={this.disabled} placeholder={this.placeholder}></textarea>
    );
  }

}
