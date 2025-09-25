export function TechIcons() {
  const item = 'h-8 w-8 md:h-10 md:w-10'
  const icons = [
    { src: '/icons/react_light.svg', alt: 'React' },
    { src: '/icons/angular.svg', alt: 'Angular' },
    { src: '/icons/javascript.svg', alt: 'JavaScript' },
    { src: '/icons/php_dark.svg', alt: 'PHP' },
    { src: '/icons/aws_dark.svg', alt: 'AWS' },
    { src: '/icons/figma.svg', alt: 'Figma' },
    { src: '/icons/bootstrap.svg', alt: 'Bootstrap' },
  ]
  return (
    <div className="mt-8 flex items-center justify-center gap-5 opacity-90">
      {icons.map(icon => (
        <img key={icon.alt} src={icon.src} alt={icon.alt} className={item} loading="lazy" />
      ))}
    </div>
  )
}


