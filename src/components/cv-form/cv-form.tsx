import { Component, Event, EventEmitter, h } from '@stencil/core';

export interface MyForm {
  name?: string;
  selectedBand?: string;
  hobbis?: string;
}

@Component({
  tag: 'cv-form',
  styleUrl: 'cv-form.scss',
  shadow: true,
})
export class CvForm {


  public myForm: MyForm = {}

  public getInputValue(name: string): void {
    this.myForm.name = name;
  }

  public getTextAreaValue(hobbis: string): void {
    this.myForm.hobbis = hobbis;
  }

  public getSelectValue(band: string): void {
     this.myForm.selectedBand = band;
  }

  public submit(e: SubmitEvent): void{
    e.preventDefault();
    console.log(this.myForm)
  }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e as SubmitEvent)}>
        <slot>
          <cv-input  onCvInputChange={ev => this.getInputValue(ev.detail)} placeholder="Full Name"></cv-input>
          <cv-select onCvSelectChange={ev => this.getSelectValue(ev.detail)} lable="Select Your Favorit Band" selectOptions={["Nirvana", "Pink Floyd", "Guns & Roses", "Dire Straits", "Pearl Jam"]}></cv-select>
          <cv-textarea onCvTextAreaChange={ev => this.getTextAreaValue(ev.detail)}  rows={10} placeholder="Add Hobies"></cv-textarea>
        </slot>
        <button class="cv-btn">Send</button>
      </form>
    );
  }

}
