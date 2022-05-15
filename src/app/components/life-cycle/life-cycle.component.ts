import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy
  {

    @Input() number = 10;

  constructor() {
    console.log('chamou o construtor');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(): void {
    console.log('chamou 0 on Changes');
  }

  ngOnInit(): void {
    console.log('chamou o Init')
  }
  ngDoCheck(): void {
    console.log('chamou 0 on Chack');
  }
  ngOnAfterContentInit(): void {
    console.log('chamou o After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('chamou o After Content Checked');
  }

  ngAfterViewInit(): void {
    console.log('chamou o After View Init')
  }
  ngAfterViewChecked(): void {
    console.log('chamou o After View Checked');
  }

  ngOnDestroy(): void {
    console.log('chamou o on Destroy');
  }
}

