import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplatedrivenComponent } from './forms/templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './forms/modeldriven/modeldriven.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { ProductComponent } from './dependency_injection/product/product.component';
import { ProductService } from './dependency_injection/services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

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
    Child3bComponent,
    LifecycleComponent,
    TemplatedrivenComponent,
    ModeldrivenComponent,
    ValidationsComponent,
    ProductComponent,
    CreateUserComponent,
    ReadUserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //ProductService  //Default Type Token
    //{provide: ProductService, useClass: ProductService} // Type Token
    //{provide: "productService", useClass: ProductService} //String Token
    //{provide: productServiceIT, useClass: ProductService} //Injection Token (Detay için dokümantasyona bak!)

    //ProductService'den önce HttpClient ile API'a requestte bulunduktan sonra ProductService kullanımı için senaryoda;
    {
      provide: "productService", useFactory: (httpClient: HttpClient) => {

        const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts").
          subscribe({ next: data => console.log(data) });
        return new ProductService(); //instance olarak döndürmeliyiz

      }, deps: [HttpClient]
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
