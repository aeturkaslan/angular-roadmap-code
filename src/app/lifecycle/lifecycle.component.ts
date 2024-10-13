import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `Lifecycle Examples <br>
  <input type="text" [(ngModel)]="data"> <br>
  <ng-content></ng-content> <!--ngAfterContentInit tetiklemesi için-->`
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //ngOnChanges
  @Input() data: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("1- ngOnChanges Tetiklendi");
  }

  //ngOnInit
  ngOnInit(): void {
    console.log("2- ngOnInit Tetiklendi");
  }

  //ngDoCheck
  ngDoCheck(): void {
    console.log("3- ngDoCheck Tetiklendi");
  }

  //ngAfterContentInit
  ngAfterContentInit(): void {
    console.log("4- ngAfterContentInit Tetiklendi");
  }

  //ngAfterContentChecked
  ngAfterContentChecked(): void {
    console.log("5- ngAfterContentChecked Tetiklendi");
  }

  //ngAfterViewInit
  ngAfterViewInit(): void {
    console.log("6- ngAfterViewInit Tetiklendi");
  }

  //ngAfterViewChecked
  ngAfterViewChecked(): void {
    console.log("7- ngAfterViewChecked Tetiklendi");
  }

  //ngOnDestroy
  ngOnDestroy(): void {
    console.log("8- ngOnDestroy Tetiklendi");
  }
}
