import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asignacion-chofer',
  templateUrl: './asignacion-chofer.component.html',
  styleUrls: ['./asignacion-chofer.component.css']
})
export class AsignacionChoferComponent implements OnInit {
  formAsignacionChofer!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formAsignacionChofer = this.builder.group({
      Chofer: ['', [Validators.required]],
    });
  }

  validaChofer() {
    return (
      this.formAsignacionChofer.get('Chofer')?.valid ||
      this.formAsignacionChofer.get('Chofer')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formAsignacionChofer);
  }

  ejecutar() {}

  limpiar() {}
}
