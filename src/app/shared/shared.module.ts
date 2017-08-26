import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdCardModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        BrowserAnimationsModule,
        [MdButtonModule, MdCheckboxModule],
         MdToolbarModule,
          MdIconModule ,
          MdSidenavModule,
          MdCardModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AsideComponent,
        ContactComponent
        ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        AsideComponent,
        ContactComponent
],
    providers: [],
})
export class SharedModule { }
