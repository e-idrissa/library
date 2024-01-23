import React from 'react'

import SearchForm from '@/components/SearchForm'
import Filters from '@/components/Filters'
import { getResources } from '@/sanity/actions'
import ResourceCard from '@/components/ResourceCard'

const Page = async () => {

  const resources = await getResources({
    query: '',
    category: '',
    page: '1'
  })

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className=" w-full">
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            JavaScript Mastery Ressources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />

      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        Header
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard 
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                slug={resource.slug}
              />
            ))
          ) : (
            <p className='body-regular text-white-400'>
              No resources found
              {resources}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Page