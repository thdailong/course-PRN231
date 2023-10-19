import React, { useEffect } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import PropTypes from 'prop-types'
const _borderColor = 'rgba(255, 255, 255, 0.15)'
const ROW_PER_PAGE = [10, 25, 100]

const darkTheme = {
  bgcolor: '#181919',
  '& thead tr th': {
    bgcolor: '#202123',
    fontWeight: 700,
    color: 'rgba(255, 255, 255, 0.60)',
    borderColor: _borderColor,
  },
  '& td': {
    borderColor: _borderColor,
    color: 'white',
  },
}

const lightTheme = {
  bgcolor: '#fff',
  '& thead tr th': {
    bgcolor: '#fff',
    color: 'rgba(0, 0, 0, 0.50);',
    fontWeight: 700,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  '& td': {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    color: 'black',
  },
}

const THEME = {
  dark: darkTheme,
  light: lightTheme,
}

const THEME_NAVIGATION = {
  dark: {
    '& p': {
      color: 'white',
    },
    '& svg': {
      color: 'white',
    },
    '& .MuiSelect-select': {
      color: 'white',
    },
  },
  light: {
    '& p': {
      color: '#000',
    },
    '& svg': {
      color: '#000',
    },
    '& .MuiSelect-select': {
      color: '#000',
    },
  },
}

/**
 * Renders a table component with customizable columns and rows.
 *
 * @param {array} columns - An array of objects representing the table columns.
 * @param {array} rows - An array of objects representing the table rows.
 * @param {object} sx - Additional styles for the table component.
 * @param {string} borderColor - The color of the table border.
 * @param {number} maxHeight - The maximum height of the table.
 * @param {boolean} resetPage - Whether to reset the page when the component re-renders.
 * @param {string} theme - The theme of the table component.
 * @param {string} emptyMessage - The message to display when there are no rows.
 * @param {function} onClickRow - The function to call when a row is clicked.
 * @param {object} other - Additional props for the table component.
 * @return {ReactElement} The rendered table component.
 */
export default function TableComponent({
  columns = [],
  rows = [],
  sx = {},
  borderColor = _borderColor,
  maxHeight,
  resetPage,
  theme = 'dark',
  emptyMessage,
  loading,
  loadingComponent,
  onClickRow = null,
  ...other
}) {
  useEffect(() => {
    setPage(0)
    setRowsPerPage(ROW_PER_PAGE[0])
  }, [resetPage])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(ROW_PER_PAGE[0])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper
      sx={{
        width: '100%',
        overflow: 'hidden',
        ...(THEME[theme] || THEME.dark),
        ...sx,
      }}
      {...other}
    >
      <TableContainer sx={{ maxHeight: maxHeight ?? 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  key={column.id + i + column.label}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={(row._id || 0) + index}
                    onClick={(e) => {
                      if (onClickRow) {
                        onClickRow(row)
                      }
                    }}
                    sx={{
                      cursor: onClickRow && 'pointer',
                    }}
                  >
                    {columns.map((column, i) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id + i} align={column.align}>
                          {column.render
                            ? column.render(row)
                            : column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            {loading ? (
              <>
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    {loadingComponent}
                  </TableCell>
                </TableRow>
              </>
            ) : (
              rows.length === 0 &&
              emptyMessage && (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ROW_PER_PAGE}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          ...(THEME_NAVIGATION[theme] || THEME.dark),
        }}
      />
    </Paper>
  )
}
let column = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  minWidth: PropTypes.number,
  align: PropTypes.string,
  format: PropTypes.func,
})
TableComponent.propTypes = {
  columns: PropTypes.arrayOf(column),
  rows: PropTypes.arrayOf(PropTypes.object),
}
