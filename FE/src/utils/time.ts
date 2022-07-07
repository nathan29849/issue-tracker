const SEC = 1;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

const JUST_A_MOMENT_AGO = '방금 전';
const N_MINUTE_AGO = (N: number) => `${Math.floor(N)}분 전`;
const N_HOUR_AGO = (N: number) => `${Math.floor(N)}시간 전`;
const N_DAY_AGO = (N: number) => `${Math.floor(N)}일 전`;

export const getTimeDiffFromNow = (targetDate: Date): string => {
  // timeDiff = 초 단위 시간
  const timeDiff = (Date.now() - targetDate.getTime()) / 1000;

  if (timeDiff < MIN) {
    return JUST_A_MOMENT_AGO;
  }

  if (timeDiff < HOUR) {
    return N_MINUTE_AGO(timeDiff / MIN);
  }

  if (timeDiff < DAY) {
    return N_HOUR_AGO(timeDiff / HOUR);
  }

  return N_DAY_AGO(timeDiff / DAY);
};
