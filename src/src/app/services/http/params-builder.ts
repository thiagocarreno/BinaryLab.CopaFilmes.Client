import { HttpParams } from '@angular/common/http';

export class ParamsBuilder {
    parametros: HttpParams = new HttpParams();

    static initialize(): ParamsBuilder {
        return new ParamsBuilder();
    }

    public static buildRouteParams(parameters: any[]): string {
        let routeParams = '';
        for (const parameter of parameters) {
            routeParams += '/';

            if (parameter !== undefined && parameter !== null) {
                routeParams += parameter;
            } else {
                routeParams += ' ';
            }
        }

        return routeParams;
    }

    addData(data: Date): ParamsBuilder {
        if (data !== undefined && data !== null) {
            this.parametros = this.parametros.append('data', data.toISOString());
        }
        return this;
    }

    addLinha(idLinha: number): ParamsBuilder {
        if (idLinha !== undefined && idLinha !== null) {
            this.parametros = this.parametros.append('idLinha', idLinha.toString());
        }
        return this;
    }

    addTurno(idTurno: number): ParamsBuilder {
        if (idTurno !== undefined && idTurno !== null) {
            this.parametros = this.parametros.append('idTurno', idTurno.toString());
        }
        return this;
    }

    addAno(ano: number): ParamsBuilder {
        if (ano !== undefined && ano !== null) {
            this.parametros = this.parametros.append('ano', ano.toString());
        }
        return this;
    }

    addCausador(causador: number): ParamsBuilder {
        if (causador !== undefined && causador !== null) {
            this.parametros = this.parametros.append('idCausador', causador.toString());
        }
        return this;
    }

    builder(): HttpParams {
        return this.parametros;
    }
}
