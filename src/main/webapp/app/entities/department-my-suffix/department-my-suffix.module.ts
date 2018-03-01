import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnshSharedModule } from '../../shared';
import {
    DepartmentMySuffixService,
    DepartmentMySuffixPopupService,
    DepartmentMySuffixComponent,
    DepartmentMySuffixDetailComponent,
    DepartmentMySuffixDialogComponent,
    DepartmentMySuffixPopupComponent,
    DepartmentMySuffixDeletePopupComponent,
    DepartmentMySuffixDeleteDialogComponent,
    departmentRoute,
    departmentPopupRoute,
} from './';

const ENTITY_STATES = [
    ...departmentRoute,
    ...departmentPopupRoute,
];

@NgModule({
    imports: [
        AnshSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DepartmentMySuffixComponent,
        DepartmentMySuffixDetailComponent,
        DepartmentMySuffixDialogComponent,
        DepartmentMySuffixDeleteDialogComponent,
        DepartmentMySuffixPopupComponent,
        DepartmentMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        DepartmentMySuffixComponent,
        DepartmentMySuffixDialogComponent,
        DepartmentMySuffixPopupComponent,
        DepartmentMySuffixDeleteDialogComponent,
        DepartmentMySuffixDeletePopupComponent,
    ],
    providers: [
        DepartmentMySuffixService,
        DepartmentMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnshDepartmentMySuffixModule {}
