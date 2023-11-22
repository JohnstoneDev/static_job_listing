import { v4 as uuid } from 'uuid'

const Job = ({
  company, logo, featured, position, role, recent,
  level, postedAt, contract, location, languages, tools,
  filterFunc, filterArray
  }) => {

  const featuredBrd = featured ? "border-l-4 border-l-Dark-Grayish-Cyan" : ""

  return (
    <section className={`p-4 flex flex-col gap-4 items-start tablet:flex-row bg-[#ffff] rounded-l-sm rounded-lg shadow-2xl ${featuredBrd}`}>
       <img src={logo} alt={""} className="bg-[#000000] p-10 mt-[-45px] rounded-full tablet:mt-0" />
       <div className='space-y-2'>
          <article className='flex gap-3 space-x-2 items-center'>
            <p className='text-Dark-Grayish-Cyan font-semibold'>{company}</p>
            <p hidden={!recent}   className='rounded-md font-semibold p-1 text-Light-Grayish-Cyan bg-Dark-Grayish-Cyan'>{recent ? "New" : "" }</p>
            <p hidden={!featured} className='rounded-md font-semibold p-1 text-Light-Grayish-Cyan bg-Very-Dark-Grayish-Cyan'>{featured ? "Featured" : "" }</p>
          </article>

          <article>
            <div className='flex flex-col items-start laptop:flex-row laptop:items-center gap-3 justify-between'>
              <p className='text-Very-Dark-Grayish-Cyan hover:text-Dark-Grayish-Cyan font-semibold'>{position}</p>
              <p className='flex grow gap-1 items-center justify-between text-ellipsis'>
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
    <div className="flex flex-col gap-10 m-auto">
      { jobs.map((job) => <Job key={job.id} {...job} filterFunc={filterCriteria} filterArray={filterKeyArray}/> )}
    </div>
  )
}