import { useState, useEffect, useRef } from 'react'

export default function RangeSlider({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}) {
  const progressRef = useRef(null)
  const [minValue, setMinValue] = useState(initialMin)
  const [maxValue, setMaxValue] = useState(initialMax)

  // const handleMin = (e) => {
  //   if (maxValue - minValue >= priceCap && maxValue <= max) {
  //     if (parseInt(e.target.value) > parseInt(maxValue)) {
  //     } else {
  //       setMinValue(parseInt(e.target.value))
  //     }
  //   } else {
  //     if (parseInt(e.target.value) < minValue) {
  //       setMinValue(parseInt(e.target.value))
  //     }
  //   }
  // }

  // const handleMax = (e) => {
  //   if (maxValue - minValue >= priceCap && maxValue <= max) {
  //     if (parseInt(e.target.value) < parseInt(minValue)) {
  //     } else {
  //       setMaxValue(parseInt(e.target.value))
  //     }
  //   } else {
  //     if (parseInt(e.target.value) > maxValue) {
  //       setMaxValue(parseInt(e.target.value))
  //     }
  //   }
  // }

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + '%'
    progressRef.current.style.right = step - (maxValue / max) * step + '%'
  }, [minValue, maxValue, max, step])

  return (
    <div className="grid min-h-screen place-items-center bg-white">
      <div className="flex w-96 flex-col rounded-lg bg-white px-6 py-4 shadow-xl">
        <h1 className="mb-1 text-3xl font-bold text-gray-800">Rarbit Token</h1>
        <p className="text-lg font-semibold text-gray-700">
          Use slider to allocate token
        </p>

        <div className="my-6 flex items-center ">
          <div className="rounded-md">
            <input
              onChange={(e) => setMinValue(e.target.value)}
              type="number"
              value={minValue}
              className="w-24 rounded-md border border-gray-400"
            />
          </div>
          <span className="p-2 font-semibold"> %</span>

          {/* <div className="ml-2 text-lg font-semibold"> - </div> */}
          {/* <div className=" ">
            <span className="p-2 font-semibold"> Max</span>
            <input
              onChange={(e) => setMaxValue(e.target.value)}
              type="number"
              value={maxValue}
              className="w-24 rounded-md border border-gray-400"
            />
          </div> */}
        </div>

        <div className="mb-4">
          <div className="slider relative h-1 rounded-md bg-gray-300">
            <div
              className="progress absolute h-1 rounded bg-green-300 "
              ref={progressRef}
            ></div>
          </div>

          <div className="range-input relative  ">
            <input
              // onChange={handleMin}
              type="range"
              min={min}
              step={step}
              max={max}
              value={minValue}
              className="range-min pointer-events-none absolute  -top-1  h-1   w-full  appearance-none bg-transparent"
            />

            {/* <input
              onChange={handleMax}
              type="range"
              min={min}
              step={step}
              max={max}
              value={maxValue}
              className="range-max pointer-events-none absolute  -top-1 h-1  w-full appearance-none  bg-transparent"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
