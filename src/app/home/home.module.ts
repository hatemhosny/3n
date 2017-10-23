import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule } from '@nebular/theme';

// app
import { HomeComponent } from './components/home/home.component';
import { SHARED_MODULES } from './home.common';

@NgModule({
    imports: [
        NbLayoutModule,
        NbSidebarModule,
        NbCardModule,
        ...SHARED_MODULES
    ],
    declarations: [HomeComponent],
    providers: [NbSidebarService],
})
export class HomeModule {

    constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) {
            throw new Error('HomeModule already loaded; Import in root module only.');
        }
    }
}
