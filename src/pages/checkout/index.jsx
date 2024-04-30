import React from 'react'

function CheckoutPage() {
  return (
    <div className='checkout'>
      <div className="checkout-top">
        <h3 className="checkout-top__title">Оформить заказ</h3>
      </div>
      <div className='checkout-wrapper'>
        <form className="checkout-form">
          <div className="checkout-row">
            <p className="checkout-title">Область</p>
            <select className='checkout-select'>
              <option>Ташкент</option>
              <option>Самарканд</option>
              <option>Навои</option>
              <option>Бухара</option>
              <option>Андижан</option>
              <option>Джиззах</option>
              <option>Хорезм</option>
              <option>Кашкадарья</option>
              <option>Сурхандарья</option>
              <option>Сирдарья</option>
              <option>Фергана</option>
              <option>Наманган</option>
              <option>Каракалпакистан</option>
            </select>
          </div>
          <div className="checkout-wrap">
            <div className="checkout-row">
              <label htmlFor="checkout-name" className='checkout-name'>Имя</label>
              <input type="text" id='checkout-name' className='checkout-input' placeholder='Запишите имя' />
            </div>
            <div className="checkout-row">
              <label htmlFor="checkout-surname" className='checkout-name'>Фамилия</label>
              <input type="text" id='checkout-surname' className='checkout-input' placeholder='Запишите фамилию' />
            </div>
          </div>
          <div className='checkout-wrap'>
            <div className="checkout-row">
              <label htmlFor="checkout-num" className='checkout-name'>Номер Телефона </label>
              <input type="number" id='checkout-num' className='checkout-input' placeholder='Запишите номер телефона' />
            </div>
            <div className="checkout-row">
              <label htmlFor="checkout-addres" className='checkout-name'>Электронная почта</label>
              <input type="email" id='checkout-addres' className='checkout-input' placeholder='запишите электронную почту' />
            </div>
          </div>
          
          <p className="checkout-pay">Способ оплаты:</p>
         
          
          <div className="checkout-payment">
            <div className='checkout-col'>
              <label htmlFor="checkout-price" className='checkout-title'>Своя карта</label>
              <input type="checkbox" id='checkout-price' className='checkout-cash' />
            </div>
            <div className='checkout-col'>
              <label htmlFor="checkout-cash" className='checkout-title'>Бонусная карта</label>
              <input type="checkbox" id='checkout-cash' className='checkout-cash' />
            </div>
            <div className='checkout-col'>
              <label htmlFor="checkout-cash" className='checkout-title'>Наличными</label>
              <input type="checkbox" id='checkout-cash' className='checkout-cash' />
            </div>
            
          </div>

          <button className="checkout-btn">Заказать</button>
        </form>
        
      </div>
    </div>
  )
}

export default CheckoutPage