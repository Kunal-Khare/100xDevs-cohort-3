import {React, useId} from 'react'

function InputBox({
  labels,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();


  return (
    <div className = {`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className='w-1/2 flex flex-col'>
        <label htmlFor={amountInputId} 
        className='text-black/40 mb-2 inline-block'> {labels} 
        </label>

        <input
        id = {amountInputId} 
        className='outline-none w-full bg-transparent py-1.5' 
        type="number"
        placeholder='Amount' 
        disabled = {amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div> 

      <div className='w-1/2 flex flex-col'>

      <p className='text-black/40 mb-2 w-full'>
      Currency Type</p>

      <select className='rounded-lg px-1 py-2 bg-gray-100 cursor-pointer outline-none' 
       value={selectCurrency}
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
       disabled={currencyDisable}
       >

       {currencyOptions.map((currency) => ( <option key={currency} value="usd">
          usd
        </option>))}

      </select>
        
      </div>
    </div>
  )
}

export default InputBox 