import React from 'react'
import { useIntranet } from "../../context/IntranetContext"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, IconButton, Menu, MenuItem } from '@mui/material';
import { TablePagination } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import "./statusTable.css"

function StatusTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])


    const formatCarguio = (fechaISO) => {
        const fecha = new Date(fechaISO);
            const dia = fecha.getDate();
            const mes = fecha.getMonth() + 1;
    
            const diaFormateado = (dia < 10) ? `0${dia}` : dia;
            const mesFormateado = (mes < 10) ? `0${mes}` : mes;
    
            const hora = fecha.getHours();
            const minutos = fecha.getMinutes();
    
            const horaFormateada = (hora < 10) ? `0${hora}` : hora;
            const minutosFormateados = (minutos < 10) ? `0${minutos}` : minutos;

            if(diaFormateado){
                return `${diaFormateado}-${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
            }else{
                return " "
            }
    };

    const estimadaEntrega = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;

        const diaFormateado = (dia < 10) ? `0${dia}` : dia;
        const mesFormateado = (mes < 10) ? `0${mes}` : mes;

        const hora = fecha.getHours() + 2;
        const minutos = fecha.getMinutes();

        const horaFormateada = (hora < 10) ? `0${hora}` : hora;
        const minutosFormateados = (minutos < 10) ? `0${minutos}` : minutos;

        if(diaFormateado){
            return `${diaFormateado}-${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
        }else{
            return ""
        }
    };

    const entregaDiaSiguiente = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate() + 1;
        const mes = fecha.getMonth() + 1;

        const diaFormateado = (dia < 10) ? `0${dia}` : dia;
        const mesFormateado = (mes < 10) ? `0${mes}` : mes;


        const horaFormateada = `08`
        const minutosFormateados = `30`

        return `${diaFormateado}-${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
    };

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };

    const fechaDespachoIntranet = new Date()
    const fechaDespachoFormateada = formatFecha(fechaDespachoIntranet)
    
    const status = services.filter(servicio => {
        return formatFecha(servicio.progEntrega) === fechaDespachoFormateada
    });

    if (status.length === 0) return (<div className='customVacio'><h1> NO HAY STATUS DISPONIBLE</h1></div>)

    const columns = [
        { id: 'Unidad', label: 'UNIDAD' },
        { id: 'Tipo', label: 'TIPO' },
        { id: 'AlmacenDestino', label: 'ALMACEN DESTINO' },
        { id: 'ChoferEntrega', label: 'CHOFER ENTREGA' },
        { id: 'CarguioEntrega', label: 'CARGUIO FECHA' },
        { id: 'EstimadaEntrega', label: 'ESTIMADA ENTREGA' },
        { id: 'StatusEntrega', label: 'STATUS ENTREGA' },
    ];

    function createData(Unidad, Tipo, AlmacenDestino, ChoferEntrega, CarguioEntrega, EstimadaEntrega, StatusEntrega) {
        return { Unidad, Tipo, AlmacenDestino, ChoferEntrega, CarguioEntrega, EstimadaEntrega, StatusEntrega };
    }

    const rows = status.map((service, index) => {
        return createData(
            service.container,
            service.tipo,
            service.almDestino,
            service.choferEntrega,
            formatCarguio(service.carguioEntrega),
            estimadaEntrega(service.carguioEntrega),
            service.statusEntrega,
            index
        )
    })

    const [filterValues, setFilterValues] = useState({
        Unidad: "",
        Tipo: '',
        AlmacenDestino: '',
        ChoferEntrega: '',
        CarguioEntrega: '',
        EstimadaEntrega: '',
        StatusEntrega: ''
    });

    const [filterTexts, setFilterTexts] = useState({
        Unidad: 'Unidad',
        Tipo: 'Tipo',
        AlmacenDestino: 'Almacen Destino',
        ChoferEntrega: 'Chofer Entrega',
        CarguioEntrega: 'Carguio',
        EstimadaEntrega: 'Estimada Entrega',
        StatusEntrega: 'Status Entrega'
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
                        <TableRow >
                            {columns.map((column) => (
                                <TableCell className='tableCellColumnStatus' key={column.id}>
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

export default StatusTable