import { Container } from 'react-bootstrap';
import './App.css'

import { useState, useEffect, useRef } from 'react'


function App() {

  const lingRef = useRef(null)

  const scrollTos = (ref) => {
    scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })

  }

  return (
    <>
      <Container className='text-light text-center mt-5 border border-5 p-5 border-warning rounded-5'>
        <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={300} className='mb-5 imgg border border-5 rounded-5' onClick={() => { scrollTos(lingRef.current) }} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quibusdam reprehenderit magnam nemo consequuntur esse facere distinctio tempora dolore labore, debitis ipsa eaque quaerat perspiciatis repellat cumque eligendi. Mollitia exercitationem odit officia porro ipsa dolor, aliquid a quae officiis eaque animi necessitatibus quos odio! Voluptate ullam molestiae quisquam cum consequatur dicta provident nulla natus ea praesentium iste, tempore a, dolorem iure laborum officia beatae quae eum? Quae hic amet voluptatum voluptas? Ad, explicabo eum. Saepe earum debitis corporis optio ipsum, totam sapiente sed, quas magnam reiciendis eos accusantium neque animi quaerat nisi nihil quidem aliquam rerum voluptate laborum! Cum atque recusandae veniam optio nemo eos! Ipsum cum ipsam vero perferendis natus est quidem molestiae sequi facere dolore qui, nemo placeat, sed provident, unde quisquam dolorem nobis sit quibusdam maiores explicabo quos distinctio neque aperiam. Dolorum deserunt asperiores, iure saepe repellat, voluptas ut, sint aspernatur repellendus inventore sunt error numquam quidem recusandae assumenda? Soluta ut laboriosam impedit accusantium voluptates vitae sed cupiditate eligendi, minima cumque inventore, distinctio natus quibusdam nulla delectus iusto aspernatur maiores ad ducimus officia vel saepe, ullam eius excepturi. Voluptatem blanditiis nam at neque omnis minima expedita illum distinctio, tenetur ipsum, perferendis perspiciatis quisquam, quaerat deserunt ut iusto?</p>

        <a href="#" target='_blank' className='pt-5' ref={lingRef}>React Js Broo</a>
      </Container>
    </>
  )
}

export default App;
