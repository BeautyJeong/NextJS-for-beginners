# NextJS-for-beginners
- 노마드 코더 강의 수강: [NextJS 시작하기](https://nomadcoders.co/nextjs-fundamentals)
  
## [NextJS는  React의 프레임워크]
### 라이브러리와 프레임워크의 주요 차이점
- 라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)입니다.
- 라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있습니다.
- 그러나 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출합니다.

### 라이브러리
- 사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림

### 프레임워크
- 파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름

## [NextJS는 Hydration]
### Hydration: SSR + CSR의 조합
- 사용자에게 빠른 초기 로딩 속도와 함께 동적인 기능을 제공
- SEO, 검색엔진, 사용자에게 좋음
- ex) 프론트엔드 안에서 react.js를 실행

### React 렌더링 순서
- root html (빈 화면) → react.js 로딩 → 초기 화면 출력 및 스크립트 동작
- 참고: CSR(Client Side Rendering)테스트
  - [순수 react 앱 사이트](https://nomadcoders.github.io/react-masterclass/)에서 개발자 도구 -> Network -> Slow 3G로 바꾸고, Disable cache를 클릭, 새로고침하면 테스트해 볼 수 있음
  - 자바스크립트 비활성화하기: 크롬 설정에서 보안 및 개인정보 보호-사이트 및 방패 설정-자바스크립트-자바스크립트 비활성화

### Next 렌더링 순서
- pre-render 된 정적 페이지 초기 화면 html (스크립트 동작x) → react.js 로딩 → 동적 초기 화면 렌더링 완료 (스크립트 동작o)