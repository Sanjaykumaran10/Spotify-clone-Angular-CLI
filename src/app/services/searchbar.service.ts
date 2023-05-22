import{ Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchBarService{
    public isSearchVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isHomeVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    public isFindVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isPlayVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}