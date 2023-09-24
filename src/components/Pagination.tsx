import {GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

function Pagination({pageNumber, setPageNumber}: {pageNumber:any, setPageNumber:any}) {

    const handlePrevious = () => {
        if(pageNumber > 1){
            setPageNumber(pageNumber-1)
        }
    }

    const handleNext = () => {
        setPageNumber(pageNumber+1)
    }

  return (
    <div className='text-white my-10 flex items-center align-center justify-center '>
        <div className='text-4xl text-white bg-neutral-500 p-1.5 rounded-l-lg'>
            <GrCaretPrevious onClick={handlePrevious}/>
        </div>
        <div className='text-5xl px-2.5 py-1 bg-neutral-800'>{pageNumber}</div>
        <div className='text-4xl bg-neutral-500 p-1.5 rounded-r-lg'>
            <GrCaretNext onClick={handleNext}/>
        </div>
    </div>
    
  )
}

export default Pagination