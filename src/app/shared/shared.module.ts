import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    BodyComponent
  ]
})
export class SharedModule { }
