import react from 'react';
import cardstyles from '../../styles/Card.module.css';

export function Detail({ comic } : any) {
	if (!comic) return null;
	let dateToWrite = "Loading...";
	let creators = "Loading...";
	if (comic.date) {
		dateToWrite = comic.date;	
	}
	if (comic.creators.items.length > 0) {
		creators = comic.creators.items[0].name;
	}
	return (
		<div className={cardstyles.detail} data-testid="detailComponent">
			<h3 data-testid="title">{comic.title}</h3>
			<ul>
				<li>
					<span className={cardstyles.detail_label}>Issue:   </span>
					<span className={cardstyles.detail_data} data-testid="issue">{comic.issueNumber}</span>
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