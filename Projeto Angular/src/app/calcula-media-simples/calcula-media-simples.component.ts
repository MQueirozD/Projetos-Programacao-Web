import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcula-media-simples',
  templateUrl: './calcula-media-simples.component.html',
  styleUrls: ['./calcula-media-simples.component.css']
})
export class CalculaMediaSimplesComponent implements OnInit {
  ac1: number;
  ac2: number;
  ag: number;
  af: number;
  resultado: number;
  alunoResultado: String;
  resultadoAC1: number;
  resultadoAC2 : number;
  resultadoAG : number;
  resultadoAF : number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.ac1 = this.route.snapshot.params['ac1'] ?
    //   parseFloat(this.route.snapshot.params['ac1']) : 0;

    // this.ac2 = this.route.snapshot.params['ac2'] ?
    //   parseFloat(this.route.snapshot.params['ac2']) : 0;

    // this.ag = this.route.snapshot.params['ag'] ?
    //   parseFloat(this.route.snapshot.params['ag']) : 0;

    // this.af = this.route.snapshot.params['af'] ?
    //   parseFloat(this.route.snapshot.params['af']) : 0;

  }
  calcular(){
    // (AC1 * 0,15) + (AC2 *0,30) + (AG * 0,10) + (AF * 0,45)
    this.resultado = ((this.ac1 *0.15) + (this.ac2 *0.30) + (this.ag *0.10) + (this.af *0.45));

    this.resultadoAC1 = (this.ac1 *0.15);
    this.resultadoAC2 = (this.ac2 *0.30);
    this.resultadoAG = (this.ag *0.10);
    this.resultadoAF = (this.af *0.45);
    
    // if (this.resultado >= 5)
    //   this.alunoResultado = ('Aprovado!!');
    if(this.resultado >= 5){
     this.alunoResultado = ('Aluno Aprovado!!')
      }
      else{
        this.alunoResultado = ('Aluno Reprovado!!')
      }
    

  }
}
