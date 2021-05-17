import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { DateFormatePipe } from '../core/pipes/date-formate.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    NewsCardComponent,
    DateFormatePipe,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    RouterModule

  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    SideMenuComponent,
    NgbModule,
    CommonModule,
    NewsCardComponent,
    DateFormatePipe
  ]
})
export class SharedModule { }
