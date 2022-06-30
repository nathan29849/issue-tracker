import React, {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from 'react';

import { Label } from '@type/label';

type LabelPanelState = Array<{ label: Label; selected: boolean }>;

type LabelPanelAction =
  | { type: 'INIT_PANEL'; payload: { labels: Label[] } }
  | { type: 'SELECT_LABEL'; payload: { labelId: number } }
  | { type: 'REPLACE_LABEL'; payload: { labelId: number } };
type LabelPanelDispatch = React.Dispatch<LabelPanelAction>;

const initialState: LabelPanelState = [];

const LabelPanelContext = createContext<LabelPanelState | null>(null);

const LabelPanelDispatchContext = createContext<LabelPanelDispatch | null>(
  null,
);

const labelPanelReducer = (
  state: LabelPanelState,
  action: LabelPanelAction,
) => {
  switch (action.type) {
    case 'INIT_PANEL': {
      const { labels } = action.payload;
      if (!labels) {
        return state;
      }

      return labels.map(label => ({ label, selected: false }));
    }

    // 다중 선택 가능할때 사용.
    case 'SELECT_LABEL': {
      const { labelId } = action.payload;

      return state.map(element =>
        element.label.id === labelId
          ? { label: element.label, selected: !element.selected }
          : element,
      );
    }

    // 다중 선택 불가능할때 사용.
    case 'REPLACE_LABEL': {
      const { labelId } = action.payload;

      return state.map(element =>
        element.label.id === labelId
          ? { label: element.label, selected: !element.selected }
          : { label: element.label, selected: false },
      );
    }

    default: {
      return state;
    }
  }
};

// action creator
const initPanelAction = (
  labels: Label[],
): { type: 'INIT_PANEL'; payload: { labels: Label[] } } => ({
  type: 'INIT_PANEL',
  payload: { labels },
});

const selectLabelAction = (
  labelId: number,
): { type: 'SELECT_LABEL'; payload: { labelId: number } } => ({
  type: 'SELECT_LABEL',
  payload: { labelId },
});

const replaceLabelAction = (
  labelId: number,
): { type: 'REPLACE_LABEL'; payload: { labelId: number } } => ({
  type: 'REPLACE_LABEL',
  payload: { labelId },
});

export const LabelPanelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(labelPanelReducer, initialState);

  const memorizedState = useMemo(() => state, [state]);

  return (
    <LabelPanelDispatchContext.Provider value={dispatch}>
      <LabelPanelContext.Provider value={memorizedState}>
        {children}
      </LabelPanelContext.Provider>
    </LabelPanelDispatchContext.Provider>
  );
};

export const useLabel = () => {
  const state = useContext(LabelPanelContext);
  const dispatch = useContext(LabelPanelDispatchContext);

  if (state === null || dispatch === null) {
    throw Error('Label Panel Provider Or Label Panel Dispatch Provider Error');
  }

  const initPanel = useCallback((labels: Label[] = []) => {
    dispatch(initPanelAction(labels));
  }, []);

  const selectLabel = useCallback((labelId: number) => {
    dispatch(selectLabelAction(labelId));
  }, []);

  const replaceLabel = useCallback((labelId: number) => {
    dispatch(replaceLabelAction(labelId));
  }, []);

  return { state, initPanel, selectLabel, replaceLabel };
};

export const useLabelState = () => {
  const state = useContext(LabelPanelContext);

  if (state === null) {
    throw Error('Label Panel Provider Error');
  }

  return state;
};

export const useSetLabelState = () => {
  const dispatch = useContext(LabelPanelDispatchContext);
  if (dispatch === null) {
    throw Error('Label Panel Dispatch Provider Error');
  }

  const initPanel = useCallback((labels: Label[] = []) => {
    dispatch(initPanelAction(labels));
  }, []);

  const selectLabel = useCallback((labelId: number) => {
    dispatch(selectLabelAction(labelId));
  }, []);

  const replaceLabel = useCallback((labelId: number) => {
    dispatch(replaceLabelAction(labelId));
  }, []);

  return { initPanel, selectLabel, replaceLabel };
};

export const useSelectedLabel = () => {
  const state = useContext(LabelPanelContext);

  if (state === null) {
    throw Error('Label Panel Provider Error');
  }

  return state.filter(({ selected }) => selected);
};

export const useSelectedLabelId = () => {
  const state = useContext(LabelPanelContext);

  if (state === null) {
    throw Error('Label Panel Provider Error');
  }

  return state
    .filter(({ selected }) => selected)
    .map(({ label: { id } }) => id);
};
