import React from 'react'

const imageBackground = (strings, ...keys) => (...props)=> {
	const style = strings.map((string, index) => {
		if(keys[index]) return string = string.replace(/^\s+|\s+$|\n/g, '') + keys[index](props[0])
		return string.replace(/^\s+|\s+$|\n/g, '');
  }).join('').replace(/;/g, ',').slice(0,-1)
  console.log(`${style}`, '<=================== style ==================');
  return <div>s</div>
}

export default imageBackground`  
  background-image: url(${props => props.src});
  height: 125px;
  background-position: center;
  background-size: cover;
`