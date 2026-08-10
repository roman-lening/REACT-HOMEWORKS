import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useState } from "react";
import styles from "./styles.module.css";
import cat from "../../assets/cat.jpg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Modal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Навигация
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container className={styles.container}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Какое-то приветственное сообщение
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen}>
          Открыть модально окно
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Модальное окно
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Это модально окно, которое создано с помощью библиотеки Material
              UI
            </Typography>
            <img src={cat} alt="cat" className={styles.img}/>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Сохранить и закрыть
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Container>
    </div>
  );
}

export default Modal;
