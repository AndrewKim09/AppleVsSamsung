import React from 'react'

export const CompareTables = (props) => {
  const { data } = props;
  return (
    <div className='absolute h-auto w-[30vw] flex justify-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-30' style={{ userSelect: 'none' }}>
        <div className='w-full h-full bg-[#f3bdff] rounded-lg border-solid border-4 p-3 border-[#302f2f] flex flex-col'>
          <div className='w-full pb-2 text-lg font-bold text-center border-b-2 border-black border-solid'>
            Features
          </div>
            {data && data.details.map((item, index) => {
              return (
                <div key={index} className='relative w-full h-auto'>
                  
                  <div className='flex justify-between w-full p-2 text-sm align-middle '>
                    <span className='text-left' style={{color: item.winner == "apple" ? "green" : "red"}}>{item.apple}</span>
                    <span className='font-bold'>{item.title}</span>
                    <span className='text-right' style={{color: item.winner == "samsung" ? "green" : "red"}}>{item.samsung}</span>
                  </div>
                  {item.highlight[props.clickedMesh] && <div className='absolute z-40 w-full h-[100%] opacity-50 bg-green-200 top-0'></div>}
                </div>
              )
            })}
          <b className='pt-2 text-center border-t-2 border-black border-solid '>Conclusion</b>
          <div className='text-sm text-center'>
            {data && data.conclusion}
          </div>
        </div>
      </div>
  )
}
