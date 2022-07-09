import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { EIcon } from '../interfaces/alert_icon.interface';

@Injectable({ providedIn: 'root' })
export class UiService {
  constructor() {}

  onShowAlert(title: string, icon = EIcon.success, html = '') {
    Swal.fire({
      icon,
      title,
      html,
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
      // footer: '<a href>Why do I have this issue?</a>'
    });
  }

  onShowAlertTimer(icon: any, title: string, html: string, timer = 4000) {
    Swal.fire({
      icon,
      title,
      html,
      showConfirmButton: false,
      timer,
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
      // footer: '<a href>Why do I have this issue?</a>'
    });
  }

  async onShowAlertTextarea(): Promise<string | null> {
    const { value: text = '', isConfirmed } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Finalizar sorteo',
      inputPlaceholder: 'Ingrese alguna observación aquí...',
      inputAttributes: {
        'aria-label': 'Ingrese alguna observación aquí',
      },
      showCancelButton: true,
      showConfirmButton: true,
    });

    if (isConfirmed) return text || '';
    // if (isDenied) return null;

    return null;
  }

  onShowLoading(html = 'Cargando información') {
    Swal.fire({
      title: 'Espere...',
      html,
      //   timer,
      timerProgressBar: true,
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {},
    }).then((result) => {});
  }

  // 'warning', 'error', 'success', 'info'
  onShowCustomLoading(icon: any, title: string, html: string) {
    Swal.fire({
      icon,
      title,
      html,
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        // clearInterval(timerInterval)
      },
    }).then((result) => {});
  }

  onCloseLoading() {
    Swal.close();
  }

  onShowToast(icon: any, title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      customClass: {
        container: 'toast-padding',
      },
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon,
      title: `<span style="color: #595959;"> ${title}</span`,
    });
  }

  onAlertConfirmDel(
    action = 'eliminar',
    entity: string
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: `¿Está seguro(a) de ${action}: <b>${entity}</b>?`,
      html: 'Verificar desactivar los registros vinculados',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro(a)',
      cancelButtonText: 'No',
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
    });
  }

  onAlertConfirm(
    title: string,
    html = '',
    icon = EIcon.info
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      html,
      icon,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
    });
  }

  onConfirmAlertInput(
    title: string,
    html: string
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      html,
      icon: 'question',
      showCancelButton: true,
      input: 'textarea',
      inputPlaceholder: 'Ingrese alguna observación aquí...',
      confirmButtonText: 'Sí, estoy seguro(a)',
      cancelButtonText: 'No',
      customClass: {
        container: 'swal2-container',
        title: 'swal2-title',
        actions: 'swal2-actions',
        footer: 'swal2-footer',
      },
    });
  }
}
