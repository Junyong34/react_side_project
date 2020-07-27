# start React

## react install
```
yarn add react react-dom react-prop-types react-router-dom semantic-ui-react
```

## webpack, babel
```
 yarn add babel-core babel-loader babel-preset-env babel-preset-react
 babel-preset-stage-1 css-loader style-loader
 html-webpack-plugin webpack webpack-dev-server webpack-cli -D
```

```
react: 리액트
react-dom: 브라우저 DOM 메서드를 제공한다.
react-prop-types: React props 타입을 체크한다.
react-router-dom: Provides routing capabilities to React for the browser
semantic-ui-react: CSS 프레임워크
babel-core: Babel 핵심 의존성 라이브러리이다. Babel(바벨)은 자바스크립트 ES6를 ES5로 컴파일하여 현재 브라우저가 이해할 수 있도록 변환하는 도구다.
babel-loader: babel과 webpack을 사용해 자바스크립트 파일을 컴파일한다.
babel-preset-env: ES2015, ES2016, ES2017 버전을 지정하지 않아도 바벨이 자동으로 탐지해 컴파일한다.
babel-preset-react: 리액트를 사용한다는 것을 바벨에게 말해준다.
babel-preset-stage-1: TC39에서 검토 중인 Stage 1 스펙을 사용한다. (stage-0부터 3까지는 EcmaScript 스펙 중에서 비공식 실험적인 기술들을 사용할 수 있게 해주는 프리셋으로 Stage 2와 Stage 3도 사용 가능하다.)
css-loader: import/require()처럼 @import와 url() 해석한다.
html-webpack-plugin: 애플리케이션을위한 HTML 파일을 생성하거나 템플릿을 제공한다.
style-loader: <style> 태그를 삽입하여 CSS에 DOM을 추가한다.
webpack: 모듈 번들러(Module bundler)
webpack-cli: Webpack 4.0.1 이상에서 필요한 커맨드라인 인터페이스다.
webpack-dev-server: 애플리케이션 개발 서버를 제공한다.
"extract-text-webpack-plugin": "^4.0.0-beta.0", // 별도 css파일로 뺴낸다.
```
```
npx eslint -init
초기 셋팅후

yarn add -D @types/react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks
prettier eslint-config-airbnb
```
