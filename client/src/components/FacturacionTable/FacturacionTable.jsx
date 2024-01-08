import React from 'react'
import { useIntranet } from "../../context/IntranetContext"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, IconButton, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TablePagination } from '@mui/material';
import "./FacturacionTable.css"


function FacturacionTable() {
    const { getServices, services } = useIntranet()
    useEffect(() => {
        async function loadServices() {
            await getServices()
        }
        loadServices()
    }, [])


    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        return `${dia}-${mes}-${año}`;
      };


      const serviciosFacturacion = services.filter(servicio => {
        return servicio.entrega !== null
      });

      const columns = [
        { id: 'Carpeta', label: 'CARPETA' },
        { id: 'Unidad', label: 'UNIDAD' },
        { id: 'Nave', label: 'NAVE' },
        { id: 'Tipo', label: 'TIPO' },
        { id: 'DepotDevolucion', label: 'DEP. DEVOLUCIÓN' },
        { id: 'RetiroPuerto', label: 'RETIRO PUERTO' },
        { id: 'FechaEntrega', label: 'FECHA ENTREGA' },
        { id: 'FechaVacio', label: 'FECHA VACIO' },
        { id: 'Tarifa', label: 'TARIFA' },
    ];

    function createData(Carpeta, Unidad, Nave, Tipo, DepotDevolucion, RetiroPuerto, FechaEntrega, FechaVacio, tarifa) {
        return {Carpeta, Unidad, Nave, Tipo, DepotDevolucion, RetiroPuerto, FechaEntrega, FechaVacio, tarifa};
    }

    const rows =  serviciosFacturacion.map((service,index) => {
        return createData(
            service.ref,
            service.container,
            service.nave,
            service.tipo,
            service.depotDevolucion,
            formatFecha(service.retiroPuerto),
            formatFecha(service.entrega),
            formatFecha(service.fechaVacio),
            service.tarifa,
            index
        )
    })

    const [filterValues, setFilterValues] = useState({
        Carpeta: '',
        Unidad: '',
        Nave: '',
        Tipo: '',
        DepotDevolucion: '',
        RetiroPuerto: '',
        FechaEntrega: '',
        FechaVacio: '',
        tarifa: ''
    });

    const [filterTexts, setFilterTexts] = useState({
        Carpeta: 'Carpeta',
        Unidad: 'Unidad',
        Nave: 'Nave',
        Tipo: 'Tipo',
        DepotDevolucion: 'Depot Devolución',
        RetiroPuerto: 'Retiro de puerto',
        FechaEntrega: 'Fecha Entrega',
        FechaVacio: 'Fecha Vacio',
        Tarifa: 'Tarifa'
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

export default FacturacionTable