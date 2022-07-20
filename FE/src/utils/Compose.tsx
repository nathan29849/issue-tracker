import React from 'react';

interface IComposeProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export default function Compose(props: IComposeProps) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight(
        (acc, Comp) => (
          <Comp>{acc}</Comp>
        ),
        children,
      )}
    </>
  );
}
