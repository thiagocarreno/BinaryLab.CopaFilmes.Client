import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  baseUrlApi: '',
  Filme: 'filme',
  headers: { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'api-version': '1'
    }) }
};
