import { Component, OnInit } from '@angular/core';

import { UiService } from '../../../services/ui.service';
import { EIcon } from '../../../interfaces/alert_icon.interface';

@Component({
  selector: 'app-rolefrm',
  templateUrl: './rolefrm.component.html',
  styleUrls: ['./rolefrm.component.scss']
})
export class RolefrmComponent implements OnInit {

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
              'Rol creado exitosamente',
              EIcon.success
            );
          }, 2000);
        }
      });
  }

}
