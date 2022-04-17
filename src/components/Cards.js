import React from 'react'
import CardsItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out the books</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardsItem 
                        src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/79bb74658314f64c7facd8ba10d6e62e5b4ba7ec218320e9151eae9dea6d8c24._UY500_UX667_RI_V_TTW_.jpg'
                        text='Beauty And The Beast written by Maurice Sendak'
                        label='Book 1'
                        path='./Category.js'
                    />&nbsp;&nbsp;
                    <CardsItem 
                        src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/79bb74658314f64c7facd8ba10d6e62e5b4ba7ec218320e9151eae9dea6d8c24._UY500_UX667_RI_V_TTW_.jpg'
                        text='Beauty And The Beast written by Maurice Sendak'
                        label='Book 2'
                        path='./Category.js'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardsItem 
                        src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/79bb74658314f64c7facd8ba10d6e62e5b4ba7ec218320e9151eae9dea6d8c24._UY500_UX667_RI_V_TTW_.jpg'
                        text='Beauty And The Beast written by Maurice Sendak'
                        label='Book 3'
                        path='./Category.js'
                    />
                    <CardsItem 
                        src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/79bb74658314f64c7facd8ba10d6e62e5b4ba7ec218320e9151eae9dea6d8c24._UY500_UX667_RI_V_TTW_.jpg'
                        text='Beauty And The Beast written by Maurice Sendak'
                        label='Book 4'
                        path='./Category.js'
                    />
                    <CardsItem 
                        src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/79bb74658314f64c7facd8ba10d6e62e5b4ba7ec218320e9151eae9dea6d8c24._UY500_UX667_RI_V_TTW_.jpg'
                        text='Beauty And The Beast written by Maurice Sendak'
                        label='Book 5'
                        path='./Category.js'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards