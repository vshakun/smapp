import { eventsService } from '../../infra/eventsService';
import { AppThDispatch } from '../../types';

export const SET_NETWORK_DEFINITIONS = 'SET_NETWORK_DEFINITIONS';
export const SET_CURRENT_LAYER = 'SET_CURRENT_LAYER';
export const SET_STATE_ROOT_HASH = 'SET_STATE_ROOT_HASH';

export const getNetworkDefinitions = () => async (dispatch: AppThDispatch) => {
  const definitions = await eventsService.getNetworkDefinitions();
  dispatch({ type: SET_NETWORK_DEFINITIONS, payload: { definitions } });
};

export const getCurrentLayer = () => async (dispatch: AppThDispatch) => {
  const { currentLayer, error } = await eventsService.getCurrentLayer().catch(() => ({ currentLayer: 0, error: null }));
  if (!error) {
    dispatch({ type: SET_CURRENT_LAYER, payload: { currentLayer } });
  }
};

export const getGlobalStateHash = () => async (dispatch: AppThDispatch) => {
  const { rootHash, error } = await eventsService.getGlobalStateHash().catch(() => ({ rootHash: '', error: null }));
  if (!error) {
    dispatch({ type: SET_STATE_ROOT_HASH, payload: { rootHash } });
  }
};
