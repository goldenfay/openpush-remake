import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {DialogTitle as MuiDialogTitle} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    minWidth: 200
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    overflow: "hidden"
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

function CustomModal(props) {
  const {oepn,handleClose,title,desc,body,actions,...others}=props;
  return (
    <Dialog
      scroll={"body"}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="dialog-title"
      style={{overflow: "hidden"}}
      {...others}

    >
      
        <DialogTitle id="dialog-title" onClose={props.handleClose}>{props.title}</DialogTitle>
      
      <DialogContent style={{ overflow: "hidden", height: "100%", }}>
        {props.desc && <DialogContentText>{props.desc}</DialogContentText>}
        {props.body}
      </DialogContent>
      {props.actions && (
        <DialogActions>
          {props.actions.map((action) => (
            <Button
              onClick={action.handleClick}
              color={action.color || "primary"}
            >
              {action.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
}

CustomModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    body: PropTypes.any.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    actions: PropTypes.array,
};

export default CustomModal;
