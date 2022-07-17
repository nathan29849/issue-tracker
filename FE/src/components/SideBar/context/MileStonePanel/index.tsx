import React, {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from 'react';

import { MileStone } from '@type/milestone';

type MileStonePanelState = Array<{ milestone: MileStone; selected: boolean }>;

type MileStonePanelAction =
  | { type: 'INIT_PANEL'; payload: { milestones: MileStone[] } }
  | { type: 'SELECT_MILESTONE'; payload: { milestoneId: number } }
  | { type: 'REPLACE_MILESTONE'; payload: { milestoneId: number } };
type MileStonePanelDispatch = React.Dispatch<MileStonePanelAction>;

const initialState: MileStonePanelState = [];

const MileStonePanelContext = createContext<MileStonePanelState | null>(null);

const MileStonePanelDispatchContext =
  createContext<MileStonePanelDispatch | null>(null);

const milestonePanelReducer = (
  state: MileStonePanelState,
  action: MileStonePanelAction,
) => {
  switch (action.type) {
    case 'INIT_PANEL': {
      const { milestones } = action.payload;
      if (!milestones) {
        return state;
      }

      return milestones.map(milestone => ({ milestone, selected: false }));
    }

    // 다중 선택 가능할때 사용.
    case 'SELECT_MILESTONE': {
      const { milestoneId } = action.payload;

      return state.map((element: any) =>
        element.milestone.id === milestoneId
          ? { milestone: element.milestone, selected: !element.selected }
          : element,
      );
    }

    // 다중 선택 불가능할때 사용.
    case 'REPLACE_MILESTONE': {
      const { milestoneId } = action.payload;

      return state.map((element: any) =>
        element.milestone.id === milestoneId
          ? { milestone: element.milestone, selected: !element.selected }
          : { milestone: element.milestone, selected: false },
      );
    }

    default: {
      return state;
    }
  }
};

// action creator
const initPanelAction = (
  milestones: MileStone[],
): { type: 'INIT_PANEL'; payload: { milestones: MileStone[] } } => ({
  type: 'INIT_PANEL',
  payload: { milestones },
});

const selectMileStoneAction = (
  milestoneId: number,
): { type: 'SELECT_MILESTONE'; payload: { milestoneId: number } } => ({
  type: 'SELECT_MILESTONE',
  payload: { milestoneId },
});

const replaceMileStoneAction = (
  milestoneId: number,
): { type: 'REPLACE_MILESTONE'; payload: { milestoneId: number } } => ({
  type: 'REPLACE_MILESTONE',
  payload: { milestoneId },
});

export const MileStonePanelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(milestonePanelReducer, initialState);

  const memorizedState = useMemo(() => state, [state]);

  return (
    <MileStonePanelDispatchContext.Provider value={dispatch}>
      <MileStonePanelContext.Provider value={memorizedState}>
        {children}
      </MileStonePanelContext.Provider>
    </MileStonePanelDispatchContext.Provider>
  );
};

export const useMileStone = () => {
  const state = useContext(MileStonePanelContext);
  const dispatch = useContext(MileStonePanelDispatchContext);

  if (state === null || dispatch === null) {
    throw Error(
      'MileStone Panel Provider Or MileStone Panel Dispatch Provider Error',
    );
  }

  const initPanel = useCallback(
    (milestones: MileStone[] = []) => {
      dispatch(initPanelAction(milestones));
    },
    [dispatch],
  );

  const selectMileStone = useCallback(
    (milestoneId: number) => {
      dispatch(selectMileStoneAction(milestoneId));
    },
    [dispatch],
  );

  const replaceMileStone = useCallback(
    (milestoneId: number) => {
      dispatch(replaceMileStoneAction(milestoneId));
    },
    [dispatch],
  );

  return { state, initPanel, selectMileStone, replaceMileStone };
};

export const useMileStoneState = () => {
  const state = useContext(MileStonePanelContext);

  if (state === null) {
    throw Error('MileStone Panel Provider Error');
  }

  return state;
};

export const useSetMileStoneState = () => {
  const dispatch = useContext(MileStonePanelDispatchContext);
  if (dispatch === null) {
    throw Error('MileStone Panel Dispatch Provider Error');
  }

  const initPanel = useCallback(
    (milestones: MileStone[] = []) => {
      dispatch(initPanelAction(milestones));
    },
    [dispatch],
  );

  const selectMileStone = useCallback(
    (milestoneId: number) => {
      dispatch(selectMileStoneAction(milestoneId));
    },
    [dispatch],
  );

  const replaceMileStone = useCallback(
    (milestoneId: number) => {
      dispatch(replaceMileStoneAction(milestoneId));
    },
    [dispatch],
  );

  return { initPanel, selectMileStone, replaceMileStone };
};

export const useSelectedMileStone = () => {
  const state = useContext(MileStonePanelContext);

  if (state === null) {
    throw Error('MileStone Panel Provider Error');
  }

  return state.filter(({ selected }) => selected);
};

export const useSelectedMileStoneId = () => {
  const state = useContext(MileStonePanelContext);

  if (state === null) {
    throw Error('MileStone Panel Provider Error');
  }

  return state
    .filter(({ selected }) => selected)
    .map(({ milestone: { id } }: any) => id);
};
