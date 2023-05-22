import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() public num!: string;
  @Input() public image!:string;
  @Input() public title!:string;
  @Input() public section!:string;
  @Input() public album!:string;
  @Input() public date!:string;
  @Input() public tim!:string;
  
    hover: boolean = false;

    toggleHover(isHovered: boolean) {
        this.hover = isHovered;
    }
}
