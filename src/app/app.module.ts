import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller'
import {TableModule} from 'primeng/table';

import {
    ContextMenuModule, ButtonModule, InputTextModule
    , ToolbarModule, TreeTableModule, ToggleButtonModule
    , SplitButtonModule, MultiSelectModule
} from 'primeng/primeng'

@NgModule({
  imports:      [ BrowserModule, FormsModule, MultiSelectModule
    , ToolbarModule, ButtonModule, InputTextModule, ToggleButtonModule
    , TreeTableModule, VirtualScrollerModule, TableModule
    , FlexLayoutModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
