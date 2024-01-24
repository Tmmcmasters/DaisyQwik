import { Slot, component$ } from '@builder.io/qwik';

// export interface TableRowHeadProps {
//   rowHead: string
// }

// export const TableRowHead = component$<TableRowHeadProps>((props) => {
//   return (
//     <th>
//       {props.rowHead}
//     </th>
//   )
// })

export interface TableRowProps {
  rowCells: {
    key: number,
    value: string
  }[],
  hover?: boolean
}

export const TableRow = component$<TableRowProps>((props) => {
  return (
    <tr 
    class={`
    ${props.hover ? 'hover:bg-neutral-500 hover:text-base-200 cursor-pointer' : ''}
    transition-all  border-b-1 border-neutral
    `}
    >
      {props.rowCells.map((row) => (
        <td key={row.key}>
          {row.value}
        </td>
      ))}
    </tr>
  )
})
export interface TableProps {
  columnsList: {
    key: number,
    value: string
  }[],
  pinColumns?: boolean,
  footerLabels?: boolean
}

export const Table = component$<TableProps>((props) => {
  return (
    <div class="overflow-y-auto overflow-x-visible rounded-lg bg-base-200 text-base-content  w-full outline outline-2 outline-base-content  shadow-lg">
      <table 
      class={
        `table ${props.pinColumns ? 'table-pin-rows' : ''}
        text-center 
        table-lg
        `
      }
      >
        <thead >
          <tr class="bg-base-200  text-base-content font-bold text-base outline outline-2 outline-neutral">
            {props.columnsList.map((column) => (
              <th key={column.value} >
                {column.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody >
          <Slot />
          
        </tbody>
        {
          props.footerLabels ? 
            <tfoot>
          <tr class="bg-base-200  text-base-content font-bold text-base outline outline-2 outline-neutral">
            {props.columnsList.map((column) => (
              <th key={column.value}>
                {column.value}
              </th>
            ))}
          </tr>
        </tfoot>
          : null
        }
        
      </table>
    </div>
  );
});
