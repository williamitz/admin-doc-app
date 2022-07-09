import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { EIcon } from 'src/app/interfaces/alert_icon.interface';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-type-docfrm',
  templateUrl: './type-docfrm.component.html',
  styleUrls: ['./type-docfrm.component.scss'],
})
export class TypeDocfrmComponent implements OnInit {
  duration$?: Subscription;

  constructor(private _ui: UiService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._ui
      .onAlertConfirm(
        '¿Está seguro de querer guardar el tipo de documento?',
        '',
        EIcon.warning
      )
      .then((val) => {
        if (val.isConfirmed) {
          this._ui.onShowLoading();
          setTimeout(() => {
            this._ui.onCloseLoading();

            // this._ui.onShowAlert('Guardado con éxito');
            this._ui.onShowAlert(
              'Error, no se puede realizar esta acción',
              EIcon.error
            );
          }, 2000);
        }
      });
  }
}
