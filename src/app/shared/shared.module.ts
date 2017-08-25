import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdSidenavModule  } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        [MdButtonModule, MdCheckboxModule],
        RouterModule,
         MdToolbarModule,
          MdIconModule ,
          MdSidenavModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AsideComponent
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
