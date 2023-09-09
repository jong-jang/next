import { useState } from 'react';
import axios from 'axios';

function Post() {
	const [Title, setTitle] = useState('');
	const [Content, setContent] = useState('');

	const handleSend = (e) => {
		e.preventDefault();
		const item = { title: Title, content: Content };
		console.log(item);
		axios.post('/api/post', item).then((res) => console.log(res));
	};

	return (
		<main>
			<form onSubmit={handleSend}>
				<label htmlFor='title'>title</label>
				<input type='text' value={Title} onChange={(e) => setTitle(e.target.value)} />
				<br />
				<label htmlFor='content'>content</label>
				<textarea name='content' id='content' cols='30' rows='10' value={Content} onChange={(e) => setContent(e.target.value)}></textarea>
				<button>save</button>
			</form>
		</main>
	);
}

export default Post;
