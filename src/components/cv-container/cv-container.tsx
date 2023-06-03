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
            <cv-form></cv-form>
          </div>
        </slot>
      </Host>
    );
  }

}
