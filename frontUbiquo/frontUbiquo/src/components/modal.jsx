import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { getAllPublishers, getHero, postHero, updateHero } from '../middleware/requests';

const ModalComponent = ({ open, setOpen, setOpenProgress, handleData, setHeroID, heroID }) => {
    const handleClose = () => setOpen(false);
    const [form, setForm] = useState({ name: '', publisher: '' });
    const [publishers, setPublishers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const loadData = await getAllPublishers();
          if(heroID !==  null){
            const dataHeroe = await getHero(heroID);
            setForm(dataHeroe.data)
          }else{
            setForm({ name: '', publisher: '' })
          }
          
          
          setPublishers(loadData.data);
        };
      
        fetchData();
      }, [heroID]);

    const ListaGeneros = [
        {id: 1, label: "Female"},
        {id: 2, label: "Male"}
    ];

    const ListaAlignments = [
        {id: 1, label: "Bad"},
        {id: 2, label: "Good"},
        {id: 3, label: "Neutral"}
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '16px', 
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleChangeGenero = (event) => {
        setForm({
            ...form,
            gender_id: event.target.value
        })
    };

    const handleChangePublisher = (event) => {
        setForm({
            ...form,
            publisher_id: event.target.value
        })
    };

    const handleChangeAlignment = (event) => {
        setForm({
            ...form,
            alignment_id: event.target.value
        })
    };

    const handleSubmit = async () => {
        setOpenProgress(true)
        if(heroID !== null){
            const loadData =await updateHero(heroID, form);
        if (loadData.success) {
            handleData()
          setOpen(false)
          setHeroID(null)
        }

        }else{
            const loadData =await postHero(form);
            if (loadData.success) {
                handleData()
              setOpen(false)
              setHeroID(null)
            }
        }
        
      };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom color="text.primary">
                        {heroID ? "Datos del Héroe" : "Nuevo Héroe"}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="name" 
                                label="Name / Nombre" 
                                variant="filled" 
                                value={form?.name || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="publisher-label">Publisher/Casa Publicadora</InputLabel>
                            <Select
                                fullWidth
                                labelId="publisher-label"
                                id="publisher"
                                value={form?.publisher_id || ''}
                                label="Publisher"
                                onChange={handleChangePublisher}
                            >
                                {publishers.map((row, index) => (
                                    <MenuItem key={index} value={row.publisher_id}>{row.publisher_name}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                                          

                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="height" 
                                label="Height / Altura" 
                                variant="filled" 
                                value={form?.height || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="weight" 
                                label="Weight / Peso" 
                                variant="filled" 
                                value={form?.weight || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="eye_color" 
                                label="Eye Color/Color de Ojos" 
                                variant="filled" 
                                value={form?.eye_color || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="hair_color" 
                                label="Hair Color/Color de Pelo" 
                                variant="filled" 
                                value={form?.hair_color || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>


                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="race" 
                                label="Race / Raza" 
                                variant="filled" 
                                value={form?.race || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                id="skin_color" 
                                label="Skin Color/Color de Piel" 
                                variant="filled" 
                                value={form?.skin_color || ''} 
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="gender-label">Gender/Género</InputLabel>
                            <Select
                                fullWidth
                                labelId="gender-label"
                                id="gender"
                                value={form?.gender_id || ''}
                                label="Género"
                                onChange={handleChangeGenero}
                            >
                                {ListaGeneros.map((row, index) => (
                                    <MenuItem key={index} value={row.id}>{row.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <InputLabel id="gender-label">Alignment/Bando</InputLabel>
                            <Select
                                fullWidth
                                labelId="gender-label"
                                id="gender"
                                value={form?.alignment_id || ''}
                                label="Alignment"
                                onChange={handleChangeAlignment}
                            >
                                {ListaAlignments.map((row, index) => (
                                    <MenuItem key={index} value={row.id}>{row.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        
                    </Grid>
                    <Box mt={2} display="flex" justifyContent="space-between">
                        <Button 
                            variant="contained" 
                            disableElevation 
                            color="error"
                            onClick={() => {
                                setOpen(false)
                                setHeroID(null)
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            variant="contained" 
                            disableElevation 
                            onClick={() => {
                                    handleSubmit()
                                
                            }}
                        >
                            {heroID ? "Editar Héroe" : "Agregar Héroe"}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ModalComponent;
