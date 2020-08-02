import Head from 'next/head'
import '../styles/main.scss';
import {ThemeNames} from '../theming';
import * as React from "react";
import _ from "lodash";
import {AppThemeContext} from './themeContext';
import RadioGroup from "./RadioGroup";

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
