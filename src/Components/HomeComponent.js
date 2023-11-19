// lib imports
import { useState } from "react"
import { v4 as uuid } from "uuid"

// assets
import data from '../data.json'
import removeIcon from '../images/icon-remove.svg'

// components
import { Container } from "./Container"
import { JobList } from "./JobList"

// Displays the filters used
const FilterComponent = ({ filters, clearFilters }) => {
	return (
		<div hidden={filters.length === 0} className="p-3 mt-[-70px] bg-[#ffff] rounded-md shadow-xl">
			<div className="flex items-center justify-between">
				<h1> Filters : </h1>
				<button onClick={() => clearFilters()}>Clear </button>
			</div>
			<div className="flex gap-4">
					{
						filters.map((filter) => {
							return (
								<section key={uuid()} className="p-1 font-bold text-Light-Grayish-Cyan bg-Dark-Grayish-Cyan rounded">
									<button>{filter}</button>
									<i src={removeIcon}/>
								</section>
							)
						})
					}
			</div>
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