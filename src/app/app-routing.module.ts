import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ManageComponent } from "./components/manage/manage.component";
import { TimelineComponent } from "./components/timeline/timeline.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'Manage',
        component: ManageComponent
    },
    {
        path: 'Buy',
        component: TimelineComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
