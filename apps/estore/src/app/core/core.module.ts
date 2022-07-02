import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [SharedModule, RouterModule.forRoot([])],
})
export class CoreModule {}
