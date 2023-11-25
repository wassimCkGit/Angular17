import { OnInit, AfterViewInit,Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataviewerComponent } from './components/dataviewer/dataviewer.component';
import { FormComponentComponent } from './components/form-component/form-component.component';

declare var anime: any;  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DataviewerComponent,FormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @Input() config: FormComponentComponent['title']; 
  title = "";

  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // ngOnInit(): void {
  //   // Suscribirse a los cambios en el config
  //   this.dataService.getConfig().subscribe((newConfig) => {
  //     this.config = newConfig;
  //   });  
}
