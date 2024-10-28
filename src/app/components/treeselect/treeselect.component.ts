import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
  selector: 'app-treeselect',
  standalone: true,
  imports: [TreeSelectModule, CommonModule, FormsModule],
  templateUrl: './treeselect.component.html',
  styleUrl: './treeselect.component.css'
})
export class TreeselectComponent {
  @Input() treeSelectValue : any
  selectedNodes: any;
}
