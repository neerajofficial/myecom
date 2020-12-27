import React from 'react'

const Image = props => {
	const {url, alt, height, width} = props;

	return (
		<img 
			src={url}
			alt={alt}
			height={height} 
			width={width} />
	)
}

export default Image