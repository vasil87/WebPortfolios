import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        [MdButtonModule, MdCheckboxModule],
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AsideComponent
        ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        AsideComponent
],
    providers: [],
})
export class SharedModule { }
