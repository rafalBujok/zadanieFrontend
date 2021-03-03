import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputKeywordsComponent } from './input-keywords/input-keywords.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent, DialogContentComponent } from './gallery/gallery.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DateMonthYearPipe } from './pipes/date-month-year.pipe';
import { TagsComponent } from './tags/tags.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    InputKeywordsComponent,
    HomeComponent,
    GalleryComponent,
    DialogContentComponent,
    DateMonthYearPipe,
    TagsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
