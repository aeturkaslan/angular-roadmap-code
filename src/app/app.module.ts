import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { ParentComponent } from './component_communication/parent_to_child/parent/parent.component';
import { ChildComponent } from './component_communication/parent_to_child/child/child.component';
import { Parent2Component } from './component_communication/child_to_parent/parent2/parent2.component';
import { Child2Component } from './component_communication/child_to_parent/child2/child2.component';
import { Parent3Component } from './component_communication/child_to_child/parent3/parent3.component';
import { Child3aComponent } from './component_communication/child_to_child/child3a/child3a.component';
import { Child3bComponent } from './component_communication/child_to_child/child3b/child3b.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    BindingComponent,
    DirectiveComponent,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3aComponent,
    Child3bComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
