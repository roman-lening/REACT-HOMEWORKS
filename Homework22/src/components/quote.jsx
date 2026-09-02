import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../redux/slices/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <div>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
      )}
      {status === "failed" && <p>{error}</p>}
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
};

export default Quote;
