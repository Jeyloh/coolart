import Head from 'next/head';
import React from 'react';

export default function HtmlHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        content='s0UbJXErF-6v4SOJL4md8m8dx1saFPcjXUzjLLi__2g'
        name='google-site-verification'
      />

      <meta name='description' content='Coolart website' />
      <link rel='icon' href='/favicon.ico' />
      <meta
        content='We create beautiful mural art in public. We deliver colourful visual art to the people.We turn empty spaces in public room into lively, creative spaces that bring people together.'
        name='description'
      />
      <meta content='Homepage' property='og:title' />
      <meta
        content='We create beautiful mural art in public. We deliver colourful visual art to the people.We turn empty spaces in public room into lively, creative spaces that bring people together.'
        property='og:description'
      />
      <meta
        content='https://uploads-ssl.webflow.com/590348c20493323d42c78ab6/5918bbc07c47180f72a698e6_coolart-logo-border.png'
        property='og:image'
      />
      <meta content='Homepage' property='twitter:title' />
      <meta
        content='We create beautiful mural art in public. We deliver colourful visual art to the people.We turn empty spaces in public room into lively, creative spaces that bring people together.'
        property='twitter:description'
      />
      <meta
        content='https://uploads-ssl.webflow.com/590348c20493323d42c78ab6/5918bbc07c47180f72a698e6_coolart-logo-border.png'
        property='twitter:image'
      />
      <meta property='og:type' content='website' />
      <meta content='summary_large_image' name='twitter:card' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta
        content='s0UbJXErF-6v4SOJL4md8m8dx1saFPcjXUzjLLi__2g'
        name='google-site-verification'
      />
      <meta content='Webflow' name='generator' />
      <link
        href='https://uploads-ssl.webflow.com/img/webclip.png'
        rel='apple-touch-icon'
      />

      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap&libraries=&v=weekly`}
        async
      ></script>
    </Head>
  );
}
