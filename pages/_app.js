import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { Router } from "next/router";
import nProgress from "nprogress";
import { CacheProvider } from "@emotion/react";
import { appWithTranslation } from "next-i18next";
import MuiTheme from "@/theme/MuiTheme";
import OpenGraphTags from "@/utils/OpenGraphTags";
import { AppProvider } from "@/helpers/contexts/AppContext";
import SettingsProvider from "@/helpers/contexts/SettingContext";
import createEmotionCache from "@/createEmotionCache";
import "nprogress/nprogress.css";
import SnackbarProvider from "@/components/SnackbarProvider";
import "simplebar-react/dist/simplebar.min.css";
import "@/utils/__server__/";
import { wordingWeb } from "@/utils/constants/constants";

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
// small change
nProgress.configure({
  showSpinner: false,
});

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="React Next.js ecommerce template. Build SEO friendly Online store, delivery app and Multivendor store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <OpenGraphTags />
        <title>{wordingWeb.title}</title>
      </Head>

      <SessionProvider session={Session}>
        <SettingsProvider>
          <AppProvider>
            <MuiTheme>
              <SnackbarProvider>
                {getLayout(<Component {...pageProps} />)}
              </SnackbarProvider>
            </MuiTheme>
          </AppProvider>
        </SettingsProvider>
      </SessionProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(App);
