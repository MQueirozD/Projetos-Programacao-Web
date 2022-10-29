import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice-de-seguro',
  templateUrl: './apolice-de-seguro.component.html',
  styleUrls: ['./apolice-de-seguro.component.css']
})
export class ApoliceDeSeguroComponent implements OnInit {

  sexo: string;
  mulher: String;
  homem: String;
  idade: number;
  nomeSegurado: String;
  valorAutomovel : number;

  constructor() { }

  ngOnInit(): void {
  }
//   Mediante a regra abaixo calcule e exiba o valor da apólice de seguro:
// Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
// Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
// Se sexo for feminino: Valor da apólice = 8% do valor do automóvel



calcular(){

  // if(this.sexo = ("mulher")) {
  //   alert('Mulher!!') 
  // }
  // else if (this.sexo = ("Homem")){
  //   alert('Homem!')
  // }
  // else{
  //   alert("Selecione um!!")
  // }

  // alert(this.valorAutomovel)

}

}