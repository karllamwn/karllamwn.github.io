import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { About } from "../about";
import { Academic, Professional, Competition } from "../category";
import { ContactUs } from "../contact";

export const SinglePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <main className="sheet single-page">
        <About />
        <Academic />
        <Competition />
        <Professional />
        <ContactUs />
      </main>
    </HelmetProvider>
  );
};
