import React from "react";
import { useDispatch } from "react-redux";
import { useTable } from "react-table";
import { ReactComponent as PlayIcon } from "../resources/icons/play.svg";

const List = ({ data }) => {
  const dispatch = useDispatch();

  const handleSongSelect = (song) => {
    dispatch({
      type: "UPDATE_SONG",
      payload: song,
    });
    dispatch({
      type: "PLAY",
    });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "play",
        width: "5%",
        Cell: ({ row }) => (
          <div className="flex flex-row items-center">
            <button onClick={() => handleSongSelect(row.original)}>
              <PlayIcon className="w-6 fill-gray-500 hover:fill-gray-800" />
            </button>
          </div>
        ),
      },
      {
        Header: "Title",
        accessor: "title",
        width: "20%",
      },
      {
        Header: "Artist",
        accessor: "artist",
        width: "70%",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className="min-w-full text-left table-auto">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="border-gray-200 border-b-4 text-gray-800  text-left text-xs leading-4 font-medium uppercase tracking-wider"
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="px-6 py-3">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="text-gray-700 text-sm">
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-no-wrap"
                    style={{ width: cell.column.width }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
