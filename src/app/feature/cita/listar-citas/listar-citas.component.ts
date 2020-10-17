import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Cita } from '../cita';
import { CitaService } from '../cita.services';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html'
})
export class ListarCitasComponent implements OnInit {

  listaCitas: Cita[];

  constructor(
    private citaService: CitaService,
    private sweetService: SwalService) { }

  ngOnInit(): void {
    this.citaService.listarCitas().subscribe(
      (data: Cita[]) => this.listaCitas = data,
      (error) => this.sweetService.popUp('Error', error.error.mensaje, 'error')
    );
  }

  mostrarTabla(): boolean {
    return (this.listaCitas === null && this.listaCitas.length === 0);
  }

}
