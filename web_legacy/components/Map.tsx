import React, { useEffect, useRef } from 'react'

export default function Map({ options, onMount, className }) {
  const ref = useRef()
  useEffect(() => {
    // const onLoad = () => {
    //   const map = new window.google.maps.Map(ref.current, options);
    //   if (typeof onMount === `function`) onMount(map)
    // }
    // if (!window.google) {
    //   const script = document.createElement(`script`)
    //   script.src =
    //     `https://maps.googleapis.com/maps/api/js?key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc`
    //   document.head.append(script)
    //   script.addEventListener(`load`, onLoad)
    //   return () => script.removeEventListener(`load`, onLoad)
    // } else onLoad()
  }, [onMount, options])

  return (
    <div
      style={{height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}

Map.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 5,
  },
}