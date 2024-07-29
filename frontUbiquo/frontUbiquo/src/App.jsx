import { useEffect, useState } from 'react'
import './App.css'
import BannerComponent from './components/bannerComponent'
import TableComponent from './components/tableComponent'
import { deleteOne, getAll } from './middleware/requests'
import { Backdrop, Button, CircularProgress } from '@mui/material'
import ModalComponent from './components/modal'

function App() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [heroID, setHeroID] = useState(null);

  const columns = [
    { field: 'name', headerName: 'Nombre'},
    { field: 'publisher_name', headerName: 'Casa Publicadora', align: 'right' , filterable: true },
    {field: 'race', headerName: "Raza", align: 'right', filterable: true, show:false},
    { field: 'gender_name', headerName: 'Género', align: 'right' , filterable: true},
    { field: 'alignment_name', headerName: 'Bando', align: 'right' , filterable: true, show:false},
    { field: 'height', headerName: 'Altura', align: 'right' },
    { field: 'weight', headerName: 'Peso', align: 'right' }
];

useEffect(() => {
  const fetchData = async () => {
    setOpen(true)
    const loadData = await getAll();
    if(loadData.status === 200){
      setOpen(false)
    }
    setData(loadData.data);
  };

  fetchData();
}, []);

const handleDelete = async (hero_id) => {
  setOpen(true)
  await deleteOne({ hero_id });
  const loadData = await getAll();
  if (loadData.status === 200) {
    setData(loadData.data);
    setOpen(false)
  }
};

const handleChangeModal = async (hero_id) => {
  setHeroID(hero_id)
  setOpenModal(true)
};

const handleData = async () => {
  setOpen(true)
  const loadData = await getAll();
  if (loadData.status === 200) {
    setData(loadData.data);
    setOpen(false)
  }
};

  return (
    <>
    <div className="Container">
        <BannerComponent title={"Heroes"} subTitle={"Angela Pinelo"} />
      </div>
      <div>
      <Button variant="contained" color='secondary' onClick={()=>{setHeroID(heroID)
      setOpenModal(true)}}>
            Agregar Heroe
        </Button>

      </div>
      <div className='tablePage'>
        <TableComponent columns={columns} data={data} onDelete={handleDelete} onEdit={handleChangeModal} />
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ModalComponent open={openModal} setOpen={setOpenModal} heroID={heroID} setOpenProgress={setOpen} handleData={handleData} setHeroID={setHeroID}/>
    </>
  )
}

export default App
