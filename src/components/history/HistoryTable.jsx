import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from '../../services/providers/HistoryContext';
import { useSearch } from '../../services/providers/SearchContext';

export default function HistoryTable({ data }) {
	const { updateHistoryData, updateFavoriteID } = useHistory();
	const { updateSearchData } = useSearch();
	const [currentPage, setCurrentPage] = useState(1);
	const resultsPerPage = 15;

	// data = [...data].reverse() // reversed to display most recent to oldest data

	// Calculate the current data slice
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	const currentData = data.slice(indexOfFirstResult, indexOfLastResult);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// Calculate the total number of pages
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(data.length / resultsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handleRowClick = (order) => {
		updateHistoryData(order.results);
		updateSearchData(order.itemNumber);
		updateFavoriteID(order.id);

		// Redirect to the detailed view
		<Link to={`/history-results`}></Link>
	};


	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Showing past searches</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Drug Item Number</th>
							<th>340B</th>
							<th>GPO</th>
							<th>WAC</th>
							<th>Multiple?</th>
							<th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Total Replacements</th>
						</tr>
					</thead>
					<tbody>
						{currentData.map((order, index) => (
							<tr key={index} onClick={() => handleRowClick(order)}>
								<td>
									<Link to={`/history-results`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/history-results`}>{order.itemNumber}</Link>
								</td>
								<td>{order.w3}</td>
								<td>{order.w2}</td>
								<td>{order.w1}</td>
								<td>{order.isMultiple}</td>
								<td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{order.results.length}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<nav className="mt-7">
				<ul className="flex justify-center">
					{pageNumbers.map(number => (
						<li key={number} className="mx-1">
							<button
								onClick={() => paginate(number)}
								className={`px-4 py-2 text-sm font-medium rounded hover:bg-blue-700 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
							>
								{number}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
