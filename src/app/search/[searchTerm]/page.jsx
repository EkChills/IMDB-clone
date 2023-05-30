import Results from '@/components/Results'
import React from 'react'

export default async function SearchPage({params}) {
  const {searchTerm} = params
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`)
  if(!res.ok) {
    throw new Error('Error fetching data')
  }
  const data = await res.json()
  const results = data.results
  return (
    <div>
      {results && results.length === 0 && <div className='text-center pt-6'>No results found</div>}
      {results && <Results results={results} />}
    </div>
  )
}
