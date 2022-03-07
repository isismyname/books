import React from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../img/wimpy.jpeg'

export default function Pages() {
  let nav = useNavigate();

    const landing=()=>{
        nav('/user')
    }
  return (
    <div>
      <div>
        <div className='d-flex my-3'>
            <div className='hamburger'>
                <span></span>
                <span></span>
            </div>
            <p className='position-absolute top-25 start-50 translate-middle my-2'>Diary of a Wimpy Kid</p>
        </div>
        <div className='m-5'>
          <div>
            <p className='fs-3 fw-bold'>Diary of a Wimpy Kid</p>
            <div className='d-flex justify-content-between'>
              <div className='mx-2'>
                <span className='dropcap fs-1'>L</span>
                <p>orem ipsum dolor sit amet consectetur adipisicing elit. Earum ea non molestias optio quidem in veritatis! Corrupti aspernatur assumenda repudiandae odio eveniet quaerat, non doloribus consectetur accusantium animi molestiae nesciunt! Magni, recusandae sed ea id debitis qui facere in natus dolorem itaque. Dolore, tenetur assumenda! Error sed, eveniet aliquid ipsum officia quia odio hic. Velit, iure? Amet sit beatae neque. Impedit, quo deserunt! Error, dignissimos perspiciatis? Praesentium porro exercitationem veniam illo totam saepe voluptatum illum alias? Architecto, nesciunt veniam. Culpa quaerat placeat iure odio voluptatum magni labore molestias recusandae minima cupiditate enim eos consequatur amet dolore, accusantium quibusdam error est quidem sint facilis. Voluptatibus id omnis, fugiat excepturi ipsam iure quisquam quae iste rem beatae repudiandae laboriosam nemo quam minima aliquid dolor nobis iusto corporis! Nihil necessitatibus consectetur unde, iste repellat, dolores quidem saepe ducimus repellendus quod sit impedit, iure assumenda recusandae perspiciatis a aliquam consequuntur nobis maxime in voluptatem veniam modi velit? Eligendi libero earum, perspiciatis natus, ratione sequi velit eius doloribus, modi odit assumenda debitis eos. Facilis asperiores excepturi laborum, dolor inventore sed harum saepe quasi consequuntur deserunt aliquam animi libero ullam perspiciatis doloribus commodi tempora voluptates quia, sunt veritatis quaerat corrupti dignissimos unde similique. Vitae, non doloremque?</p>
                <div onClick={landing} className='cursor w-25'>
                  <p className='wowdetail fs-1'>WOW</p>
                  <p className='detailwow fs-6'>WindowOfWorld</p>
                </div>
              </div>
              <div className='mx-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus cumque culpa, maiores eius modi, enim nulla in totam tempore doloremque itaque dignissimos voluptatibus quaerat reiciendis corrupti natus quae? Eligendi esse illum quis, quasi veritatis placeat reiciendis facilis! Fuga sunt magni ratione aspernatur at cum doloremque porro, est voluptatum quibusdam deserunt, tempora cupiditate sed similique nemo vel quos eveniet autem? Recusandae, commodi asperiores. Expedita illo ducimus sed maiores repudiandae mollitia possimus nisi nobis aspernatur soluta, voluptatum sapiente quis necessitatibus. Exercitationem minus laboriosam enim et. Maxime, numquam totam. A dignissimos quisquam molestias maxime? Deleniti quia quas voluptates consequuntur molestias minima sequi velit provident labore saepe beatae dolores vel repellat mollitia illum fugit nisi porro dicta iure doloribus, corrupti sit aperiam? Ratione id porro nesciunt quasi reiciendis fugiat cumque ducimus fuga, ipsum perspiciatis officia error, debitis hic incidunt molestias aliquid fugit minima repudiandae quae iusto aliquam voluptates. A est cupiditate consequatur reprehenderit.</p>
                <img src={img} alt="Wimpy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
