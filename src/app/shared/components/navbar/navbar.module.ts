import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { DarkenHoverDirective } from '../../directives/darken-hover.directive';

@NgModule({
  declarations: [NavbarComponent, DarkenHoverDirective],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
