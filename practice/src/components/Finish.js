import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Finish = () => {

  const count = useSelector((state) => state.counter.value)

  console.log("from main");
  console.log("rroooooorgfbfhnj");


    return (
      <div>
        <h1>Finish</h1>

        <div>The result is {count}</div>
        {/* <Link to="/">
          <button onClick={}>To Main</button>
        </Link> */}

      </div>
    );
  };

  export default Finish;
