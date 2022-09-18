# Pokemon Application

## The idea behind the solution

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including `emotion`, the default style engine in MUI v5, and vercels [SWR](https://swr.vercel.app), a data fetching react hook which plays well with Next.js data fetching strategies.

## Overview

The goal of this project is to be able to navigate the details of the different pokemon by clicking on the list
of pokemon. I used Nextjs client side data fetching strategy to fetch initial data from the pokemon API using SWR. The index page contains the SearchComponent and the MainComponent.The SearchComponent accepts the initial data retruned by SWR as props and allows the user to filter through the various pokemon based on the requestSearch function in the SearchResultsComponent which implements optimized regex search.Every Pokemon will be displayed by the PokemonContainer Component which accepts the name, image, id and abilities of the pokemon. The PokemonContainer comopnent is a link button which redirects the user to the Pokemon details page where further details of the pokemon is displayed. The app also uses Mui CSS query selectors and flexBox to enable responsiveness across different devices. Again, all images are optimised with Nextjs Image component to allow for faster load times and improved ux .Finally ive implemented simple pagination using next/router with Javascript's Array.prototype.slice()

## Improvements?

Moving forward ill like to improve user experience further by changing the data fetching strategy to implement Nextjs getStaticProps and getStaticPaths as this would allow pre-rendering of pages at build time allowing faster load time of the app.
