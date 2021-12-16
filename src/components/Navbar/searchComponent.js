

import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => (
	<form class="searchBar" action="">
		<input style={{ color: 'white' }} id="search-field" type="search" placeholder="search" required />
		<SearchOutlined className="fa" />
	</form>
);

export default SearchBar;