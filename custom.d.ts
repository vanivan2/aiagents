import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

declare module 'next' {
  export type NextPage<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module 'next/app' {
  type AppPropsWithLayout = AppProps & {
    Component: NextPage;
  };
}

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
    default: ThemedStyledInterface<T>;
  }

  export interface ThemedStyledInterface<T> {
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(component: C): ThemedStyledFunction<C, T>;
  }

  const styled: ThemedStyledInterface<any>;
  export default styled;
}

declare module 'components/*';
declare module 'views/*';
declare module 'env';
declare module 'utils/*';
