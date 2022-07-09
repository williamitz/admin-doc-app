import { EMode } from '../app/interfaces/app_mode.enum';
const MODE = EMode.dev;

export const environment = {
  production: true,
  segurity_server: MODE == EMode.dev ? 'https://acd-api-seguridad.herokuapp.com/v1' : 'http://localhost:3000',
  admin_server: MODE == EMode.dev ? 'https://acd-api-administracion.herokuapp.com/v1' : 'http://localhost:3000',
};
