import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ManageComponent } from "./components/manage/manage.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'Manage',
        component: ManageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
