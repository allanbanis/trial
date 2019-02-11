import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
@NgModule({
  
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }

