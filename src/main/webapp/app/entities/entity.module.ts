import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AnshRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { AnshCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { AnshLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { AnshDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { AnshTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { AnshEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { AnshJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { AnshJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AnshRegionMySuffixModule,
        AnshCountryMySuffixModule,
        AnshLocationMySuffixModule,
        AnshDepartmentMySuffixModule,
        AnshTaskMySuffixModule,
        AnshEmployeeMySuffixModule,
        AnshJobMySuffixModule,
        AnshJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnshEntityModule {}
