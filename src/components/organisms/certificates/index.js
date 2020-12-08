import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CertData } from './certData'
import styles from './style.module.css'
import EduCard from './../eduCard'
import TextBox from './../../atoms/textBox'

const Certificates = props => {
		const responsive = {
		  superLargeDesktop: {
		    breakpoint: { max: 4000, min: 3000 },
		    items: 5
		  },
		  desktop: {
		    breakpoint: { max: 3000, min: 1024 },
		    items: 4
		  },
		  tablet: {
		    breakpoint: { max: 1024, min: 464 },
		    items: 3
		  },
		  mobile: {
		    breakpoint: { max: 464, min: 0 },
		    items: 2
		  }
		};

	
	return (
		<div className={styles.certificates}>
			<TextBox theme="subHead">Certificates</TextBox>
		<Carousel  
			className={styles.container}
			responsive={responsive} 
			swipeable 
			draggable 

			showDots={false} 
			infinite={true}  
			removeArrowOnDeviceType={["tablet", "mobile"]} 
			arrows={false} 
			autoPlay={props.deviceType !== ("mobile" || "tablet") ? true : false} 
			autoPlaySpeed={5000}  
			deviceType={props.deviceType} >
		  	{
		  		CertData.map(e => (
		  		<div
		  			key={e.id}>
		  			<EduCard
		  				name={e.name}
		  				no={e.no}
		  				date={e.date}
		  				imgurl={e.url}
		  				link={e.link} />
		  		</div>
		  		))
		  	}
		</Carousel>
		</div>
	)
}

export default Certificates