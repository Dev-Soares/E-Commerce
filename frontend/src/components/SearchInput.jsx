

const SearchInput = () => {
  return (
    <div className='w-full h-auto  flex justify-center items-center m-4 self-center'>
      <input type="text" placeholder="Buscar..." className="border-2 border-[var(--color-main)] p-2 rounded-xl w-[80%] md:w-[60%] xl:w-[40%] md:text-xl font-item lg:min-h-15 xl:min-h-18 lg:p-4">
      </input>
    </div>
  )
}

export default SearchInput
