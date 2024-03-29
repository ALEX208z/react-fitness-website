import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './Plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel quas repellat ut nam corrupti vitae vero, corporis perspiciatis tenetur.
    </Header>
    <section className="plans">
      <div className="plans-container">
        {
          plans.map(({id,name,desc,price,features})=>{
            return <Card key={id} className='plans'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h4>Features</h4>
                {
                  features.map(({feature,available},index)=>{
                    return <p key={index} className={!available? 'disabled':''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans
