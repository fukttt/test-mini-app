
import './App.css'

function App() {
  const updates = [
    { "title": "Обновление 1", "mark": true },
    { "title": "Обновление 2", "mark": true },
    { "title": "Обновление 3", "mark": false },
  ]

  return (
    <div className='p-2 bg-slate-900 h-screen flex flex-col justify-between'>
      <div>
        <div className='flex flex-row justify-between items-center text-gray-200'>
          <h1 className="text-3xl font-bold">
            RoadMap
          </h1>
          <p className='text-sm font-bold'>12.23.13</p>
        </div>
        <div className='border-2 border-white rounded-3xl p-4 text-gray-200 mt-6'>
          <h3 className='font-bold'>Обновление\Изменение</h3>
          <div className="flex flex-col gap-2 mt-2">

            {updates.map((update) => (
              <div className='bg-gray-700 rounded-xl px-2 py-1 flex flex-row justify-between items-center' key={update.title}>
                <p>{update.title}</p>
                <Mark checked={update.mark} />
              </div>
            ))}

          </div>

        </div>
      </div>

      <div className='mb-2 flex justify-center flex-col items-center'>

        <h1 className='text-white'>Загрузка..</h1>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
        </div>


      </div>

    </div>
  )
}


function Mark({ checked }) {
  return (
    <>
      {checked == true ? (
        <div className='border-2 border-green-400 p-1 rounded-md'>
          <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="green" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) :
        <div className='border-2 border-gray-200 p-3 rounded-md'>

        </div>
      }
    </>


  )
}

export default App

