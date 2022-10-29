import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  @Input() num1: number = 3;
  @Output() num1Change = new EventEmitter<number>();
  inativo: boolean = false;
  estiloBotao: string = "btn btn-primary"

  constructor() { }

  ngOnInit(): void {
  }
  mudarValorNum1() {
    this.num1 = this.num1 * 2;
    this.num1Change.emit(this.num1);
  }

}
