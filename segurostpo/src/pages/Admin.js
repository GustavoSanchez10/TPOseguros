import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Helmet } from 'react-helmet';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import { Button } from '@material-ui/core';
import Typography from './modules/components/Typography';
import AppForms from './modules/views/AppForms';

const columns = [
  { id: 'order', label: 'NRO. ORDEN', minWidth: 170 },
  { id: 'stype', label: 'SEGURO', minWidth: 100 },
  {
    id: 'name',
    label: 'NOMBRE',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'DIRECCION',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(order, stype, name, address) {
  
  return { order, stype, name, address };
}

const rows = [

  createData('#666001', 'Vida', 'P. Sherman', 'Calle Wallaby 42, Sydney'),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('#666001', 'Vida', 'P. Sherman', 'Calle Wallaby 42, Sydney'),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function Administrator() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>ADMIN | TPO Seguros</title>
      </Helmet>
      <AppForms>
      <AppAppBar />
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
              <img
                src="/static/themes/onepirate/AdminLogo.png"
                alt="Home"
                align='center'
                width='250'
              />
            </Typography>
            <Typography variant="h2" gutterBottom align="center">
              RESUMEN
            </Typography>
             
            <Typography variant="body2" align="center" >
              {'  '}
            </Typography>
             
            <Typography variant="h4">
              {' Contratos '}
            </Typography>
            <Typography component="h1" variant="h4">
              <img
                src="/static/themes/onepirate/barra-azul.jpg"
                alt="Home"
                align='center'
                width='1100'
              />
               
            </Typography>
             
        </React.Fragment>
        <React.Fragment>
            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <React.Fragment>
              <Typography>
                  <h4>
                       ACCIONES / "ABM"
                  </h4>
              </Typography>
              <Button
                size="large"
                color="Primary"
                background="Primary"
                variant="contained"
                className={classes.button}
                component="a"
                href="http://localhost:3000/crecontrato"
              >
                Agregar contrato
              </Button>
               
              <Button
                size="large"
                color="Primary"
                background="Primary"
                variant="contained"
                className={classes.button}
                component="a"
                href="http://localhost:3000/modifcontrato"
              >
                Modificar Contrato
              </Button>
               
              <Button
                size="large"
                color="Primary"
                background="Primary"
                variant="contained"
                className={classes.button}
                component="a"
                href="http://localhost:3000/elimcontrato"
              >
                Eliminar Contrato
              </Button>
               <Button
                size="large"
                color="Primary"
                background="Primary"
                component="a"
                fullWidth
              >
              </Button>
               
              <Typography variant="h4">
              {' USUARIOS '}
            </Typography>
            <Typography component="h1" variant="h4">
              <img
                src="/static/themes/onepirate/barra-azul.jpg"
                alt="Home"
                align='center'
                width='1100'
              />
               
            </Typography>
             
        </React.Fragment>
        <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <React.Fragment>
              <Typography>
                  <h4>
                       ACCIONES / "ABM"
                  </h4>
              </Typography>
              <Button
                size="large"
                color="Primary"
                background="Primary"
                variant="contained"
                className={classes.button}
                component="a"
                href="http://localhost:3000/creusuario"
              >
                Agregar Cliente
              </Button>
               
              <Button
                size="large"
                color="Primary"
                background="Primary"
                variant="contained"
                className={classes.button}
                component="a"
                href="http://localhost:3000/modifusuario"
              >
                Modificar Cliente
              </Button>
               
              <Button
                size="large"
                color="Primary"
                background="Primary"
                variant="contained"
                className={classes.button}
                component="a"
                href="http://localhost:3000/elimusuario"
              >
                Eliminar Cliente
              </Button>
               <Button
                size="large"
                color="Primary"
                background="Primary"
                component="a"
                fullWidth
              >
              </Button>
        </React.Fragment>
        </React.Fragment>

        <React.Fragment>
            <Button
              size="large"
              color="Primary"
              background="Primary"
              fullWidth
              variant="contained"
              className={classes.button}
              component="a"
              href="http://localhost:3000/"
            >
              Regresar al inicio
            </Button>
            <Typography align="center">
                <h5>
                    TPO SEGUROS © 2021
                </h5>
            </Typography>
        </React.Fragment>
        </AppForms>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Administrator);
