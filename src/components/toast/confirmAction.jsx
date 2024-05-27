import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';

const confirmAction = (message, onConfirm) => {
  confirmAlert({
    title: 'Confirm to Submit',
    message: message,
    buttons: [
      {
        label: 'Yes',
        onClick: onConfirm
      },
      {
        label: 'No',
        onClick: () => toast.info("Action Cancelled")
      }
    ]
  });
};

export default confirmAction;
