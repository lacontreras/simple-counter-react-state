import React, { Component, useEffect, useState } from 'react';
import { isThisTypeNode } from 'typescript';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   if (storage) return JSON.parse(storage).count;
//   else return { count: 0 };
// };

// const storeStateInLocalStorage = (count) => {
//   localStorage.setItem('counterState', JSON.stringify({ count }));
// };

// // const increment = (state, props) => {
// //   const { max, step } = props;
// //   if (state.count >= max) return;
// //   return { count: state.count + step };
// // };

// //* this below was made in case we use stat (that is why it is commented now)
// // class Counter extends Component {
// // constructor(props) {
// //   super(props);
// //   this.state = getStateFromLocalStorage();

// //   this.increment = this.increment.bind(this);
// //   this.decrement = this.decrement.bind(this);
// //   this.reset = this.reset.bind(this);
// //   this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
// //   //* without these three lines, the app wouldn't work because of the definition of "this", (this is more the context of execution, it has lost track of what "this" is)
// // }

// // updateDocumentTitle() {
// //   document.title = this.state.count;
// // }

// // increment() {
// //   // this.setState({ count: this.state.count + 1 });
// //   // const { max, step } = this.props;
// //   this.setState(
// //     (state, props) => {
// //       const { max, step } = props;
// //       if (state.count >= max) return;
// //       return { count: state.count + step };
// //     },
// //     // () => {
// //     //   // storeStateInLocalStorage(this.state),
// //     //   this.updateDocumentTitle;
// //     // },
// //     this.updateDocumentTitle,
// //   );
// //   // }, storeStateInLocalStorage.bind(this));
// //   // () => {

// //   //   // localStorage.setItem('counterState', JSON.stringify(this.state));
// //   //   // console.log('after!', this.state);

// //   // },
// //   // );
// //   // console.log('before!', this.state);
// // }

// // decrement() {
// //   this.setState({ count: this.state.count - 1 }, this.updateDocumentTitle);
// // }

// // reset() {
// //   this.setState({ count: 0 }, this.updateDocumentTitle);
// // }
// //   render() {
// //     const { count } = this.state;
// //     return (
// //       <div className="Counter">
// //         <p className="count">{count}</p>
// //         <section className="controls">
// //           <button onClick={this.increment}>Increment</button>
// //           <button onClick={this.decrement}>Decrement</button>
// //           <button onClick={this.reset}>Reset</button>
// //         </section>
// //       </div>
// //     );
// //   }
// // }
// const inc = (c) => c + 1;
// // console.log(getStateFromLocalStorage());
// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);
//     if (storage) return JSON.parse(storage)[value];
//     return initialState;
//   };

//   const [value, setValue] = useState(get());

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify({ value }));
//   }, [value]);

//   return [value, setValue];
// };

const Counter = ({ max, step }) => {
  // const [count, setCount] = useState(getStateFromLocalStorage);
  const [count, setCount] = useState(0);
  const countRef = React.useRef();

  let message = '';
  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;

  // const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    // setCount((c) => {
    //   if (c >= max) return c;
    //   return c + step;
    // });
    setCount((c) => c + 1);
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    // if count changes, run this effect
    // document.title = `Counter:${count}`;
    const id = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  // useEffect(() => {
  //   storeStateInLocalStorage(count);
  // }, [count]);

  return (
    <div className="Counter">
      <p>{message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;

//!----------------------------------------------------
// import React, { Component } from 'react';

// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState(({ count }) => ({
//       count: count + 1,
//     }));
//   };

//   decrement = () => {
//     this.setState(({ count }) => ({
//       count: count - 1,
//     }));
//   };

//   reset = () => {
//     this.setState(() => ({
//       count: 0,
//     }));
//   };

//   componentDidUpdate() {
//     setTimeout(() => {
//       console.log(`Count: ${this.state.count}`);
//     }, 3000);
//   }

//   render() {
//     const { count } = this.state;

//     return (
//       <div className="Counter">
//         <p className="count">{count}</p>
//         <section className="controls">
//           <button onClick={this.increment}>Increment</button>
//           <button onClick={this.decrement}>Decrement</button>
//           <button onClick={this.reset}>Reset</button>
//         </section>
//       </div>
//     );
//   }
// }

// export default Counter;
