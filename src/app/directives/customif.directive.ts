import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomifDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    //TemplateRef ve ViewContainerRef parametrelerini inject ettiğimiz için bu directive, structural directive özelliği gösterecektir.
  }

  @Input() set appCustomif(value: boolean) {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef); //Eğer true ise, HTML nesnesini DOM nesnesine ekle (Göster)
    }
    else {
      this.viewContainerRef.clear(); //Eğer false ise, HTML nesnesini DOM'da gösterme
    }
  }
}
