import { Subject, Observable } from 'rxjs';

export class ComponentLifetime {
    private _componentDestruction$ = new Subject<void>();

    isDestroyed$ = this._componentDestruction$.asObservable();

    constructor() { }

    onDestroy() {
        this._componentDestruction$.next();
    }
}