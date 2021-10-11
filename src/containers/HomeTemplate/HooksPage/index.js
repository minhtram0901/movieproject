import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Child from "./Child";
import DemoUseReducer from "./demoUseReducer";
import CustomHooks from "./custom-hooks";

export default function HooksPage() {
  const preNumber = useRef(0);
  //usestate return về 1 array
  //bóc tách giá trị từ useState
  //tên phần tử đặt tự do
  //number: là 1 giá trị
  //setNumber: là 1 function
  //useState(0): set giá trị default cho number = 0
  const [number, setNumber] = useState(0);
  // cách viết 2:
  // const [state, setState] = useState({
  //     status: true,
  //     userName: "Cybersoft"
  // });

  //===== useEffect
  // thực thi mỗi khi state thay đổi
  useEffect(() => {
    console.log("useEffect");
  });

  //tương đương như DidMount bên class nếu tham số thứ 2 là mảng rỗng
  useEffect(() => {
    console.log("useEffect - tương đương didmount");
  }, []);

  //tương đương như DidUpdate bên class nếu tham số thứ 2 là mảng khác rỗng, xác định dựa vào state chạy lại mỗi khi state thay đổi
  useEffect(() => {
    console.log("useEffect - tương đương didmount");
  }, [number]);

  //tương đương như WillUnmount bên class
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      // tương đương willunmount bên class
      clearInterval(interval);
    };
  }, []);

  const showNumber = () => {
    console.log("show number");
  };

  const showNumberCallback = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const numberUpMemo = useMemo(() => numberUp(), []);
  return (
    <div>
      <h3>Hooks Page</h3>
      <h2>Pre number: {preNumber.current}</h2>
      <h1>Number: {number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
          preNumber.current = number;
        }}
      >
        +
      </button>

      <h1>Number up: {numberUpMemo}</h1>
      <Child showNumber={showNumberCallback} />
      <hr/>
      <DemoUseReducer />
      <hr/>
      <CustomHooks />
    </div>
  );
}
