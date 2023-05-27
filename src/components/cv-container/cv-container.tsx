import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cv-container',
  styleUrl: 'cv-container.scss',
  shadow: true,
})
export class CvContainer {

  render() {
    return (
      <Host>
        <slot>
          <div class="cv-container">
          <cv-input placeholder="Full Name"></cv-input>
          <cv-select lable="Select Your Favorit Band" selectOptions={["Nirvana", "Pink Floyd", "Guns & Roses", "Dire Straits", "Pearl Jam"]}></cv-select>
          <cv-textarea rows={10} placeholder="Add Hobies"></cv-textarea>
          </div>
        </slot>
      </Host>
    );
  }

}
