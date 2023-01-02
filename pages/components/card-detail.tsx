import react from 'react';
import cardstyles from '../../styles/Card.module.css';

export function Detail({ element } : any) {
	const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];	
	let dateToWrite = "N/A";
	if (!element) {
		return null;
	}
	if (element.dates) {
		let ogDate = element.dates.date;
		let rawDate = new Date(ogDate);
		let month = rawDate.getMonth();
		let day = rawDate.getDate();
		let year = rawDate.getFullYear();
		dateToWrite = `${months[month]} ${day}, ${year}`;	
	}

	let creators = "N/A";
	if (element.creators.items.length > 0) {
		creators = element.creators.items[0].name;
	}
	return (
		<div className={cardstyles.detail}>
			<h3>{element.title}</h3>
			<ul data-testid="ul">
				<li>
					<span className={cardstyles.detail_label}>Issue:   </span>
					<span className={cardstyles.detail_data}>{element.issueNumber}</span>
				</li>

				<li>
					<span className={cardstyles.detail_label}>Published:</span>
					<br />
					<span className={cardstyles.detail_data}>{dateToWrite}</span>
				</li>

				<li>
					<span className={cardstyles.detail_label}>Creators:</span>
					<br />
					<span className={cardstyles.detail_data}>{creators}</span>
				</li>
			</ul>
		</div>
	)
}

export default Detail;