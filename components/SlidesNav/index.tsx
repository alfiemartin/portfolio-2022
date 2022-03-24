export type SlidesNavProps = {
  showNav: boolean, 
  activeSlide: number,
  onMouseOver: (e: any) => void, 
  onMouseLeave: (e: any) => void
};

const slideNames = [
  'Welcome',
  'Projects',
  'Professional Experience'
]

export const SlidesNav = ({showNav, onMouseOver, onMouseLeave, activeSlide}: SlidesNavProps) => {
  return (
    <div className={`absolute ${showNav ? 'bottom-0' : '-bottom-10'} transition-all duration-300 z-10 p-4 w-full bg-gray-600 text-gray-100 shadow-inner rounded-t-lg`} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
      <ul className="flex justify-center gap-20">
        {slideNames.map((slide, i) => (
          <li key={i} className={`${activeSlide === i ? 'underline' : 'text-gray-300'}`}>{slide}</li>
        ))}
      </ul>
    </div>
  )
}