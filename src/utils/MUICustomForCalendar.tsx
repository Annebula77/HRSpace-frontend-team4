import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar';

const CustomActionBar = (props: PickersActionBarProps) => {
  const {
    onAccept, onClear, onCancel, onSetToday, actions, className,
  } = props;

  const dialogActionsStyles = {
    justifyContent: 'space-between',
    padding: '0 20px 10px',
  };

  if (actions == null || actions.length === 0) {
    return null;
  }

  return (
    <DialogActions className={className} style={dialogActionsStyles}>
      {actions.includes('cancel') && (
        <Button variant="outlined" color="primary" onClick={onCancel}>Отмена</Button>
      )}
      {actions.includes('clear') && (
        <Button variant="outlined" color="primary" onClick={onClear}>Очистить</Button>
      )}
      {actions.includes('today') && (
        <Button variant="outlined" color="primary" onClick={onSetToday}>Сегодня</Button>
      )}
      {actions.includes('accept') && (
        <Button variant="outlined" color="primary" onClick={onAccept}>Принять</Button>
      )}
    </DialogActions>
  );
};

export default CustomActionBar;
