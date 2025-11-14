import { useState, useRef, useEffect } from 'react';

const SelectCategory = ({ selectedCategory, setSelectedCategory }) => {

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  const containerRef = useRef(null);

  // fecha ao clicar fora
  useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setIsSelectOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className='w-full md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[25%] h-auto flex justify-start items-start flex-col cursor-pointer mt-4'>
      <div ref={containerRef} className='relative w-[80%] cursor-pointer'>
        <button
          onClick={() => setIsSelectOpen((s) => !s)}
          className='w-full h-auto p-2 px-4 bg-[var(--color-main)] text-white flex justify-between items-center rounded-xl border-2 border-gray-200 shadow-md max-h-16 cursor-pointer font-semibold'
          type="button"
        >
          {selectedCategory}
          <span className="material-symbols-outlined">
            {isSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
          </span>
        </button>

        {isSelectOpen && (
          <div
            className='absolute left-0 top-full mt-2 w-full bg-[var(--color-main)] rounded-xl shadow-lg z-50 overflow-hidden cursor-pointer'
            role="menu"
          >
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('All Categories'); setIsSelectOpen(false); }}
              type="button"
            >
              All Categories
            </button>
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('Technology'); setIsSelectOpen(false); }}
              type="button"
            >
              Technology
            </button>

            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('Sports'); setIsSelectOpen(false); }}
              type="button"
            >
              Sports
            </button>
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('Furniture'); setIsSelectOpen(false); }}
              type="button"
            >
              Furniture
            </button>
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('Tools'); setIsSelectOpen(false); }}
              type="button"
            >
              Tools
            </button>
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('Home-Appliances'); setIsSelectOpen(false); }}
              type="button"
            >
              Home 
            </button>
            <button
              className='w-full text-left p-2 px-4 flex items-center gap-4 hover:bg-[var(--color-main-light)] font-semibold text-white cursor-pointer transition-colors duration-300'
              onClick={() => { setSelectedCategory('More'); setIsSelectOpen(false); }}
              type="button"
            >
              Others
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectCategory;