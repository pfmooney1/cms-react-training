import react from 'react';
import comicstyles from '../../styles/Comic.module.css';

export function Detail({ element }: any) {
	const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];	
	let ogDate = element.dates[0].date;
	let rawDate = new Date(ogDate);
	let month = rawDate.getMonth();
	let day = rawDate.getDate();
	let year = rawDate.getFullYear();
	let dateToWrite = `${months[month]} ${day}, ${year}`;
	let creators = "N/A";
	if (element.creators.items.length > 0) {
		creators = element.creators.items[0].name;
	}
	// console.log(element.creators.items);
	return (
		<div className={comicstyles.detail}>
			<h3>{element.title}</h3>
			<ul>
				<li>
					<span className={comicstyles.detail_label}>Issue:   </span>
					<span className={comicstyles.detail_data}>{element.issueNumber}</span>
				</li>

				<li>
					<span className={comicstyles.detail_label}>Published:</span><br />
					<span className={comicstyles.detail_data}>{dateToWrite}</span>
				</li>

				<li>
					<span className={comicstyles.detail_label}>Creators:</span><br />
					<span className={comicstyles.detail_data}>{creators}</span>
				</li>
			</ul>
		</div>
	)
}

export default Detail;