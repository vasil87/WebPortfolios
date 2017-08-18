import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        [MdButtonModule, MdCheckboxModule],
    ],
    exports: [
        HeaderComponent
        ],
    declarations: [
        HeaderComponent
    ],
    providers: [],
})
export class SharedModule { }
