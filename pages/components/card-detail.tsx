import react from 'react';
import cardstyles from '../../styles/Card.module.css';

export function Detail({ element } : any) {
	let dateToWrite = "Loading...";
	let creators = "Loading...";
	if (!element) {
		return null;
	}
	if (element.date) {
		dateToWrite = element.date;	
	}
	if (element.creators.items.length > 0) {
		creators = element.creators.items[0].name;
	}
	return (
		<div className={cardstyles.detail} data-testid="detailComponent">
			<h3 data-testid="title">{element.title}</h3>
			<ul>
				<li>
					<span className={cardstyles.detail_label}>Issue:   </span>
					<span className={cardstyles.detail_data} data-testid="issue">{element.issueNumber}</span>
				</li>

				<li>
					<span className={cardstyles.detail_label}>Published:</span>
					<br />
					<span className={cardstyles.detail_data} data-testid="date">{dateToWrite}</span>
				</li>

				<li>
					<span className={cardstyles.detail_label}>Creators:</span>
					<br />
					<span className={cardstyles.detail_data} data-testid="creators">{creators}</span>
				</li>
			</ul>
		</div>
	)
}

export default Detail;