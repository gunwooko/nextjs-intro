# Nextjs Intro

## Setup

```
npx create-next-app@latest --typescript

or

yarn create next-app --typescript
```

## Pages

페이지 폴더에는 말 그래도 페이지 컴포넌트가 작성된다. 몇가지 특징-규칙이 있는데:

- 파일 명이 url로 액세스되는 이름이 된다.
- 해당 파일은 반드시 `export default`로 해줘야한다.
- `index` 네이밍은 홈(root)으로 기록된다.
- 404 페이지가 되어 있다.
- Router 기능이 되어 있다.
- `js`, `jsx`든 어떤 파일명으로 끝나도 React를 따로 import하지 않아도 된다.

### Pre-rendering

기존 CRA는 client side render를 하게 된다. 만일 유저의 네트워크 상황이 좋지 않다면, 유저는 브라우저가 JS파일을 모두 읽고 파일을 받고 하는 동안에 흰색 배경만 확인하게 된다. 이는 실질적으로 div 한줄만 받아오기 때문이다.

NextJs에서는 이런 일이 없다. 실질적으로 모든 html파일을 받아오기 때문에, 유저들은 페이지를 열면 바로 우리가 원하는 페이지를 확인할 수 있게된다. 그런 상태에서 react.js파일을 다운받게되고 기존 html과 합쳐지게 된다.

만일 js파일 다운이 느리게 된다면, 유저는 멀쩡한 페이지를 두고도 액션을 취했을 때 작동하지 않는 웹앱을 보게 될 것이다.

## Router

`import Link from 'next/link'`에서 Link 컴포넌트를 가지고 와서 사용하면 된다.
기존 `react-router-dom`과 같은 이름을 사용한다. 한가지 다른점은 class를 주거나 하지 못한다. 그래서 보통 Link로 감싸주고 그 안에 <a/>를 사용해준다.

`import { useRouter } from 'next/router'` [useRouter](https://nextjs.org/docs/api-reference/next/router#router-object) 훅을 사용해서 다양한 기능을 수행할 수 있다.

## Styling in NextJs

1. Using [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
   `[name].module.css` 으로 파일을 만들어서 사용한다.
   className 중복으로 걱정하지 않아고 되는 점은 랜덤하게 변경해준다.

2. Using [styled-jsx](https://github.com/vercel/next.js/tree/canary/examples/with-styled-jsx#styled-jsx-example)
   NextJs에서만 적용되는 방법이다. 이또한 className 중복으로부터 자유로울 수 있다. 해당 컴포넌트 스코프에만 작동이된다.

3. 그외에도 다른 CSS 방법을 적용해볼 수 있다.

## Custom App

Next.js uses the [App component](https://nextjs.org/docs/advanced-features/custom-app) to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

- Persisting layout between page changes
- Keeping state when navigating pages
- Custom error handling using componentDidCatch
- Inject additional data into pages
- Add global CSS

`_app.js`는 모든 페이지에서 NextJs가 각 페이지를 렌더링 하기전에 먼저 확인해서 모든 페이지에 적용시키는 청사진과 같다. global하게 적용되어야 할 스타일이나 컴포넌트를 적용할 수 있다.

```js
// 기본형식:
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```
