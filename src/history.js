// history: react-router-dom 설치 시 내부에 있는 모듈
import { createBrowserHistory } from "history";

// 최초 app이 실행 되기 전에 history 객체로 만들 수 있다.
// history객체를 thunk.withExtraArgument에 넣어서 새로운 미들웨어 결과물을 얻고
// history를 꺼내서 쓸 수 있다.
const history = createBrowserHistory();

export default history;
