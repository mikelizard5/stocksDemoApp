import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ManageComponent } from "./components/manage/manage.component";
import { MultistepComponent } from "./components/multistep/multistep.component";

const routes: Routes = [
    {
        path: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        component: ManageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
