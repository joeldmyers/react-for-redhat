# React for Red Hat
To expedite setup, this is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses [Ant Design](https://ant.design/) components to expedite design build.

## Getting Started

First, go to cd redhat-users, then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live Demo

You can see the live working version here: [https://react-for-redhat.vercel.app/](https://react-for-redhat.vercel.app/)

## Testing

For testing, first go to cd redhat-users, then type `npm run cypress:open`.  You will see the users test there, which you can run.

## Notes / Next Steps

1. I was a bit confused as to the layout for the address, etc.; it looked a bit messy in the Word doc I saw, so that is something I would want to follow up on.

2. For next steps, I would probably work on setting up custom hooks to get user data.  I would also work on storing this data in state (possibly using Redux) to avoid having to do API calls all the time. 