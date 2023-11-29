import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';

export const routes: Routes = [
    { path: 'root', component: AppComponent },
    { path: 'XrentTest01', component: FormComponentComponent, pathMatch: 'full' },
    { path: 'ContextMenu', component: ContextMenuComponent, pathMatch: 'full' },
  ];
