
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
export const effects: any = [];

export interface State {
    sharedData: any;

}

export const reducers: ActionReducerMap<State> = {
    sharedData: null
};
