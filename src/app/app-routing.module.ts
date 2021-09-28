import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyComponent } from "./pages/body/body.component";
import { HeaderComponent } from "./pages/header/header.component";

const routes: Routes = [
  {
    path: "",
    component: BodyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
