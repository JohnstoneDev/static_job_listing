// lib imports
import { useState } from "react"
import { v4 as uuid } from "uuid"

// assets
import data from '../data.json'
// import removeIcon from '../images/icon-remove.svg'

// components
import { Container } from "./Container"
import { JobList } from "./JobList"

// Displays the filters used
const FilterComponent = ({ filters, clearFilters }) => {
	return (
		<div hidden={filters.length === 0} className="items-center justify-between space-y-2  p-3 mt-[-70px] bg-[#ffff] rounded-md shadow-xl">
			<div className="flex overflow-hidden whitespace-normal gap-4">
					{
						filters.map((filter) => <button key={uuid()} className="p-1 font-bold text-Light-Grayish-Cyan bg-Dark-Grayish-Cyan rounded">{filter}</button>
						)
					}
			</div>
			<button onClick={() => clearFilters()}>Clear </button>
	</div>
	)
}

// Parent component with application state :
// uses prop drilling to hand down state
export const HomeComponent = () => {
	const [ jobs, setJobs ] = useState(data)
	const [ filters, setFilters ] = useState([])

	// When the criteria is a key in the job object
	const filterCriteria = (key, criteria) => {
		const newJobs = jobs.filter((job) => {
			return job[key] === criteria
		})

		if (!filters.includes(criteria)) {
			const newFilters = [...filters, criteria]
			setFilters(newFilters)
		}
		setJobs(newJobs)
	}

	// When the criteria is an array in the job object
	const filterKeyArray = (key, criteria) => {
		const newJobs = jobs.filter((job) => {
			return job[key].includes(criteria)
		})

		if (!filters.includes(criteria)) {
			const newFilters = [...filters, criteria]
			setFilters(newFilters)
		}

		setJobs(newJobs)
	}

	// removes all filters and sets the jobs back to OG data
	const clearFilters = () => {
		setFilters([])
		setJobs(data)
	}

	return (
			<Container>
				<FilterComponent filters={filters} clearFilters={clearFilters}/>
				<JobList jobs={jobs} filterCriteria={filterCriteria} filterKeyArray={filterKeyArray}/>
			</Container>
		)
}