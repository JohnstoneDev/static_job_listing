import { v4 as uuid } from 'uuid'

const Job = ({
  company, logo, featured, position, role, recent,
  level, postedAt, contract, location, languages, tools,
  filterFunc, filterArray
  }) => {

  const featuredBrd = featured ? "border-l-4 border-l-Dark-Grayish-Cyan" : ""

  return (
    <section className={`p-4 gap-3 bg-[#ffff] rounded-l-sm rounded-lg shadow-2xl ${featuredBrd}`}>
       {/* <img src={logo} alt={""} className="bg-[#fafafa]" /> */}
       <div>
          <article className='flex gap-4 items-center'>
            <p className=' text-Dark-Grayish-Cyan font-semibold'>{company}</p>
            <p className='rounded-2xl font-semibold'>{recent ? "New" : "" }</p>
            <p className='rounded-2xl font-semibold'>{featured ? "Featured" : "" }</p>
          </article>

          <article className='flex flex-col tablet:flex-col'>
            <div className='flex flex-col items-start tablet:flex-row tablet:items-center gap-3 justify-between'>
              <p className='text-Very-Dark-Grayish-Cyan hover:text-Dark-Grayish-Cyan font-semibold'>{position}</p>
              <p className='flex gap-1 items-center overflow-clip text-ellipsis'>
                <button className='p-1.5 bg-Light-Grayish-Cyan rounded hover:bg-Dark-Grayish-Cyan hover:text-Light-Grayish-Cyan' onClick={() => {filterFunc("level", level)}} >{level}</button>
                <button className='p-1.5 bg-Light-Grayish-Cyan rounded hover:bg-Dark-Grayish-Cyan hover:text-Light-Grayish-Cyan' onClick={() => {filterFunc("role",role)}}>{role}</button>
                { languages.map((lang) =>
                  (<button className='p-1.5 bg-Light-Grayish-Cyan rounded hover:bg-Dark-Grayish-Cyan hover:text-Light-Grayish-Cyan' onClick={() => {filterArray("languages", lang)}} key={uuid()}>
                      {lang}
                  </button>
                ))}
                { tools.map((t) =>
                  (<button className='p-1.5 bg-Light-Grayish-Cyan rounded hover:bg-Dark-Grayish-Cyan hover:text-Light-Grayish-Cyan' onClick={() => filterArray("tools", t)} key={uuid()}>
                    {t}
                  </button>
                ))}
              </p>
            </div>
            <p className="flex gap-3">
              <span>{postedAt}</span>
              <span>{contract}</span>
              <span>{location}</span>
            </p>
          </article>
       </div>
    </section>
  )
}


export const JobList = ({ jobs, filterCriteria, filterKeyArray }) => {
  return (
    <div className="flex flex-col gap-4 m-auto">
      { jobs.map((job) => <Job key={job.id} {...job} filterFunc={filterCriteria} filterArray={filterKeyArray}/> )}
    </div>
  )
}