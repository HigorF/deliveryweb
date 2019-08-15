import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../shared/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
formProdutos: FormGroup;
key: string;

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private produtosService: ProdutosService,
    private toastr: ToastrService,
    private router: Router
    ) { }
  ngOnInit() {
  }

}
