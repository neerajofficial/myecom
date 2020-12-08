import React from 'react'

const SocialIcon = props => {
	const {pathUrl, nameImg, height} = props
	return (
		<img 
			src={pathUrl} 
			alt={nameImg}
			height={height} />
		
	)
}

export default SocialIcon