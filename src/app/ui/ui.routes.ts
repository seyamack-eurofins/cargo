import { Routes } from '@angular/router';

import { ControlsComponent } from './controls/controls.component';
import { ContainersComponent } from './containers/containers.component';
import { DataComponent } from './data/data.component';

export const UI_ROUTES: Routes = [
    { path: 'controls', component: ControlsComponent },
    { path: 'containers', component: ContainersComponent },
    { path: 'data', component: DataComponent }
]