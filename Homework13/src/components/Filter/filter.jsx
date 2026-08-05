import { setFilter } from "../../redux/actions/action";
import { connect } from "react-redux";

function Filter({ setFilter }) {
  return <input type="text" onChange={(e) => setFilter(e.target.value)} />;
}

export default connect(null, { setFilter })(Filter);
