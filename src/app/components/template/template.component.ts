import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    DividerModule,
    AvatarModule,
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  @Input() header: any;
  @Input() content: any;
}
