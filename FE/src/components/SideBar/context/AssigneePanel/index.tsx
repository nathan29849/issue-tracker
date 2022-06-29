import React, {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from 'react';

import { User } from '@type/user';

type AssigneePanelState = Array<{ user: User; selected: boolean }>;

type AssigneePanelAction =
  | { type: 'INIT_PANEL'; payload: { users: User[] } }
  | { type: 'SELECT_ASSIGNEE'; payload: { userId: string } }
  | { type: 'REPLACE_ASSIGNEE'; payload: { userId: string } };
type AssigneePanelDispatch = React.Dispatch<AssigneePanelAction>;

const initialState: AssigneePanelState = [];

const AssigneePanelContext = createContext<AssigneePanelState | null>(null);

const AssigneePanelDispatchContext =
  createContext<AssigneePanelDispatch | null>(null);

const assigneePanelReducer = (
  state: AssigneePanelState,
  action: AssigneePanelAction,
) => {
  switch (action.type) {
    case 'INIT_PANEL': {
      const { users } = action.payload;
      if (!users) {
        return state;
      }

      return users.map(user => ({ user, selected: false }));
    }

    // 다중 선택 가능할때 사용.
    case 'SELECT_ASSIGNEE': {
      const { userId } = action.payload;

      return state.map(element =>
        element.user.userId === userId
          ? { user: element.user, selected: !element.selected }
          : element,
      );
    }

    // 다중 선택 불가능할때 사용.
    case 'REPLACE_ASSIGNEE': {
      const { userId } = action.payload;

      return state.map(element =>
        element.user.userId === userId
          ? { user: element.user, selected: !element.selected }
          : { user: element.user, selected: false },
      );
    }

    default: {
      return state;
    }
  }
};

// action creator
const initPanelAction = (
  users: User[],
): { type: 'INIT_PANEL'; payload: { users: User[] } } => ({
  type: 'INIT_PANEL',
  payload: { users },
});

const selectAssigneeAction = (
  userId: string,
): { type: 'SELECT_ASSIGNEE'; payload: { userId: string } } => ({
  type: 'SELECT_ASSIGNEE',
  payload: { userId },
});

const replaceAssigneeAction = (
  userId: string,
): { type: 'REPLACE_ASSIGNEE'; payload: { userId: string } } => ({
  type: 'REPLACE_ASSIGNEE',
  payload: { userId },
});

export const AssigneePanelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(assigneePanelReducer, initialState);

  const memorizedState = useMemo(() => state, [state]);

  return (
    <AssigneePanelDispatchContext.Provider value={dispatch}>
      <AssigneePanelContext.Provider value={memorizedState}>
        {children}
      </AssigneePanelContext.Provider>
    </AssigneePanelDispatchContext.Provider>
  );
};

export const useAssignee = () => {
  const state = useContext(AssigneePanelContext);
  const dispatch = useContext(AssigneePanelDispatchContext);

  if (state === null || dispatch === null) {
    throw Error(
      'Assignee Panel Provider Or Assignee Panel Dispatch Provider Error',
    );
  }

  const initPanel = useCallback((users: User[] = []) => {
    dispatch(initPanelAction(users));
  }, []);

  const selectAssignee = useCallback((userId: string) => {
    dispatch(selectAssigneeAction(userId));
  }, []);

  const replaceAssignee = useCallback((userId: string) => {
    dispatch(replaceAssigneeAction(userId));
  }, []);

  return { state, initPanel, selectAssignee, replaceAssignee };
};

export const useAssigneeState = () => {
  const state = useContext(AssigneePanelContext);

  if (state === null) {
    throw Error('Assignee Panel Provider Error');
  }

  return state;
};

export const useSetAssigneeState = () => {
  const dispatch = useContext(AssigneePanelDispatchContext);
  if (dispatch === null) {
    throw Error('Assignee Panel Dispatch Provider Error');
  }

  const initPanel = useCallback((users: User[] = []) => {
    dispatch(initPanelAction(users));
  }, []);

  const selectAssignee = useCallback((userId: string) => {
    dispatch(selectAssigneeAction(userId));
  }, []);

  const replaceAssignee = useCallback((userId: string) => {
    dispatch(replaceAssigneeAction(userId));
  }, []);

  return { initPanel, selectAssignee, replaceAssignee };
};
