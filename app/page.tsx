import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <h2 className='text-3xl font-bold underline'>Hello</h2>
      <Button>Click me</Button>
    </div>
  )
}

export default Home