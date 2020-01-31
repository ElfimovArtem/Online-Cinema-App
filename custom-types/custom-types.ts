import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

declare global {
  interface ReduxAction {
    type: string;
    payload?: any;
  }

  type ReduxDispatch = ThunkDispatch<any, undefined, AnyAction>;
}
