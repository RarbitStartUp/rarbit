import { useState } from 'react'
import axios from 'axios'
import Input from '../components/Input'

export default function Home({ symbols }) {
  // const [convertFrom, setConvertFrom] = useState('USD')
  const amount = 100
  const [convertTo, setConvertTo] = useState('USD')
  // const [amount, setAmount] = useState(null)
  const [convertedAmount, setConvertedAmount] = useState(null)
  /**
   *
   *
   * Fetch the converted amount
   */
  const convertCurrency = () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/CurrencyConverter/convert',
      params: { convertTo, amount },
    }
    axios
      .request(options)
      .then(function (response) {
        const { data } = response
        setConvertedAmount(Math.floor(data.result))
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-3/6 flex-col justify-between md:w-5/6">
        {/* <Input
          label="Convert from"
          dropdown={true}
          onChange={setConvertFrom}
          symbols={symbols}
        /> */}
        <Input
          label="To Currency"
          dropdown={true}
          onChange={setConvertTo}
          symbols={symbols}
          // onClick={convertCurrency}
        />
        {/* <Input
          label="Your Amount"
          dropdown={false}
          onChange={setAmount}
          symbols={{}}
        /> */}
        <button
          className=" pointer w-2/5 rounded border-none bg-danger py-2 uppercase outline-none transition duration-300 hover:shadow-custom"
          onClick={convertCurrency}
        >
          Convert
        </button>
        {convertedAmount && (
          <div className="my-6 flex w-3/5 rounded border-primary text-primary md:w-full">
            <p className="text-lg font-bold uppercase tracking-wider md:text-base">
              Converted Amount:{' '}
              <span className="text-blue">{`${convertedAmount} ${convertTo}`}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const res = await axios.get(
    'http://localhost:3000/api/CurrencyConverter/symbol'
  )
  const { data } = res
  const { symbols } = data
  if (!symbols) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      symbols,
    },
  }
}
