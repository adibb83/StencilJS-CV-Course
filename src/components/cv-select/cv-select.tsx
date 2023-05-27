import { Component, Event, Prop, State, EventEmitter, h} from '@stencil/core';

@Component({
  tag: 'cv-select',
  styleUrl: 'cv-select.scss',
  shadow: true,
})
export class CvSelect {

  @Prop() lable: string;
  @Prop() selectOptions: string[]= [];
  @Prop() defaltValue: string = '';
  @State() value: string = this.defaltValue;
  @State() isOpen: boolean = false;
  @Event() onSelectChange: EventEmitter<string>;


  componentWillLoad(){
    this.value = this.defaltValue;
  }

  onOptionClick(option: string){
    this.value = option;
    this.isOpen = false;
    this.onSelectChange.emit(this.value);
  }

  toggleSelectOpen(){
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class="select-container">
        <label>{this.lable}</label>
         <div class="selected-option" onClick={() => this.toggleSelectOpen()}>
             {this.value || 'Select..'}
         </div>
         {this.isOpen && (
             <div class="select-options">
                {this.selectOptions.map(option => (
                  <div class="option" onClick={() => this.onOptionClick(option)}>
                       {option}
                  </div>
                ))}
             </div>
         )}
      </div>
    );
  }

}
