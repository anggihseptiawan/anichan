This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, Install the dependencies using npm

```bash
npm install
```

> [!NOTE]
> Rename .env.example file to .env and replace it with the real URL

Second, run the development server:

```bash
# Run using Node
npm run dev

# Build and Run using Docker
docker build -t nextjs-docker .
# Then
docker run -p 3000:3000 nextjs-docker
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run production build in local environment using Node

First, build the project

```bash
npm run build
```

Second, copy necessary files

Running Standalone Next.js app is a bit different, we need to copy the /static dir to the /standalone dir. [https://nextjs.org/docs/pages/api-reference/config/next-config-js/output#automatically-copying-traced-files](more on this)

```bash
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
```

Finally, run the production app

```bash
npm run start
```
