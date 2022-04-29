import React, { useState, useEffect, useRef } from "react";

export default function CountUp({ value, inView }) {
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);

  const incrementer = Math.ceil(value * 0.05);

  const updateCounter = () => {
    if (ref.current > value) return;
    const next = Math.ceil(ref.current + incrementer);
    if (next > value) {
      setCounter(`${value}+`);
      return;
    } else {
      setCounter(next);
      ref.current = next;
    }
    console.log(ref.current);
    setTimeout(updateCounter, 50);
  };

  useEffect(() => {
    if (inView) updateCounter();
  }, [inView]);

  return <p style={{ margin: 0 }}>{counter}</p>;
}
