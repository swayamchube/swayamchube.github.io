import { NotesComponent } from "src/app/pages/notes/notes.component";
import { HomeComponent } from "src/app/pages/home/home.component";

export const routeList: any[] = [
    {
        label: '',
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        label: 'Home',
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        label: 'Notes',
        path: 'notes',
        pathMatch: 'full',
        component: NotesComponent 
    },
]

export function cleanRouteList() {
    return routeList;
}