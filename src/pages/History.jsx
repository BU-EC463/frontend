import React from 'react'
import HistoryTable from '../components/HistoryTable'
import { SAMPLE_HISTORY } from '../lib/constants'


export default function History() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<HistoryTable data={SAMPLE_HISTORY} />
			</div>
		</div>
	)
}
