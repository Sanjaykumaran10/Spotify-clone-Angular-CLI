import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() public  bgcolor1!: string;
  @Input() public  color11!: string;
  @Input() public  title!: string;
  @Input() public image!:string;


}
