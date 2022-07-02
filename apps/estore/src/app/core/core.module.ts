import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [CommonModule, SharedModule, RouterModule.forRoot([])],
})
export class CoreModule {}
