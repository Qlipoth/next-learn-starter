import Head from 'next/head'
import '../styles/main.scss';
import {ThemeNames} from '../theming';
import * as React from "react";
import _ from "lodash";
import {AppThemeContext} from './themeContext';
import RadioGroup from "./RadioGroup";
import Navigation from "./Navigation";

export default function Layout({
  children,
  home,
  title = 'Home page'
}: {
  children: React.ReactNode
  home?: boolean,
  title: string,
}) {

  const themeNames = React.useMemo(() => {
    console.log(ThemeNames);
    return _.map(ThemeNames, (themeName, index) => { return {'id': index, 'title': themeName}; });
  }, [ThemeNames]);

  const navLinks = [
      {
          link: '/',
          title: 'Главная',
          active: true,
      },
      {
          link: '/partners',
          title: 'Партнеры',
          active: true,
      },
      {
          link: '/about',
          title: 'О нас',
          active: true,
      },
  ];

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
          <Navigation navList={navLinks}></Navigation>
          <AppThemeContext.Consumer>
              {
                  ctx => (
                      <RadioGroup
                          options={themeNames}
                          title="Выберите тему"
                          selected={ctx.themeName}
                          onChange={(e) => { ctx.changeThemeName(ThemeNames[e.target.value]) }}
                      />
                  )
              }
          </AppThemeContext.Consumer>

      </header>
      <main className="container">{children}</main>
    </div>
  )
}
