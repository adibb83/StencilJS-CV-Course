import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cv-textarea',
  styleUrl: 'cv-textarea.scss',
  shadow: true,
})
export class CvTextarea {

  @Prop() rows: number;
  @Prop() disabled: boolean = false;
  @Prop() placeholder: string;



  render() {
    return (
        <textarea class="cv-textarea" rows={this.rows} disabled={this.disabled} placeholder={this.placeholder}></textarea>
    );
  }

}
