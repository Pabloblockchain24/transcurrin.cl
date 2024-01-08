import React from 'react'
import { useIntranet } from "../../context/IntranetContext"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, IconButton, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TablePagination } from '@mui/material';
import "./VaciosTable.css"

function VaciosTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate() +1 ;
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };


    const diasEnDepot = (fechaISO) => {
        const fechaRetiro = new Date(fechaISO);
        const fechaHoy = new Date()
        const diferenciaMilisegundos = fechaHoy - fechaRetiro
        return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))
    }


    const demurrage = (fechaISO, diasLibres) =>{
        const fechaDemurrage = new Date(fechaISO);
        fechaDemurrage.setDate(fechaDemurrage.getDate() + diasLibres - 1)
        const dia = fechaDemurrage.getDate();
        const mes = fechaDemurrage.getMonth() +1 ;
        const año = fechaDemurrage.getFullYear();
        return `${dia}-${mes}-${año}`;
    }

    const vaciosDepot = services.filter(servicio => {
        return servicio.retiroPuerto !== null && servicio.fechaVacio === null
      });
    if (services.length === 0) return (<div className='customVacio'><h1> OOOPS ... NO HAY UNIDADES PENDIENTES DE DEVOLUCION</h1></div>)
    
    
    const columns = [
        { id: 'Carpeta', label: 'CARPETA' },
        { id: 'Unidad', label: 'UNIDAD' },
        { id: 'Tipo', label: 'TIPO' },
        { id: 'DiasEnDepot', label: 'DIAS EN DEPOSITO' },
        { id: 'Demurrage', label: 'DEMURRAGE' },
        { id: 'DepotDevolucion', label: 'DEP. DEVOLUCIÓN' },
        { id: 'FechaVacio', label: 'FECHA VACIO' },
        { id: 'ChoferVacio', label: 'CHOFER VACIO' },
    ];

    function createData(Carpeta, Unidad, Tipo, DiasEnDepot, Demurrage, DepotDevolucion, fechaVacio, ChoferVacio) {
        return { Carpeta, Unidad, Tipo, DiasEnDepot, Demurrage, DepotDevolucion, fechaVacio, ChoferVacio };
    }

    
    const rows =  vaciosDepot.map((service,index) => {
        return createData(
            service.ref,
            service.container,
            service.tipo,
            diasEnDepot(service.retiroPuerto),
            demurrage(service.eta, service.diasLibres),
            service.depotDevolucion,
            formatFecha(service.fechaVacio),
            service.ChoferVacio,
            index
        )
    })

    const [filterValues, setFilterValues] = useState({
        Carpeta: '',
        Unidad: '',
        Tipo: '',
        DiasEnDepot: '',
        Demurrage: '',
        DepotDevolucion: '',
        FechaVacio: '',
        ChoferVacio: ''
    });

    const [filterTexts, setFilterTexts] = useState({
        Carpeta: 'Carpeta',
        Unidad: 'Unidad',
        Tipo: 'Tipo',
        DiasEnDepot: 'Dias en Depot',
        Demurrage: 'Demurrage',
        DepotDevolucion: 'Depot Devolución',
        FechaVacio: 'Fecha Vacio',
        ChoferVacio: 'Chofer Vacio'
    });

    

    const uniqueValues = (column) => {
        return [...new Set(rows.map((row) => row[column]))];
    };
    const [openFilter, setOpenFilter] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [filterColumn, setFilterColumn] = useState('');

    const handleFilterClick = (event, column) => {
        setOpenFilter((prev) => !prev);
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setFilterColumn(column);
    };

    const handleClose = () => {
        setOpenFilter(false);
        setAnchorEl(null);
    };

    const handleColumnFilterChange = (value, column) => {
        let newFilterTexts = { ...filterTexts };
        let newFilterValues = { ...filterValues };
        if (value === 'Todos') {
            newFilterTexts = { ...filterTexts, [column]: column };
            newFilterValues = { ...filterValues, [column]: '' };
        } else {
            newFilterTexts = { ...filterTexts, [column]: value };
            newFilterValues = { ...filterValues, [column]: value };
        }
        setFilterValues(newFilterValues);
        setFilterTexts(newFilterTexts);
        handleClose();
    };

    const filterData = () => {
        let filteredData = [...rows];

        Object.keys(filterValues).forEach((key) => {
            if (filterValues[key]) {
                filteredData = filteredData.filter((row) =>
                    row[key].toLowerCase().includes(filterValues[key].toLowerCase())
                );
            }
        });

        return filteredData;
    };

    const filteredData = filterData();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const slicedRows = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    
    return (
        <>
        <TableContainer component={Paper} className='tableTransMar'>
        <Table sx={{ minWidth: 650, '& td, & th': { padding: '0.5rem', textAlign: 'center'  } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell className='tableCellColumn' key={column.id}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{filterTexts[column.id]}</span>
                                    <IconButton
                                        onClick={(e) => handleFilterClick(e, column.id)}
                                        aria-haspopup='true'
                                        aria-controls={openFilter ? 'filter-menu' : undefined}
                                    >
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                </div>
                                <Menu
                                    id='filter-menu'
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={openFilter && filterColumn === column.id}
                                    onClose={handleClose}
                                >
                                    <MenuItem key='todos' onClick={() => handleColumnFilterChange('Todos', column.id)}>
                                        Todos
                                    </MenuItem>


                                    {uniqueValues(column.id).map((option) => (
                                        <MenuItem
                                            key={option}
                                            selected={filterValues[column.id] === option}
                                            onClick={() => handleColumnFilterChange(option, column.id)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </TableCell>
                        ))}
                    </TableRow>

                </TableHead>
                <TableBody>
                    {slicedRows.map((row, index) => (
                        <TableRow key={index}>
                            {columns.map((column) => (
                                <TableCell className='tableCellRow' key={column.id}>
                                    {row[column.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={7} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TableFooter className='tableFooter'>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage='Filas por página'
                />
            </TableFooter>
        </TableContainer>
        </>
    )
}

export default VaciosTable