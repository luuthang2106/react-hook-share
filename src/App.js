import React, { useState, useEffect } from 'react'
import './App.css';
import { useCount } from './UseContextTest';

export function UseStateExample() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [myMultiplier, setMyMultiplier] = useState(() => x => 3 * x);
  console.log('render')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{myMultiplier(3)}</p>
      <button onClick={() => setMyMultiplier(() => x => 4 * x)}>
        Click me
      </button>

      <p>You clicked {count}{count1} times</p>
      <button onClick={() => {
        setCount(count + 1)
        setCount1(count1 + 1)
      }}>
        Click me 2
      </button>
    </div>
  );
}
export function UseEffectEx() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  useEffect(() => {
    alert("run effect")
  }, [count, count1]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount1(count1 + 1)}>
        Click me
      </button>
    </div>
  )
}
export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export function RerenderExp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Child countParent={count} />
    </>
  )
}
function Child({ countParent }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{countParent}</p>
      <p>{count}</p>
      <div><button onClick={() => setCount(count + 1)}>
        Click me
      </button></div>
    </div>
  )
}
export function UseEffectIntervalParent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {
        count === 1 && <UseEffectInterval />
      }
      {
        count === 2 && <div>aaaaa</div>
      }
      <div>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  )
}
function UseEffectInterval() {
  useEffect(() => {
    const inter = setInterval(() => {
      alert('huhu')
    }, 3000);
    return () => clearInterval(inter)
  }, [])
  return (
    <div>interval</div>
  )
}

export function ConsumeCount1() {
  const { count, setCount } = useCount()
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
    </div>
  )
}
export function ConsumeCount2() {
  const { count, setCount } = useCount()
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
    </div>
  )
}
export function NoConsumeCount() {
  console.log("render no consume")
  return (
    <div>
      <p>nononono</p>
    </div>
  )
}