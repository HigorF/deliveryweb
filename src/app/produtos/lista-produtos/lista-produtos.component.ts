import { ProdutosService } from './../shared/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private toastr: ToastrService) { }
  produtos: Observable< any[]>;

  ngOnInit() {
    this .produtos = this .produtosService.getAll();
  }
  remover(key: string)  {
    this.produtosService.remove(key)
      .catch((mensagem: string) =>{
        this.toastr.error(mensagem);
      });
    }
  }
