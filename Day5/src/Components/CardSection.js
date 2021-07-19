import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-warning ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card cardTitle="Sanket" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="click Me"/>
           <Card cardTitle="Rahul" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="click Me"/>
           <Card cardTitle="Akash" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="click Me"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection