import { useContext } from 'react';
import ChileDialogContext from './Context';

const useChileDialog = () => {
  return useContext(ChileDialogContext);
};

export default useChileDialog;
