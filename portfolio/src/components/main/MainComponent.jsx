import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link } from "react-router-dom";
import { decrement, increment } from '../../redux/slices/main/mainSlice';

function MainComponent() {
  const count = useSelector((state) => state.mainSlice.value)
  const dispatch = useDispatch()

  return (
    <div>
      <p>메인페이지</p>
      <p>
      <Link to="/introduction">소개</Link>
      </p>
      <p>
      <Link to="/profile">약력</Link>
      </p>
      <p>
      <Link to="/techstack">기술 스택</Link>
      </p>
      <p>
      <Link to="/project">프로젝트</Link>
      </p>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      <Outlet />
    </div>
  );
}

export default MainComponent;
