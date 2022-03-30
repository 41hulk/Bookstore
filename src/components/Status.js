import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const StatusButton = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.statusReducer);
  const checkStat = () => dispatch(checkStatus());
  return (
    <>
      <p>{status}</p>
      <button type="button" className="check-status" onClick={checkStat}>CheckStatus</button>
    </>

  );
};

export default StatusButton;
