import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteDialog = ({ title, handleDelete, handleMenuClose, type }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    if (type !== 'comment' && type !== 'avatar') {
      handleMenuClose();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = () => {
    handleDelete();
    handleClose();
  };

  return (
    <div>
      {type === 'comment' ? (
        <Button
          onClick={handleClickOpen}
          size="small"
          color="inherit"
          startIcon={<DeleteIcon />}
          style={{ textTransform: 'none' }}
        >
          Delete comment
        </Button>
      ) : type === 'avatar' ? (
        <Button
          onClick={handleClickOpen}
          size="small"
          color="secondary"
          variant="outlined"
          startIcon={<DeleteIcon />}
          style={{ textTransform: 'none' }}
        >
          Remove Avatar
        </Button>
      ) : (
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <DeleteIcon style={{ marginRight: 7 }} />
            Delete Post
          </ListItemIcon>
        </MenuItem>
      )}
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle>
          {type === 'comment'
            ? 'Delete Comment?'
            : type === 'avatar'
            ? 'Remove Avatar?'
            : 'Delete Post?'}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            {type === 'comment'
              ? `Delete your comment for sure?`
              : type === 'avatar'
              ? 'Remove your avatar for sure?'
              : `Delete your post '${title}' for sure??`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="outlined"
            size="small"
          >
            Nah, I'll keep this
          </Button>
          <Button
            onClick={handleActionClick}
            color="primary"
            variant="contained"
            size="small"
          >
            {type === 'comment'
              ? 'Delete Comment'
              : type === 'avatar'
              ? 'Remove Avatar'
              : 'Delete Post'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
