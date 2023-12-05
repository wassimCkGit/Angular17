import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageData } from '../../models/image-data';

@Component({
  selector: 'app-main-manu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-manu.component.html',
  styleUrl: './main-manu.component.css'
})
export class MainManuComponent implements OnInit  {
  image = 'caja.png';
  caption = 'Apps';

  data = [
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('caja.png', 'Caja', 'ContextMenu'),
    new ImageData('factura.png', 'Factura', 'api')
    // Add more elements as needed
  ];

  menuItems: ImageData[] = [];

  
  ngOnInit() {

    this.data.forEach(element => {
      this.menuItems.push(element);
    });
  }
}
