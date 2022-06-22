import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ProductItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const ProductList: ProductItem[] = [
  {
    title: 'Quick Starts',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Get started with the Applitools SDK in your language or framework of choice. Integrate Applitools with over 60 different tools.
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Take your visual testing to the next level with action-packed, intuitive tutorials based on real-world use cases.
      </>
    ),
  },
];

function Product({title, Svg, description}: ProductItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FeatureProduct(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ProductList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
