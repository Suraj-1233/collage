import { Link } from '@material-ui/icons'
import React from 'react'
import '../Table/Table.css'
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
} from 'react-table'



const headerProps = (props, { column }) => getStyles(props, column.align)
const cellProps = (props, { cell }) => getStyles(props, cell.column.align)
const getStyles = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
]

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 200,
    }),
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
    hooks => {
    }
  )
  return (
    <div {...getTableProps()} className="table">
      <div>
        {headerGroups.map(headerGroup => (
          <div
            {...headerGroup.getHeaderGroupProps()} >

            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps(headerProps)} className="th">
                {column.render('Header')}
                {column.canResize && (
                  <div
                    {...column.getResizerProps()}
                    
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className="tbody">
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map(cell => {
                return (
                  <div {...cell.getCellProps(cellProps)} className="td">
                  
             { cell.column.id === "link" ? <a href={cell.value}>{cell.render(Link)}</a> : cell.render('Cell')}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
function Make_table(props) {
  
   
		
  const columns = [
    {
      Header: 'NUMBER',
      accessor: 'id'
    }, {
      Header: 'TITLE',
      accessor: 'title'

    },
	{
		Header: 'Link',
		accessor: 'link'
		
	  },
      {
      Header: 'HARDNESS',
      accessor: 'hardness'
    }
  ]
  return (
   
      <Table columns={columns} data={props.data} />
   
  )
}
export default Make_table