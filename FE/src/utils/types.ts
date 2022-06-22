import React from 'react';

// T는 인터페이스
// T에 선언된 타입을 K에 오버라이드 (&연산자라 제거하는 과정이 필요)

export type Combine<T, K> = T & Omit<K, keyof T>;

// K는 인터페이스, 필수로 들어가야하기 때문에 unknown
// T 엘리먼트 Props중에 K에 선언된 Props를 오버라이딩
export type CombineElementProps<
  T extends React.ElementType,
  K = unknown,
> = Combine<K, React.ComponentPropsWithoutRef<T>>;

// T 엘리먼트 Props중에 K에 선언된 Props를 오버라이딩 한 후, as Props를 추가함.
export type OverridableProps<T extends React.ElementType, K = unknown> = {
  as?: T;
} & CombineElementProps<T, K>;
