import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html'
})
export class AgregarCitaComponent implements OnInit {

  fechaMinimaParaSolicitar: { year: number, month: number, day: number };
  fechasDeshabilitadas: boolean = false;
  markDisabled;

  constructor(private calendar: NgbCalendar) {
    this.fechaMinimaParaSolicitar = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() + 1
    };
    this.diasNoHabiles();
  }

  ngOnInit(): void {
  }

  diasNoHabiles() {
    if (this.fechasDeshabilitadas) {
      this.fechasDeshabilitadas = false;
      this.markDisabled = (date: NgbDate) => { return false };
    } else {
      this.fechasDeshabilitadas = true;
      this.markDisabled = (date: NgbDate) => { return this.calendar.getWeekday(date) === 7 };
    }
  }


}
