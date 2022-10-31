import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apolice-de-seguro',
  templateUrl: './apolice-de-seguro.component.html',
  styleUrls: ['./apolice-de-seguro.component.css']
})
export class ApoliceDeSeguroComponent implements OnInit {

  sexo: string;
  idade: number;
  nomeSegurado: String;
  valorAutomovel : number;
  resutado: number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nomeSegurado = this.route.snapshot.params['nomeSegurado'] ?? "";
    this.sexo = this.route.snapshot.params['sexo'] ?? "";
    this.idade = this.route.snapshot.params['idade'] ?? "";
    this.valorAutomovel = this.route.snapshot.params['valorAutomovel'] ?? "";
  }
//   Mediante a regra abaixo calcule e exiba o valor da apólice de seguro:
// Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
// Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
// Se sexo for feminino: Valor da apólice = 8% do valor do automóvel



calcular(){
  if (this.nomeSegurado == "" || this.sexo == "" || this.idade == null || this.valorAutomovel == null) {
    alert("Os campos não podem retornar vazios!");
  }
  else {
    if (this.sexo == "M" && this.idade <= 25) {
      this.resutado = ((this.valorAutomovel * 15) / 100);
    }
    else if (this.sexo == "M" && this.idade > 25) {
      this.resutado = ((this.valorAutomovel * 10) / 100);
    }
    else {
      this.resutado = ((this.valorAutomovel * 8) / 100);
    }
  }

}

}