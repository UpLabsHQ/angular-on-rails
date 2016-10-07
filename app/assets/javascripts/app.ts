/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="./../../../node_modules/@types/core-js/index.d.ts" />

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/forms';
import '@angular/common';
import '@angular/http';

import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent }  from './components/app.component.ts';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

$(document).on('turbolinks:load', function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
