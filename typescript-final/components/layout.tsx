import Head from 'next/head'
import '../styles/main.scss';
import {ThemeNames} from '../theming';
import * as React from "react";
import _ from "lodash";
import {AppThemeContext} from './themeContext';
import RadioGroup from "./RadioGroup";

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {

  const themeNames = React.useMemo(() => {
    console.log(ThemeNames);
    return _.map(ThemeNames, (themeName, index) => { return {'id': index, 'title': themeName}; });
  }, [ThemeNames]);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
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
