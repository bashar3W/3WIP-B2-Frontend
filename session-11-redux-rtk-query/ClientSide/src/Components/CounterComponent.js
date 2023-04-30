import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, increment, incrementByAmount } from "../counterSlice";

const CounterComponent = () => {
  const [amount, setAmount] = useState(null);
  const nevigate = useNavigate();

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {/* Navigation button  */}
      <button
        onClick={() => nevigate("/")}
        className="absolute top-5 left-5 btn-warning px-5 py-2 rounded-md text-white font-semibold"
      >
        RTK Query
      </button>

      {/* State value  */}
      <div className="text-center">
        <h2 className="mt-14 text-3xl">
          (●'◡'●) &nbsp;  &nbsp; -- {value} --  &nbsp; &nbsp; (●'◡'●)
        </h2>
      </div>

      {/* Action Buttons  */}
      <div className="flex justify-center  mt-24">
        <button
          onClick={() => dispatch(increment())}
          type="submit"
          className="btn btn-success mt-2 mr-5 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          type="submit"
          className="btn btn-error mt-2 text-white"
        >
          Decrement
        </button>
      </div>

      {/* Increment by value  */}
      <div className="mt-28 flex justify-center">
        <input
          type="text"
          placeholder="Enter amount"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(parseInt(amount))) }
          className="btn ml-3"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
