## Every page is a Server Component, no "use client" directive

I decided to make every page as a Server Component, so it can get the maximal benefits from RSC that Next.js specifically offer, like reduce client-server roundtrip. Pagination and Search feature is a Form submit (Luckily Next.js/React team decide to progressively enhanced HTML Form, like the Remix team did long time ago), by doing that, it also reduce the use of useState, useEffect, etc which sometimes can cause unnecessary performance degradation.

## Optional things I did

- Caching: Note sure if it is applied, but Next.js turn 3 pages (genre, schedule, season) into static, so navigating into that pages feels instant like pulling the data from cache.
- Responsive: Maximize User Experience for making it accesible via web, mobile or tablet.
- Contanerized: So it can be deployed as a Docker app, making it easier to deploy the app anywhere
