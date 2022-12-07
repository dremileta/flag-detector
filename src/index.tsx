import React from 'react';
import { createRoot } from 'react-dom/client';

import { Layout } from './layout/layout';
import { Main } from './Main';
import { getCountriesFromRaw } from './utils/getCountriesFromRaw';

/** Render in root */
const container = document.getElementById("root");

if (!container) {
  throw new Error("No container to render");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Layout>
      <Main countries={getCountriesFromRaw()} />
    </Layout>
  </React.StrictMode>
);
